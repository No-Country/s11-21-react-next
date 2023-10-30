import NextCors from "nextjs-cors";
import { algoliaDB } from "@/lib/algoliaConnection";

export default async function handler(req, res) {
  try {
    await NextCors(req, res, {
      methods: ["GET"],
      origin: "*", // Configura esto adecuadamente para tu aplicación en producción
      optionsSuccessStatus: 200,
      sizeLimit: 20 * 1024 * 1024,
    });

    if (req.method !== "GET") {
      return res.status(405).json({
        error: "Método incorrecto",
      });
    }

    const { place } = req.query;

    const results = await algoliaDB.search(place, (err, { hits }) => {
      if (err) {
        console.error(err);
        return;
      }
      return hits;
    });

    return res.status(200).json({ results: results.hits });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({
      error: "Ocurrió un error en el servidor.",
      details: error.message,
    });
  }
}

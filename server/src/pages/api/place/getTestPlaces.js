import NextCors from "nextjs-cors";
import { firestoreDB } from "@/lib/firebaseConnection";

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

    const results = [];

    const placesSnapshot = await firestoreDB.collection("places").get();

    placesSnapshot.forEach((doc) => {
      // Agrega los datos de cada lugar a la matriz 'results'
      results.push({ placeId: doc.id, data: doc.data() });
    });

    return res.status(200).json({ results });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({
      error: "Ocurrió un error en el servidor.",
      details: error.message,
    });
  }
}

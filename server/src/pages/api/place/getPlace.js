import NextCors from "nextjs-cors";
import { firestoreDB } from "@/lib/firebaseConnection";

export default async function handler(req, res) {
  try {
    await NextCors(req, res, {
      methods: ["GET"],
      origin: "*", // Configura esto adecuadamente para tu aplicación en producción
      optionsSuccessStatus: 200,
    });

    if (req.method !== "GET") {
      return res.status(405).json({
        error: "Método incorrecto",
      });
    }

    const { placeId } = req.query;

    // Verifica si placeId es un valor válido (no nulo ni vacío)
    if (!placeId || placeId.trim() === "") {
      return res.status(400).json({
        error: "ID de lugar no válido",
      });
    }

    // Aumenta el número de vistas del lugar en uno
    const placeRef = firestoreDB.collection("places").doc(placeId);
    const placeDoc = await placeRef.get();

    if (!placeDoc.exists) {
      return res.status(404).json({ error: "Lugar no encontrado" });
    }

    const placeData = placeDoc.data();

    // Asegura que el lugar tenga una propiedad 'views'
    if (!placeData || typeof placeData.views !== "number") {
      return res.status(500).json({
        error: "Error en los datos del lugar",
      });
    }

    await placeRef.update({
      views: placeData.views + 1,
    });

    return res.status(200).json({ placeData: placeData });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({
      error: "Ocurrió un error en el servidor.",
      details: error.message,
    });
  }
}

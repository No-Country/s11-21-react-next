import NextCors from "nextjs-cors";
import { firestoreDB } from "@/lib/firebaseConnection";

export default async function handler(req, res) {
  try {
    await NextCors(req, res, {
      methods: ["GET"], // Cambiado a GET, ya que no requiere datos de entrada
      origin: "*", // Asegúrate de configurar esto adecuadamente para tu aplicación en producción
      optionsSuccessStatus: 200,
    });

    if (req.method !== "GET") {
      return res.status(400).json({ error: "Método HTTP incorrecto" });
    }

    // Obtener los 10 lugares con más vistas
    const topPlacesSnapshot = await firestoreDB
      .collection("places")
      .orderBy("views", "desc")
      .limit(10)
      .get();

    const topPlaces = [];
    topPlacesSnapshot.forEach((doc) => {
      const placeData = doc.data();
      topPlaces.push({
        id: doc.id,
        ...placeData,
      });
    });

    return res.status(200).json({ topPlaces });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
}

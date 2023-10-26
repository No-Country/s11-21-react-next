import NextCors from "nextjs-cors";
import { firestoreDB } from "@/lib/firebaseConnection";

export default async function handler(req, res) {
  try {
    await NextCors(req, res, {
      methods: ["PUT"],
      origin: "*",
      optionsSuccessStatus: 200,
    });

    if (req.method !== "PUT") {
      return res.status(405).json({
        error: "Método incorrecto",
      });
    }

    const { placeId, userId } = req.body;

    // Aumenta el número de vistas del lugar en uno
    const placeRef = firestoreDB.collection("places").doc(placeId);
    const placeDoc = await placeRef.get();
    const placeData = placeDoc.data();

    if (!placeData || !placeData.views) {
      return res.status(404).json({ error: "Lugar no encontrado" });
    }

    const placeViews = placeData.views;

    await placeRef.update({
      views: placeViews + 1,
    });

    // Agrega el ID del lugar visitado al campo "recentPlaces" del usuario si no existe en la lista
    const userRef = firestoreDB.collection("users").doc(userId);
    const userSnapshot = await userRef.get();
    const userData = userSnapshot.data();

    if (!userData.recentPlaces) {
      userData.recentPlaces = []; // Asegúrate de que el campo exista
    }

    // Verifica si el lugar ya está en la lista de recientes
    if (!userData.recentPlaces.includes(placeId)) {
      // Si no está en la lista, agrégalo al principio del array
      userData.recentPlaces.unshift(placeId);

      await userRef.update({
        recentPlaces: userData.recentPlaces,
      });
    }

    return res
      .status(200)
      .json({ placeVisited: true, placeViews: placeViews + 1 });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({
      error: "Ocurrió un error en el servidor.",
      details: error.message,
    });
  }
}

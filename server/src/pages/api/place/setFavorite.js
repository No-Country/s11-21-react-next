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

    // Agrega el ID del lugar visitado al campo "recentPlaces" del usuario si no existe en la lista
    const userRef = firestoreDB.collection("users").doc(userId);
    const userSnapshot = await userRef.get();
    const userData = userSnapshot.data();

    if (!userData.favorites) {
      userData.favorites = []; // Asegúrate de que el campo exista
    }

    // Verifica si el lugar ya está en la lista de recientes
    if (!userData.favorites.includes(placeId)) {
      // Si no está en la lista, agrégalo al principio del array
      userData.favorites.unshift(placeId);

      await userRef.update({
        favorites: userData.favorites,
      });
    }

    return res.status(200).json({ placeLiked: true });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({
      error: "Ocurrió un error en el servidor.",
      details: error.message,
    });
  }
}

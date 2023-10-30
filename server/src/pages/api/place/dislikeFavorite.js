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

    const userRef = firestoreDB.collection("users").doc(userId);
    const userSnapshot = await userRef.get();
    const userData = userSnapshot.data();

    if (!userData.favorites) {
      userData.favorites = []; // Asegúrate de que el campo exista
    }

    // Filtrar el lugar específico del array de favoritos
    userData.favorites = userData.favorites.filter((id) => id !== placeId);

    // Actualizar el campo "favorites" del usuario con el array filtrado
    await userRef.update({
      favorites: userData.favorites,
    });

    return res.status(200).json({ placeRemoved: true });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({
      error: "Ocurrió un error en el servidor.",
      details: error.message,
    });
  }
}

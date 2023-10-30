import NextCors from "nextjs-cors";
import { firestoreDB } from "@/lib/firebaseConnection";

export default async function handler(req, res) {
  try {
    await NextCors(req, res, {
      methods: ["GET"],
      origin: "*",
      optionsSuccessStatus: 200,
    });

    if (req.method !== "GET") {
      return res.status(405).end();
    }

    const { userId } = req.query;
    const userRef = firestoreDB.collection("users").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return res
        .status(400)
        .json({ error: "No se encontró información del usuario." });
    }

    const userData = userDoc.data();

    if (userData) {
      const favoritePlaces = userData.favorites || []; // Verificar si 'favorites' existe en 'userData'
      const detailedFavoritePlaces = [];

      if (favoritePlaces.length > 0) {
        for (const placeId of favoritePlaces) {
          const placeRef = firestoreDB.collection("places").doc(placeId);
          const placeDoc = await placeRef.get();

          if (placeDoc.exists) {
            const placeData = placeDoc.data();
            const newPlaceData = { ...placeData, placeId };
            detailedFavoritePlaces.push(newPlaceData);
          }
        }

        return res.status(200).json({ userFavorites: detailedFavoritePlaces });
      } else {
        return res.status(200).json({ userFavorites: [] });
      }
    } else {
      return res
        .status(400)
        .json({ error: "No se encontró información del usuario." });
    }
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
}

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

    // Obtenemos 5 resultados aleatorios
    const randomResults = getRandomResults(results, 5);

    return res.status(200).json({ results: randomResults });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({
      error: "Ocurrió un error en el servidor.",
      details: error.message,
    });
  }
}

function getRandomResults(results, count) {
  if (count >= results.length) {
    return results;
  }

  const shuffled = results.sort(() => 0.5 - Math.random()); // Mezcla aleatoriamente el arreglo
  return shuffled.slice(0, count); // Devuelve los primeros 'count' elementos
}

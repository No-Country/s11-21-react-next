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

    // Obtiene una referencia a la colección "places"
    const placesRef = firestoreDB.collection("places");
    const results = [];

    // Realiza la consulta para ordenar los lugares por el atributo "stars" de mayor a menor
    placesRef
      .orderBy("stars", "desc")
      .limit(10)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Agrega cada lugar al arreglo de resultados
          results.push(doc.data());
        });

        // Devuelve el arreglo completo como respuesta JSON
        return res.status(200).json({ results });
      })
      .catch((error) => {
        console.error("Error al obtener los lugares:", error);
        return res.status(500).json({
          error: "Ocurrió un error en el servidor.",
          details: error.message,
        });
      });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({
      error: "Ocurrió un error en el servidor.",
      details: error.message,
    });
  }
}

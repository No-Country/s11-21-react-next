import NextCors from "nextjs-cors";
import { firestoreDB } from "@/lib/firebaseConnection";
import { algoliaDB } from "@/lib/algoliaConnection";

export default async function handler(req, res) {
  try {
    await NextCors(req, res, {
        methods: ["DELETE"],
        origin: "*", // Configura esto adecuadamente para tu aplicación en producción
        optionsSuccessStatus: 200,
        sizeLimit: 20 * 1024 * 1024,
    });

    if (req.method !== "DELETE") {
        return res.status(405).json({
            error: "Método incorrecto",
        });
    }

    const { placeId } = req.query;

    //Obtener la referencia del lugar y eliminarlo en Firebase
    const refPlace = firestoreDB.collection("places").doc(placeId);
    await refPlace.delete();
    
    //Borrar el lugar en la base de datos Algolia
    await algoliaDB.deleteObject(placeId, (err, content) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Objeto eliminado correctamente');
    });

    return res.json({ placeDeleted: true, message: 'Lugar eliminado correctamente' });
    } catch (error) {
        console.error("Error en el manejador:", error);
        return res.status(500).json({
            error: "Ocurrió un error en el servidor.",
            details: error.message,
        });
    }
}

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

    const { placeId, userId, commentId } = req.query;

    const refPlace = firestoreDB.collection("places").doc(placeId);
    const placeDoc = await refPlace.get();
    const placeData = placeDoc.data();
    const newPlaceComments = [];

    placeData.comments.forEach((element) => {
      if (element.id != commentId) {
        newPlaceComments.push(element);
      }
    });

    await refPlace.update({ ...placeData, comments: newPlaceComments });

    const refUser = firestoreDB.collection("users").doc(userId);
    const userDoc = await refUser.get();
    const userData = userDoc.data();
    const newUserComments = [];

    userData.comments.forEach((element) => {
      if (element.id != commentId) {
        newUserComments.push(element);
      }
    });
    await refUser.update({ ...userData, comments: newUserComments });

    // Obtén la lista de comentarios actual en Algolia
    const algoliaComments = await algoliaDB.getObject(placeId);

    // Excluye el comentario con el ID proporcionado
    const updatedComments = algoliaComments.comments.filter(
      (comment) => comment.id !== commentId
    );

    // Actualiza la lista de comentarios en Algolia
    await algoliaDB.partialUpdateObject({
      comments: updatedComments,
      objectID: placeId,
    });

    return res.json({
      commentDeleted: true,
      message: "Comentario eliminado correctamente",
    });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({
      error: "Ocurrió un error en el servidor.",
      details: error.message,
    });
  }
}

import NextCors from "nextjs-cors";
import { firestoreDB } from "@/lib/firebaseConnection";
import { algoliaDB } from "@/lib/algoliaConnection";
import { getTodayDate } from "@/tools";

export default async function handler(req, res) {
  try {
    await NextCors(req, res, {
      methods: ["POST"],
      origin: "*", // Debes configurar esto adecuadamente para tu aplicación en producción
      optionsSuccessStatus: 200,
    });

    // Verificar que no sea otro método diferente al de POST (Crear)
    if (req.method !== "POST") {
      return res.status(405).end();
    }

    const { comment } = req.body; // Obtener los datos de "req" desde el cuerpo de la solicitud
    const { placeId, userId } = req.query;
    let starAverage = 0;
    let divider = 0;
    const idComment = generarNumeroAleatorio();

    // Obteniendo la referencia del lugar
    const refPlace = firestoreDB.collection("places").doc(placeId);
    const placeDoc = await refPlace.get();
    const placeData = placeDoc.data();

    // Obtener la referencia del usuario
    const refUser = firestoreDB.collection("users").doc(userId);
    const userDoc = await refUser.get();
    const userData = userDoc.data();

    if (placeDoc.exists) {
      // const placeData = placeDoc.data();
      const algoliaPlaceData = await algoliaDB.getObject(placeId);

      const algoliaPlaceComments = algoliaPlaceData.comments;

      // Agregar el comentario al lugar
      if (!placeData.comments) {
        placeData.comments = [];
      }

      const newComment = {
        ...comment,
        id: idComment,
        name: userData.name,
        date: getTodayDate()
      };

      placeData.comments.push(newComment);
      algoliaPlaceData.comments.push(newComment);
      //console.log("se agrega el nuevo comentario ", algoliaPlaceComments);
      // Actualizar el lugar con el nuevo comentario
      await refPlace.update(placeData);
      await algoliaDB.partialUpdateObject({
        comments: algoliaPlaceData.comments,
        objectID: placeId,
      });
    } else {
      console.log("El documento de lugar no existe.");
    }

    if (userDoc.exists) {
      // Agregar el comentario al usuario
      if (!userData.comments) {
        userData.comments = [];
      }
      const newComment = {
        ...comment,
        id: idComment,
        idPlace: placeId,
        date: getTodayDate()
      };

      userData.comments.push(newComment);

      // Actualizar el usuario con el nuevo comentario
      await refUser.update(userData);
    } else {
      console.log("El documento de usuario no existe.");
    }
    if (placeData.comments.length != 0) {
      placeData.comments.forEach(element => {
        starAverage += element.stars;
        divider++;
      });
  
      placeData.stars = Math.floor( starAverage/divider ) ;
      await refPlace.update(placeData);
    }

    return res.json({
      success: true,
      message: "Comentario guardado con éxito.",
    });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
}

function generarNumeroAleatorio() {
  const longitud = 10;
  let numeroAleatorio = "";
  for (let i = 0; i < longitud; i++) {
    const digito = Math.floor(Math.random() * 10);
    numeroAleatorio += digito;
  }
  return numeroAleatorio;
}

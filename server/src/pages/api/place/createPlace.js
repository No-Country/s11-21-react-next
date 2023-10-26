import NextCors from "nextjs-cors";
import { firestoreDB } from "@/lib/firebaseConnection";
import { algoliaDB } from "@/lib/algoliaConnection";
import { cloudinary } from "@/lib/cloudinaryConnection";

export default async function handler(req, res) {
  try {
    await NextCors(req, res, {
      methods: ["POST"],
      origin: "*", // Configura esto adecuadamente para tu aplicación en producción
      optionsSuccessStatus: 200,
      sizeLimit: 20 * 1024 * 1024,
    });

    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Método incorrecto",
      });
    }

    const {
      category,
      createdBy,
      description,
      imagesUrl,
      latitude,
      longitude,
      placeName,
      socialNetworks,
      website,
      zone,
    } = req.body;

    // Procesar y subir los archivos a Cloudinary, obteniendo las rutas de las imágenes
    const transformedImages = [];

    // for (const file in imagesUrl) {
    //   const result = await cloudinary.uploader.upload(file, {
    //     resource_type: "image",
    //     discard_original_filename: true,
    //     width: 1000,
    //   });
    //   transformedImages.push(result.secure_url);
    // }

    const finalCategory = category ? category : "otro";
    const finalWebsite = website ? website : "";

    const newPlace = await firestoreDB.collection("places").add({
      category: finalCategory,
      createdBy,
      comments: [],
      description,
      imagesUrl,
      latitude,
      longitude,
      placeName,
      socialNetworks,
      website: finalWebsite,
      views: 0,
      zone,
      stars: 0,
    });

    const testDeAlgolia = await algoliaDB.saveObject({
      objectID: newPlace.id,
      category: finalCategory,
      createdBy,
      comments: [],
      description,
      imagesUrl,
      latitude,
      longitude,
      placeName,
      socialNetworks,
      website: finalWebsite,
      views: 0,
      zone,
      stars: 0,
    });

    return res.json({ placeCreated: newPlace, testDeAlgolia });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({
      error: "Ocurrió un error en el servidor.",
      details: error.message,
    });
  }
}

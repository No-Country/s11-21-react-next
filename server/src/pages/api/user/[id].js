import { UserModel } from "@/models/User";
import { UserController } from "@/controllers/UserController";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  try {
    await NextCors(req, res, {
<<<<<<< HEAD
      methods: ["PUT", "DELETE"],
=======
      methods: ["GET", "PUT", "DELETE"],
>>>>>>> d60e8ecbcc5fee3b3df9fd0259ad5e7333f14fe8
      origin: "*", // Asegúrate de configurar esto adecuadamente para tu aplicación en producción
      optionsSuccessStatus: 200,
    });

    const { id } = req.query; //? Obtener el valor de 'id' desde el objeto 'query' en 'req'
    const { updateData } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Falta el parámetro 'id'." });
    }

    switch (req.method) {
<<<<<<< HEAD
=======
      case "GET":
        //? Lógica para actualizar con el parametro id
        const getUserData = await UserModel.getUserMe(id);
        if (!getUserData) {
          return res.status(404).json({ error: "Usuario no encontrado." });
        }

        return res.status(200).json({ userData: getUserData });
>>>>>>> d60e8ecbcc5fee3b3df9fd0259ad5e7333f14fe8
      case "PUT":
        //? Lógica para actualizar con el parametro id
        const updateUser = await UserModel.updateUser(id, updateData);
        if (!updateUser) {
          return res.status(404).json({ error: "Usuario no encontrado." });
        }

        return res
          .status(200)
          .json({ message: "Usuario actualizado con éxito" });
      case "DELETE":
        //? Lógica para eliminar el usuario con el parametro id
        const deletedUser = await UserController.deleteUser(id);
        if (!deletedUser) {
          return res
            .status(404)
            .json({ error: "El email no coincide con ningun usuario." });
        }

        return res.status(200).json({ message: "Usuario eliminado con éxito" });
      default:
        //? Cuando el metodo no es ninguno de los dos anteriores, arroja esta respuesta
        return res.status(405).end();
    }
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
}

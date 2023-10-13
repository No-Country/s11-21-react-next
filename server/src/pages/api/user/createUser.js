import { UserModel } from "@/models/User";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  try {
    await NextCors(req, res, {
      methods: ["POST"],
      origin: "*", // Debes configurar esto adecuadamente para tu aplicación en producción
      optionsSuccessStatus: 200,
    });

    //? Verificar que no sea otro metodo diferente al de POST (Crear)
    if (req.method !== "POST") {
      return res.status(405).end(); 
    }

    const { name, email } = req.body; //? Obtener el nombre, email de "req" con el body

    //? Para poder crear un usuario, el nombre y el email, son obligatorios asi que se verifican primero
    if (!name || !email) {
      return res.status(400).json({ error: "Faltan datos obligatorios." });
    }

    //? Lógica para crear un usuario
    const userTest = await UserModel.createUser(email, name);

    return res.status(200).json({ userTest });
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
}
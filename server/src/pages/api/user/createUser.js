import NextCors from "nextjs-cors";
import { UserController } from "@/controllers/UserController";

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

<<<<<<< HEAD
    const { name, email, phone, password } = req.body; //? Obtener el nombre, email de "req" con el body

    //? Para poder crear un usuario, el nombre y el email, son obligatorios asi que se verifican primero
    if (!name || !email || !password || !phone) {
=======
    const { name, lastname, email, phone, password } = req.body; //? Obtener el nombre, email de "req" con el body

    //? Para poder crear un usuario, el nombre y el email, son obligatorios asi que se verifican primero
    if (!name || !lastname || !email || !password || !phone) {
>>>>>>> d60e8ecbcc5fee3b3df9fd0259ad5e7333f14fe8
      return res.status(400).json({ error: "Faltan datos obligatorios." });
    }

    //? Lógica para crear un usuario
    const userCreated = await UserController.createUser(
      email,
      name,
      phone,
<<<<<<< HEAD
      password
    );
=======
      lastname,
      password
    );

>>>>>>> d60e8ecbcc5fee3b3df9fd0259ad5e7333f14fe8
    if (userCreated) {
      return res.status(200).json({ userCreated });
    } else {
      return res
        .status(400)
        .json({ error: `Ya existe una cuenta con este email ${email}.` });
    }
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
}

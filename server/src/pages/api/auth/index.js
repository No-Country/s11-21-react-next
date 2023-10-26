import NextCors from "nextjs-cors";
import { firestoreDB } from "@/lib/firebaseConnection";
import { comparePasswords } from "@/tools";
import { AuthModel } from "@/models/Auth";
export default async function handler(req, res) {
  try {
    await NextCors(req, res, {
      methods: ["POST"],
      origin: "*", // Asegúrate de configurar esto adecuadamente para tu aplicación en producción
      optionsSuccessStatus: 200,
    });
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Faltan campos requeridos." });
    } else if (req.method !== "POST") {
      return res.status(400).json({ error: "Metodo HTTP incorrecto" });
    }
    const auth = await AuthModel.checkAuthExists(email);

    if (auth) {
      const authRef = await firestoreDB
        .collection("auth")
        .where("email", "==", email)
        .get();
      const passwordBD = authRef.docs[0].data().password;
      const passwordsAreEquals = await comparePasswords(password, passwordBD);
      console.log(passwordsAreEquals);
      if (passwordsAreEquals) {
        const userId = (
          await firestoreDB
            .collection("users")
            .where("email", "==", email)
            .get()
        ).docs[0].id;

        return res.status(200).json({ userLoged: passwordsAreEquals, userId });
      } else {
        return res.json({ error: "Contraseña incorrecta" });
      }
    } else {
      return res
        .status(200)
        .json({ error: "Usuario no encontrado o contraseña incorrecta" });
    }
  } catch (error) {
    console.error("Error en el manejador:", error);
    return res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
}

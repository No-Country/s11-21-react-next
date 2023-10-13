import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { firestoreDB } from "./firestore"; // Asegúrate de importar la instancia de Firestore desde un archivo separado

export class AuthModel {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async createAuth() {
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      const newAuth = new AuthModel(this.email, hashedPassword);
      const docRef = firestoreDB.collection("auth").doc();
      await docRef.set({
        email: newAuth.email,
        password: newAuth.password,
      });
      return true;
    } catch (error) {
      console.error("Error creating authentication:", error);
      return false;
    }
  }

  static async deleteAuth(email) {
    try {
      const querySnapshot = await firestoreDB
        .collection("auth")
        .where("email", "==", email)
        .get();

      if (!querySnapshot.empty) {
        const userRef = querySnapshot.docs[0].ref;
        await userRef.delete();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      return false;
    }
  }

  static async createToken(email, password) {
    try {
      const secret = process.env.SECRET_KEY;

      const querySnapshot = await firestoreDB
        .collection("auth")
        .where("email", "==", email)
        .get();

      if (querySnapshot.empty) return { error: "Invalid email or password" };

      const doc = querySnapshot.docs[0];
      const savedPassword = doc.data().password;

      const passwordMatch = await bcrypt.compare(password, savedPassword);

      if (!passwordMatch) return { error: "Invalid email or password" };

      const token = jwt.sign({ email }, secret);
      return token;
    } catch (error) {
      console.error("Error creating token:", error);
      return { error: "Method Not Allowed" };
    }
  }
}

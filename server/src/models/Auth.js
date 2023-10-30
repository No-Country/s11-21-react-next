import { firestoreDB } from "@/lib/firebaseConnection";
import { hashPassword, generateToken } from "@/tools";

export class AuthModel {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //Metodo que nos va a permitir en el futuro crear un auth en la base de datoss
  static async createAuth(email, password) {
    //a revisar
    const hashedPassword = await hashPassword(password);
    const newAuth = new AuthModel(email, hashedPassword);

    try {
      // la referencia a la coleccion que queremos modificar
      const docRef = await firestoreDB.collection("auth").add({
        email: newAuth.email,
        password: newAuth.password,
      });

      return { newAuth, id: docRef.id };
    } catch (error) {
      console.error("Error creating auth:", error);
      throw error;
    }
  }

  static async deleteAuth(email) {
    try {
      const querySnapshot = await firestoreDB
        .collection("auth")
        .where("email", "==", email)
        .get();

      if (querySnapshot.empty) {
        console.log(
          "No se encontraron usuarios con el correo electrónico proporcionado."
        );
        return false;
      }

      const deletedAuth = await querySnapshot.docs[0].ref.delete();

      return deletedAuth;
    } catch (error) {
      console.error("Error Delete auth:", error);
      throw error;
    }
  }

  static async updateAuth(idAuth, updateData) {
    try {
      const refData = firestoreDB.collection("auth").doc(idAuth);
      const updateUser = await refData.update(updateData);

      return updateUser;
    } catch (error) {
      console.error("Error Update auth:", error);
      throw error;
    }
  }

  static async checkAuthExists(email) {
    try {
      const querySnapshot = await firestoreDB
        .collection("auth")
        .where("email", "==", email)
        .get();

      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error al verificar la existencia de auth:", error);
      throw error;
    }
  }

  static generateAuthToken(object) {
    try {
      const token = generateToken(object);
      return token;
    } catch (error) {
      console.error("Error Update token:", error);
      throw error;
    }
  }
}

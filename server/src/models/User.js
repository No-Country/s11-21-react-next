import { firestoreDB } from "@/lib/firebaseConnection";
export class UserModel {
  constructor(email, name, phone, lastname) {
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.lastname = lastname;
  }
  //Metodo que nos va a permitir en el futuro crear un auth en la base de datoss
  static async createUser(email, name, phone, lastname) {
    const newUser = new UserModel(email, name, phone, lastname);

    try {
      // la referencia a la coleccion que queremos modificar
      const docRef = await firestoreDB.collection("users").add({
        email: newUser.email,
        name: newUser.name,
        phone: newUser.phone,
        lastname: newUser.lastname,
      });

      const userId = docRef.id;
      const userCreated = new UserModel(
        newUser.email,
        newUser.name,
        newUser.phone,
        newUser.lastname
      );

      const response = {
        userId,
        userCreated,
      };

      return response;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  static async deleteUser(email) {
    try {
      const querySnapshot = await firestoreDB
        .collection("users")
        .where("email", "==", email)
        .get();

      if (querySnapshot.empty) {
        console.log(
          "No se encontraron usuarios con el correo electrónico proporcionado."
        );
        return false;
      }

      const deletedUser = await querySnapshot.docs[0].ref.delete();

      return deletedUser;
    } catch (error) {
      console.error("Error Delete user:", error);
      throw error;
    }
  }

  static async updateUser(idUser, updateData) {
    try {
      const refData = firestoreDB.collection("users").doc(idUser);
      const updateUser = await refData.update(updateData);

      return updateUser;
    } catch (error) {
      console.error("Error Update user:", error);
      throw error;
    }
  }

  static async getAuthEmail(id) {
    try {
      const docSnapshot = await firestoreDB.collection("users").doc(id).get();
      // Verificar si el documento con el ID dado existe
      if (!docSnapshot.exists) {
        console.log(`No se encontró ningún documento con el ID ${id}`);
        return null;
      }
      console.log(docSnapshot.data());
      // Devolver el correo electrónico asociado al ID
      return docSnapshot.data().email;
    } catch (error) {
      console.error("Error al verificar la existencia de auth:", error);
      throw error;
    }
  }

  static async getUserMe(id) {
    try {
      const docSnapshot = await firestoreDB.collection("users").doc(id).get();
      // Verificar si el documento con el ID dado existe
      if (!docSnapshot.exists) {
        console.log(`No se encontró ningún documento con el ID ${id}`);
        return null;
      }
      return docSnapshot.data();
    } catch (error) {
      console.error("Error al verificar la existencia de auth:", error);
      throw error;
    }
  }
}

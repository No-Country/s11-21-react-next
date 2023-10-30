import { AuthModel } from "@/models/Auth";
import { UserModel } from "@/models/User";
export class UserController {
  //Metodo que nos va a permitir en el futuro crear un auth en la base de datoss
<<<<<<< HEAD
  static async createUser(email, name, phone, password) {
=======
  static async createUser(email, name, phone, lastname, password) {
>>>>>>> d60e8ecbcc5fee3b3df9fd0259ad5e7333f14fe8
    try {
      // la referencia a la coleccion que queremos modificar
      const userExists = await this.checkUserExists(email);
      if (userExists) {
        return false;
      } else {
<<<<<<< HEAD
        const user = await UserModel.createUser(email, name, phone);
=======
        const user = await UserModel.createUser(email, name, phone, lastname);
>>>>>>> d60e8ecbcc5fee3b3df9fd0259ad5e7333f14fe8
        const auth = await AuthModel.createAuth(email, password);
        const userCreated = user && auth;
        if (userCreated) return { userCreated: true, userID: user.userId };
      }
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  static async checkUserExists(email) {
    const exists = await AuthModel.checkAuthExists(email);
    return exists;
  }

  static async deleteUser(id) {
    try {
      const email = await UserModel.getAuthEmail(id);
      const deletedUser = await UserModel.deleteUser(email);
      const deleteAuth = await AuthModel.deleteAuth(email);
      const deleted = deletedUser && deleteAuth;
      return deleted;
    } catch (error) {
      console.error("Error Delete user:", error);
      throw error;
    }
  }

  static async updateUser(idUser, updateData) {
    try {
      const updateUser = UserModel.updateData();

      return updateUser;
    } catch (error) {
      console.error("Error Update user:", error);
      throw error;
    }
  }
}

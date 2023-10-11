export class AuthModel {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //Metodo que nos va a permitir en el futuro crear un auth en la base de datoss
  static createAuth() {
    return true;
  }
}

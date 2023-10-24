import axios from "axios";

export interface User{
  name: string
  lastName: string
  email: string
  phone: string
  password: string
  repeatPassword?: string
}

export async function createUser(data: User): Promise<User | string> {
  const response = await axios.post("https://nearby-back.vercel.app/api/user/createUser" , 
  {
    "name":data.name,
    "lastname":data.lastName,
    "email":data.email,
    "phone":data.phone,
    "password":data.password
  },
  {
    headers: {
      'Content-Type': 'application/json'
    },
  }
    ).catch((error) => {
      return error.response.data.error
    });
    if (typeof response === "string") {
      return response;
    }
    return response.data;
}
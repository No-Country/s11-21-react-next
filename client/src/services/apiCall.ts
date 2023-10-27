import axios from "axios";

export interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
  lastname: string;
  repeatPassword?: string;
}
export interface UserLogin {
  email: string;
  password: string;
}

export async function createUser(data: User): Promise<User | string> {
  const response = await axios
    .post(
      "https://nearby-back.vercel.app/api/user/createUser",
      {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        password: data.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .catch((error) => {
      return error.response.data.error;
    });
  if (typeof response === "string") {
    return response;
  }
  return response.data;
}

export async function login(
  data: UserLogin
): Promise<{ userId: string; userLoged: boolean } | { error: string }> {
  const response = await axios
    .post("https://nearby-back.vercel.app/api/auth", {
      email: data.email,
      password: data.password,
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
  return response;
}

export async function getUser(userId: string) {
  const user = JSON.parse(userId);
  const response = await axios.get(
    `https://nearby-back.vercel.app/api/user/${user.userId}`
  );
  return response.data;
}

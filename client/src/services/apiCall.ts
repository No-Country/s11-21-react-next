import axios from "axios";

export interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword?: string;
}
export interface Lugares {
  latitude: string;
  description: string;
  createdBy: string;
  zone: string;
  socialNetworks: [string];
  placeName: string;
  longitude: string;
  category: string;
  imagesUrl: [string];
  stars: number;

  objectID: string;
}

export async function createUser(data: User): Promise<User | string> {
  const response = await axios
    .post(
      "https://nearby-back.vercel.app/api/user/createUser",
      {
        name: data.name,
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

export async function search(busqueda: string): Promise<Lugares[]> {
  const respuesta = await axios.get(
    `https://nearby-back.vercel.app/api/place/search?place=${busqueda}`
  );
  return respuesta.data.results;
}

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

export interface Favorite {
  placeId: string;
  imagesUrl: string;
  placeName: string;
  zone: string;
  stars: number;
}

export interface RemoveFavoriteResponse {
  success: boolean;
  message: string;
}

export interface SetFavoriteResponse {
  success: boolean;
  message: string;
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
  if (!userId || userId === "") return null;

  const response = await axios.get(
    `https://nearby-back.vercel.app/api/user/${userId}`
  );
  return response.data;
}

/* Trae los favoritos según el ID de usuario */
export async function getFavorites(userId: string): Promise<Favorite[]> {
  try {
    const response = await axios.get(
      `https://nearby-back.vercel.app/api/user/getFavorites?userId=${userId}`
    );
    return response.data.userFavorites;
  } catch (error) {
    throw error;
  }
}

/* Dado el placeId se elimina del array de favoritos del user */
export async function removeFavorite(
  userId: string,
  placeId: string
): Promise<RemoveFavoriteResponse> {
  const response = await axios.put(
    `https://nearby-back.vercel.app/api/place/dislikeFavorite`,
    { userId, placeId }
  );

  return response.data;
}

/* Dado el placeId se agrega al array de favoritos del user */
export async function addFavorite(
  userId: string,
  placeId: string
): Promise<SetFavoriteResponse> {
  const response = await axios.put(
    `https://nearby-back.vercel.app/api/place/setFavorite`,
    { userId, placeId }
  );

  return response.data;
}

import axios from "axios";

export async function createUser(
  name: string,
  email: string,
  phone: string,
  password: string
) {
  try {
    const response = await axios.post(
      "https://nearby-back.vercel.app/api/user/createUser",
      {
        name,
        email,
        phone,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return console.log(response.data);
  } catch (error) {
    return console.error(error);
  }
}

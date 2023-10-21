import axios from "axios";

export async function createUser() {
  try {
    const response = await axios.post(
      "https://nearby-back.vercel.app/user/createUser" ,
      {
        name:"firulais3",
        email:"firulais3@gmail.com",
        phone:"+5422346639",
        password:"123"
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
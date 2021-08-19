import axios from "axios";

export default async function CreateUser(
  userName: string,
  email: string,
  password: string
) {
  try {
    await axios.post("http://localhost:3333/bankapi/create", {
      userName,
      email,
      password,
    });
  } catch (error) {
    throw new Error(error);
  }
}

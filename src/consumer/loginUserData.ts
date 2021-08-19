import axios from "axios";

export default async function LoginUser(email: string, password: string) {
  try {
    await axios.post("http://localhost:3333/bankapi/create", {
      email,
      password,
    });
  } catch (error) {
    throw new Error(error);
  }
}

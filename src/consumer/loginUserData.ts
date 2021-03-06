import axios from "axios";

export default async function LoginUser(email: string, password: string) {
  try {
    return await axios.post("http://localhost:3333/bankapi/signin", {
      email,
      password,
    });
  } catch (error) {
    throw new Error(error);
  }
}

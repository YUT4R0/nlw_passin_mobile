import axios from "axios";

const serverPort = 3333;
export const api = axios.create({
  baseURL: `http://192.168.1.30:${serverPort}`,
});

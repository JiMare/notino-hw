import axios from "axios";
const baseUrl = "/todos";

export const getTodos = async () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

import axios from "axios";
import { Platform } from "react-native";

//export const clientAndroid = Platform.OS === "android" ? "http://localhost:3000" : "http://127.0.0.1:3000";
const client = axios.create({
  baseURL:
    Platform.OS === "android"
      ? "http://localhost:3000"
      : "http://127.0.0.1:3000",
});

client.interceptors.response.use(
  response => response.data,
  error => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      ...error.response,
      ...error.response.data,
      
    });
  }
);

export const setAuthorizationHeader = token => {
  client.defaults.headers.common["Authorization"] = token;
};

export const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common["Authorization"];
};

export default client;

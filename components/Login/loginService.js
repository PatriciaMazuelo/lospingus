import client from "../../api/client";
import {
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from "../../api/client";
import storage from "../../utils/storage";

export const login = ({ ...credentials }) => {
  return client.post("api/auth", credentials).then(({ token }) => {
    setAuthorizationHeader(token);
    storage.set("token", token)
  });
};

export const logout = () => {
  removeAuthorizationHeader();
  storage.remove("token");
};

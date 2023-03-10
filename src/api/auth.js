import httpClient from "./axios";

export function register(user) {
  return httpClient.post("users", user);
}

import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://web-dev-api.theaccounter.net",
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;

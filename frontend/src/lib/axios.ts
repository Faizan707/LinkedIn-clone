import axios, { AxiosInstance } from "axios";

const baseUrl: string = "http://localhost:8000/";

const instance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance
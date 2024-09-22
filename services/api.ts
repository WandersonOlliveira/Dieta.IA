import axios from "axios";

// http://192.168.1.10 /create
export const api = axios.create({
    baseURL: "http://192.168.1.7:3333"
})

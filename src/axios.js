import axios from "axios";

const instance = axios.create({
    baseURL: "https://portfolio-backend-6pmi.onrender.com"
})

export default instance;
import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-portfolio-m1cu.onrender.com"
})

export default instance;
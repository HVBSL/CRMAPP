// import axios from "axios";
import { Axios } from "axios";

export const baseURL = "https://192.168.1.6:8000"

const axios = Axios.create({ baseURL });


export default axios;

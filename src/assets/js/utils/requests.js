import axios from "axios";

// const baseUrl = process.env.NODE_ENV==='development' ? 'http://10.3.140.209:2001':'http://120.76.247.5:2001'
const baseUrl = "http://47.115.115.207:3004";

const request = axios.create({
  baseURL: baseUrl + "/",
});

export default request;

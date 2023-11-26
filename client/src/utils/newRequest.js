import axios from "axios";
const varToken = localStorage.getItem("token"); 
console.log(varToken);
const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  headers: {
    "Authorization": 'Bearer ' + varToken
  },
  withCredentials: true,
});

export default newRequest;

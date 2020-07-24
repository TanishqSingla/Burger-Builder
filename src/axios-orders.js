import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-c45ba.firebaseio.com/",
});

export default instance;

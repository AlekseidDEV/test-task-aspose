import axios from "axios";

export const axiosClient = axios.create({
  baseURL: 'http://rickandmortyapi.com/api'
})

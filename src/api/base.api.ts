import axios from 'axios'
export const BASE_URL: string = 'https://rickandmortyapi.com/api'

export const instance = axios.create({
  baseURL: BASE_URL,
})

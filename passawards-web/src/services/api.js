import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  auth: {
    username: process.env.NEXT_PUBLIC_API_USERNAME,
    password: process.env.NEXT_PUBLIC_API_PASSWORD,
  }
})

export default api
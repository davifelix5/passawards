import axios from 'axios'

const api = axios.create({
  baseURL: 'https://passawards.herokuapp.com',
  auth: {
    username: process.env.NEXT_PUBLIC_API_USERNAME,
    password: process.env.NEXT_PUBLIC_API_PASSWORD,
  }
})

export default api
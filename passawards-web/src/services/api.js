import axios from 'axios'

export default function api(username, password) {
  return axios.create({
    baseURL: 'http://127.0.0.1:8000',
    auth: {
      username: username,
      password: password,
    }
  })
}

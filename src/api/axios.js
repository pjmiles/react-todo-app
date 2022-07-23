import axios from 'axios'

const BaseURL = "https://robottodoapi.herokuapp.com/api/v1/todo/"

export const API = axios.get(BaseURL)
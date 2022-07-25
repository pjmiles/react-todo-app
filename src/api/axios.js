import axios from 'axios'

const BaseURL = "https://robottodoapi.herokuapp.com/api/v1/todo/"

const axiosInstance = axios.create({
    baseURL: BaseURL
})

export default axiosInstance

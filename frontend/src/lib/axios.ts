import axios from 'axios'

const BaseUrl:string = process.env.NEXT_PUBLIC_BACKEND_URL as string

const axiosInstance = axios.create({
    baseURL: BaseUrl,
    headers:{'X-Custom-Header':''}
})

export default axiosInstance
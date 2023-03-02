import * as axios from "axios";

// export const $jsonHost = axios.default.create({   //instance = ..
//     baseURL: process.env.REACT_APP_API_URL,
// })

const $host = axios.default.create({
    baseURL: process.env.REACT_APP_API_URL,
})

const $authHost = axios.default.create({
    baseURL: process.env.REACT_APP_API_URL,
})


// интерцептор - подставляет автоматически токен к каждому запросу
const authInterceptor = (config:any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
import axios from 'axios'

const BASE_URL = 'https://proyecto-e-comerce-con-react-dev-f-33a.onrender.com'

const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data) 
const deleteAProduct = (id) => axios.delete(`${BASE_URL}/items/${id}`,)

const getMyUserService = (jwt) => axios.get(`${BASE_URL}/users/me`, {
    
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})

const createProduct = (productData, token) => axios.post(`${BASE_URL}/items`, productData, {

    headers: {
        Authorization: `Bearer ${token}`
    }
})
const getAllProducts = () => axios.get(`${BASE_URL}/items`)
 //aqui se guardan todas las peticiones axios para tenerlas en un solo lugar

export {
    registerUserService,
    loginUserService,
    getMyUserService,
    deleteAProduct,
    createProduct,
    getAllProducts,
}
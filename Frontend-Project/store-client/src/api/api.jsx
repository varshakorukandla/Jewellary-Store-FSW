 import axios from 'axios'


const API = 'http://localhost:3000'


const axiosInstance = axios.create({
    API
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken()
        if (token) {
            config.headers.Authorization = token
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

// BeedJewellaryEndPonts
const getBeedJewellary = () => axios.get(`${API}/BeedJewellary/all`)
const getBeedJewellaryCount = () => axios.get(`${API}/BeedJewellary/count`)
const addBeedJewellary = (BeedJewellary) => axios.post(`${API}/BeedJewellary/add`, BeedJewellary)
const editBeedJewellary = (BeedJewellary, id) => axios.put(`${API}/BeedJewellary/edit/${id}`, BeedJewellary)
const deleteBeedJewellary = (id) => axios.delete(`${API}/BeedJewellary/delete/${id}`)

// FashionJewellaryEndPonts
const getFashionJewellary = () => axios.get(`${API}/FashionJewellary/all`)
const getFashionJewellaryCount = () => axios.get(`${API}/FashionJewellary/count`)
const addFashionJewellary = (FashionJewellary) => axios.post(`${API}/FashionJewellary/add`, FashionJewellary)
const editFashionJewellary = (FashionJewellary, id) => axios.put(`${API}/FashionJewellary/edit/${id}`, FashionJewellary)
const deleteFashionJewellary = (id) => axios.delete(`${API}/FashionJewellary/delete/${id}`)

// PendantJewellaryEndPonts
const getPendantJewellary = () => axios.get(`${API}/PendantJewellary/all`)
const getPendantJewellaryCount = () => axios.get(`${API}/PendantJewellary/count`)
const addPendantJewellary = (PendantJewellary) => axios.post(`${API}/PendantJewellary/add`, PendantJewellary)
const editPendantJewellary = (PendantJewellary, id) => axios.put(`${API}/PendantJewellary/edit/${id}`, PendantJewellary)
const deletePendantJewellary = (id) => axios.delete(`${API}/PendantJewellary/delete/${id}`)

// WeddingJewellaryEndPonts
const getWeddingJewellary = () => axios.get(`${API}/WeddingJewellary/all`)
const getWeddingJewellaryCount = () => axios.get(`${API}/WeddingJewellary/count`)
const addWeddingJewellary = (WeddingJewellary) => axios.post(`${API}/WeddingJewellary/add`, WeddingJewellary)
const editWeddingJewellary = (WeddingJewellary, id) => axios.put(`${API}/WeddingJewellary/edit/${id}`, WeddingJewellary)
const deleteWeddingJewellary = (id) => axios.delete(`${API}/WeddingJewellary/delete/${id}`)

//UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`)
const getUsersCount = () => axios.get(`${API}/users/count`)
const addUser = (user) => axios.post(`${API}/users/add`, user)
const editUser = (user, id) => axios.put(`${API}/users/edit/${id}`, user)
const deleteUser = (id) => axios.delete(`${API}/users/delete/${id}`)
const resetPassword = (password, id) => axios.put(`${API}/users/resetpassword/${id}`, password)
//AuthEndponts
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)

export {
    Login,
    Register,
    getBeedJewellary,
    getBeedJewellaryCount,
    addBeedJewellary,
    editBeedJewellary,
    deleteBeedJewellary,
    getFashionJewellary,
    getFashionJewellaryCount,
    addFashionJewellary,
    editFashionJewellary,
    deleteFashionJewellary,
    getPendantJewellary,
    getPendantJewellaryCount,
    addPendantJewellary,
    editPendantJewellary,
    deletePendantJewellary,
    getWeddingJewellary,
    getWeddingJewellaryCount,
    addWeddingJewellary,
    editWeddingJewellary,
    deleteWeddingJewellary,
    getUsers,
    getUsersCount,
    addUser,
    editUser,
    deleteUser,
    resetPassword,
}
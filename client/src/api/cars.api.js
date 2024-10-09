import axios from 'axios'

export const getAllCars = () => {
    return axios.get('http://localhost:8000/cars/api/v1/cars/')
}
export const getFilteredCars = (data) => {
    return axios.get('http://localhost:8000/cars/api/filter/',{
        params: data
    })
}
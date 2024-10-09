import axios from 'axios'

export const getAllCars = () => {
    return axios.get('http://localhost:8000/cars/api/v1/cars/')
}
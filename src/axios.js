import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tnderbkend.herokuapp.com'
})


export default instance
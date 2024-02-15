import axios from 'axios';

//set the const for port for the backend
const backendPort = process.env.BACKENDPORT || 3000;

//setup the base url for our API
const baseURL = `http://localhost:${backendPort}`;

//create an instance of axios with the base url
export default axios.create({
    baseURL: baseURL,
    headers: {
        Accept: 'application/json',
    }
})
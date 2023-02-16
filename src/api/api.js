import axios from 'axios';

export const postRegistration = (body) => {
    axios.post("http://localhost:3000/register", body).then(response => console.log(response))
}


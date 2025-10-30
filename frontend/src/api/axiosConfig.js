import axios from 'axios';

export default axios.create({
    baseURL:'https://7527aeb510a9.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});
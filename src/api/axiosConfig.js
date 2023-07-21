import axios from "axios";

export default axios.create({
    baseURL: "https://36af-136-158-59-110.ngrok-free.app", //changed based on the server
    headers: {"ngrok-skip-browser-warning":"true"}
});
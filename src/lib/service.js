import axios from "axios";

export default async function getData(userId) {
    try {
        const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
        console.log(user);
    } catch (error) {
        console.error(error.message);
    }
}
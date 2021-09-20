import axios from "axios";

/**
 * Will fetch the data according to userId parameter.
 * @param {number} userId
 * @returns {Promise} Promise object represents user info and posts belong to user.
 */

export default async function getData(userId) {
    try {
        // extracted data from the incoming object
        let { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        user = {
            ...user, posts
        }
        return await user;

    } catch (error) {
        return error.message;
    }
}
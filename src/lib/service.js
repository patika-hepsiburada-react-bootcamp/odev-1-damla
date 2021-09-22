import axios from "axios";

/**
 * Will fetch the data according to userId parameter.
 * @param {number} userId
 * @returns {Promise} Promise object represents user info and posts belong to user.
 */

const getData = async (userId) => {
    try {
        // extracted data from the incoming object
        let { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        // changed user object according to the data format requirements
        user = {
            ...user, posts
        }

        // returned final user data
        return user;

    } catch (error) {
        // returning error message 
        return error.message;
    }
}
export default getData;
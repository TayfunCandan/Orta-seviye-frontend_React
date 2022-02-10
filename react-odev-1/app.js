import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users/';

async function getData(userId) {
    const { data: user } = await axios(url + userId);
    const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts?id=' + userId)
    console.log("User: ", user);
    console.log("Posts: ", post);
}

export default getData;

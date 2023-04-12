import axios from 'axios'

// API Call
// const getQuotes = async () => {
// 	const response = await instance.get('/team', {
// 		params: { category: 'all', count: '1' },
// 	});
// 	console.log(response.data);
// }

// export default getQuotes;


async function getQuotes() {
    let baseURL =  'http://127.0.0.1:8000/'
    let response = await axios.get(`${baseURL}team/`, {params : {'year' : '2022'}})
    console.log(response.data);
    return response.data;    
}

export default getQuotes;

import React from 'react'

export async function getBooks(props) {
    let baseURL =  'http://127.0.0.1:8000/'
    let response = await axios.get(`${baseURL}library/`, {params : {'category' : props.genre}})
    console.log(response.data);
    return response.data;
}


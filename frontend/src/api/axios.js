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


export async function getBooks(params) {
    let baseURL =  'http://127.0.0.1:8000/'
    console.log(params.genreInput)
    let response = await axios.get(`${baseURL}library/`, {params : {'category' : params.genreInput}})
    console.log('resp data', response.data);
    return response.data;
}



export async function login(email, password) {
    let baseURL =  'http://127.0.0.1:8000/'
    let response = await axios.post(`${baseURL}home/login/`, {'email': email, 'password': password})
    // console.log('login returned', response.data);
    return response.data;
}


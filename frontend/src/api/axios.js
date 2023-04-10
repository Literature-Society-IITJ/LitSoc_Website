import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});


// API Call
// const getQuotes = async () => {
// 	const response = await instance.get('/team', {
// 		params: { category: 'all', count: '1' },
// 	});
// 	console.log(response.data);
// }

// export default getQuotes;

const getQuotes = async () => {
	const response = await instance.get('/team', {
		params: { id: 1 },
	});
	console.log(response.data);

    return response.data;
}

export default getQuotes;

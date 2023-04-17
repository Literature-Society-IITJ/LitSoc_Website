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
    let response = await axios.get(`${baseURL}library/`, 
    {params : {'category': params.genreInput, 'name': params.bookNameInput, 'isbn': params.isbnInput, 'author': params.authorNameInput}})
    console.log('resp data', response.data);
    return response.data;
}



export async function login(email, password) {
    let baseURL =  'http://127.0.0.1:8000/'
    let response = await axios.post(`${baseURL}home/login/`, {'email': email, 'password': password})
    // console.log('login returned', response.data);
    return response.data;
}

export async function signup(firstname, lastname, rollnumber, phonenumber, username, email, password, cnfrmpassword) {
    let baseURL = 'http://127.0.0.1:8000/'
    let response = await axios.post(`${baseURL}home/register/`, {'first_name':firstname, 'last_name':lastname, 'roll_number':rollnumber, 'phone': phonenumber, 'username':username , 'email': email, 'password': password, 'password2': cnfrmpassword})

    return response.data;
}

import axios from 'axios'
import { getToken } from '../utilities/localStorage';

// API Call
// const getQuotes = async () => {
// 	const response = await instance.get('/team', {
// 		params: { category: 'all', count: '1' },
// 	});
// 	console.log(response.data);
// }

export default getQuotes;


export async function getQuotes() {
    let baseURL =  'http://127.0.0.1:8000/'
    let response = await axios.get(`${baseURL}team/`, {params : {'year' : '20'}})
    console.log(response.data);
    return response.data;    
}



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

    console.log(response.data)

    return response.data;
}

export async function issueRequest(bookId){
    let baseURL = 'http://127.0.0.1:8000/'
    const token = JSON.parse(sessionStorage.getItem('data'))
    let { access_token } = getToken()
    console.log(access_token)
    let response = await axios.post(`${baseURL}library/issue/`, {'book_id': bookId}, 
                                    { headers: {'Authorization': `Bearer ${access_token}`, 
                                    'Content-Type': 'application/json'} })

    console.log(response)
    return response.data
}

import axios from 'axios'
import { getToken } from '../utilities/localStorage';


export default getQuotes;

export async function getQuotes() {
    let baseURL =  'http://127.0.0.1:8000/'
    let response = await axios.get(`${baseURL}team/`, {params : {'year' : '20'}})
    // console.log(response.data);
    return response.data;    
}

export async function getBooks(params) {
    let baseURL =  'http://127.0.0.1:8000/'
    console.log(params.genreInput)
    let response = await axios.get(`${baseURL}library/`, 
    {params : {'category': params.genreInput, 'name': params.bookNameInput, 'isbn': params.isbnInput, 'author': params.authorNameInput}})
    // console.log('resp data', response.data);
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
    console.log('pass', password)
    console.log('conf', cnfrmpassword)
    let response = await axios.post(`${baseURL}home/register/`, {'first_name':firstname, 'last_name':lastname, 'roll_number':rollnumber, 'phone': phonenumber, 'username':username , 'email': email, 'password': password, 'password2': cnfrmpassword})

    return response.data;
}

export async function issueRequest(bookId){
    let baseURL = 'http://127.0.0.1:8000/'
    // const token = JSON.parse(sessionStorage.getItem('data'))
    let { access_token } = getToken()
    // console.log(bookId)
    let response = await axios.post(`${baseURL}library/issue/`, {'book_id': bookId}, 
                                    { headers: {'Authorization': `Bearer ${access_token}`, 
                                    'Content-Type': 'application/json'} })

    // console.log(response)
    return response.data
}


export async function isUserBook() {
    let baseURL = 'http://127.0.0.1:8000/'
    let { access_token } = getToken()

    let response = await axios.get(`${baseURL}library/issue/`,
    { headers: {'Authorization': `Bearer ${access_token}`} })

    return response.data
}

export async function getUserData() {
    let baseURL = 'http://127.0.0.1:8000/'
    let { access_token } = getToken()

    console.log(access_token)

    let response = await axios.get(`${baseURL}home/profile/`,
    { headers: {'Authorization': `Bearer ${access_token}`}})

    console.log(1)
    console.log(response)

    return response.data
}


export async function getIssueRequests() {
    let baseURL = 'http://127.0.0.1:8000/'
    let { access_token } = getToken()

    console.log('getting issue req')

    let response = await axios.get(`${baseURL}library/bookapproval/`,
    { headers: {'Authorization': `Bearer ${access_token}`}})

    console.log(response.data)
    return response.data
}

export async function modBookResponse(bookId, roll_number, appprovalStatus) {
    let baseURL = 'http://127.0.0.1:8000/'
    let { access_token } = getToken()

    // console.log(access_token)

    let response = await axios.post(`${baseURL}library/bookapproval/`, 
    {'bookId':bookId, 'roll_number':roll_number, 'status':appprovalStatus},
    { headers: {'Authorization': `Bearer ${access_token}`, 
                'Content-Type': 'application/json'} })

    return response.data
}

export async function getIssuedBooks() {
    let baseURL = 'http://127.0.0.1:8000/'

    let response = await axios.get(`${baseURL}library/bookreturn/`)

    // console.log(response.data)

    return response.data
}

export async function getTeamDetails(year) {
    // console.log(year)
    let baseURL = 'http://127.0.0.1:8000/'

    let response = await axios.get(`${baseURL}team/`,
                                    {params : {'year' : year}})

    return response.data
}

export async function markBookReturned(bookId) {
    let baseURL = 'http://127.0.0.1:8000/'
    let { access_token } = getToken()

    console.log(bookId)

    let response = await axios.post(`${baseURL}library/bookreturn/`, 
    {'book_id': bookId},
    { headers: {'Authorization': `Bearer ${access_token}`, 
                'Content-Type': 'application/json'} })
    console.log(response.data)
    return response.data
}

export async function addModerator(rollNumber) {
    let baseURL = 'http://127.0.0.1:8000/'
    let { access_token } = getToken()

    let response = await axios.post(`${baseURL}home/newmoderator/`, 
    {'roll_number': rollNumber},
    { headers: {'Authorization': `Bearer ${access_token}`, 
                'Content-Type': 'application/json'} })
    // console.log(response.data)
    return response.data
}

export async function getModerators() {
    let baseURL = 'http://127.0.0.1:8000/'
    let { access_token } = getToken()


    let response = await axios.get(`${baseURL}home/newmoderator/`,
        {headers: {'Authorization': `Bearer ${access_token}`, 
        'Content-Type': 'application/json'}})

    return response.data
}

export async function removeModerator(rollNumber) {
    let baseURL = 'http://127.0.0.1:8000/'
    let { access_token } = getToken()

    let response = await axios.post(`${baseURL}home/removemoderator/`, 
    {'roll_number': rollNumber},
    { headers: {'Authorization': `Bearer ${access_token}`, 
                'Content-Type': 'application/json'} })
    // console.log(response.data)
    return response.data
}


export async function getReadSecItems(category) {
    let baseURL = 'http://127.0.0.1:8000/'

    let response = await axios.get(`${baseURL}readerSection/`,
                                    {params : {'category' : category}})

    return response.data
}

export async function getPuzzles() {
    let baseURL = 'http://127.0.0.1:8000/'

    let response = await axios.get(`${baseURL}puzzle/`)

    return response.data
}
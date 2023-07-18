import axios from 'axios'
import { getToken } from '../utilities/localStorage';


// const url = 'https://litiitjb.litsoc.live/'
const url = ''

export default getQuotes;


export async function getQuotes() {
    let baseURL =  url
    let response = await axios.get(`${baseURL}team/`,
                                    {params : {'year' : '20'}})
    // console.log(response.data);
    return response.data;    
}

export async function getBooks(params) {
    let baseURL =  url
    console.log(params.genreInput)
    let response = await axios.get(`${baseURL}library/`, 
                                    {params : {'category': params.genreInput, 'name': params.bookNameInput, 'isbn': params.isbnInput, 'author': params.authorNameInput}})
    // console.log('resp data', response.data);
    return response.data;
}

export async function login(email, password) {
    let baseURL =  url
    let response = await axios.post(`${baseURL}home/login/`,
                                    {'email': email, 'password': password})
    // console.log('login returned', response.data);
    return response.data;
}

export async function signup(firstname, lastname, rollnumber, phonenumber, username, email, password, cnfrmpassword) {
    let baseURL = url
    // console.log('pass', password)
    // console.log('conf', cnfrmpassword)
    let response = await axios.post(`${baseURL}home/register/`,
                                    {'first_name':firstname, 'last_name':lastname, 'roll_number':rollnumber, 'phone': phonenumber, 'username':username , 'email': email, 'password': password, 'password2': cnfrmpassword})

    // console.log('hereeeeeeeeeeeeeeeee')
    // console.log(response.data)

    return response.data;
}

export async function issueRequest(bookId){
    let baseURL = url
    // const token = JSON.parse(sessionStorage.getItem('data'))
    let { access_token } = getToken()
    // console.log(bookId)
    let response = await axios.post(`${baseURL}library/issue/`, {'book_id': bookId}, 
                                    { headers: {'Authorization': `Bearer ${access_token}`, 
                                    'Content-Type': 'application/json'}})

    // console.log(response)
    return response.data
}


export async function isUserBook() {
    let baseURL = url
    let { access_token } = getToken()

    let response = await axios.get(`${baseURL}library/issue/`,
                                    { headers: {'Authorization': `Bearer ${access_token}`}})

    return response.data
}


export async function getUserData() {
    let baseURL = url
    let { access_token } = getToken()

    // console.log(access_token)

    let response = await axios.get(`${baseURL}home/profile/`,
                                    { headers: {'Authorization': `Bearer ${access_token}`,
                                                'Content-Type': 'application/json'}})

    // console.log(1)
    // console.log(response)

    return response.data
}


export async function getIssueRequests(roll_number) {
    let baseURL = url
    let { access_token } = getToken()

    // console.log('getting issue req')
    // console.log(roll_number)

    let response = await axios.get(`${baseURL}library/bookapproval/`,
                                    { params : {'roll_number' : roll_number }})
                                    // { headers: {'Authorization': `Bearer ${access_token}`}})

    // console.log(2222222222)
    // console.log(response.data)
    return response.data
}


export async function modBookResponse(bookId, roll_number, appprovalStatus) {
    let baseURL = url
    let { access_token } = getToken()

    // console.log(111111111)
    // console.log(bookId)

    let response = await axios.post(`${baseURL}library/bookapproval/`, 
                                    {'bookId':bookId, 'roll_number':roll_number, 'status':appprovalStatus},
                                    { headers: {'Authorization': `Bearer ${access_token}`, 
                                                'Content-Type': 'application/json'} })

    // console.log(2222222222222)

    return response.data
}


export async function getIssuedBooks(bookId) {
    let baseURL = url

    let response = await axios.get(`${baseURL}library/bookreturn/`,
                                    { params : {'book_id' : bookId }})

    // console.log(response.data)

    return response.data
}




export async function markBookReturned(bookId) {
    let baseURL = url
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
    let baseURL = url
    let { access_token } = getToken()
    
    let response = await axios.post(`${baseURL}home/newmoderator/`, 
    {'roll_number': rollNumber},
    { headers: {'Authorization': `Bearer ${access_token}`, 
    'Content-Type': 'application/json'} })
    // console.log(response.data)
    return response.data
}


export async function getModerators() {
    let baseURL = url
    let { access_token } = getToken()
    
    
    let response = await axios.get(`${baseURL}home/newmoderator/`,
                                    {headers: {'Authorization': `Bearer ${access_token}`, 
                                    'Content-Type': 'application/json'}})
    
    return response.data
}


export async function removeModerator(rollNumber) {
    let baseURL = url
    let { access_token } = getToken()
    
    let response = await axios.post(`${baseURL}home/removemoderator/`, 
                                    {'roll_number': rollNumber},
                                    { headers: {'Authorization': `Bearer ${access_token}`, 
                                    'Content-Type': 'application/json'} })
    // console.log(response.data)
    return response.data
}


export async function getReadSecItems(category) {
    let baseURL = url
    
    let response = await axios.get(`${baseURL}readerSection/`,
    {params : {'category' : category}})

    console.log(response.data)
    
    return response.data
}

export async function getPuzzles() {
    let baseURL = url
    
    let response = await axios.get(`${baseURL}puzzle/`)
    
    return response.data
}

export async function getTeamDetails(year) {
    // console.log(year)
    let baseURL = url

    let response = await axios.get(`${baseURL}team/`,
                                    {params : {'year' : year}})

    return response.data
}


export async function getProfileImage() {
    let baseURL = url
    let { access_token } = getToken()

    // console.log(222222222)

    let response = await axios.get(`${baseURL}home/updateprofileimage/`,
                                    {headers: {'Authorization': `Bearer ${access_token}`, 
                                    'Content-Type': 'application/json'}})

    // console.log(33333333333333)
    // console.log(response.data)
    return response.data
}

export async function updateProfileImage(formData) {
    let baseURL = url
    let { access_token } = getToken()

    // console.log(1111111111)
    // console.log(formData.get("myImage"))
    formData.append('access_token', access_token)
    // console.log(formData.get("access_token"))

    let response = await axios.post(`${baseURL}home/updateprofileimage/`, 
                                    formData)

    return response.data
}


export async function uploadContent(formData) {

    let baseURL = url
    let { access_token } = getToken()

    formData.append('access_token', access_token)

    let response = await axios.post(`${baseURL}readerSection/upload/`, 
                                    formData)

    return response.data
}



export async function removeContent(title, author, category) {
    let baseURL = url
    let { access_token } = getToken()

    // console.log(11111111)
    let response = await axios.post(`${baseURL}readerSection/contentremoval/`,
                                    { 'title': title, 'username': author, 'category': category },
                                    { headers: {'Authorization': `Bearer ${access_token}`, 
                                    'Content-Type': 'application/json'} })

    // console.log(response.data)
    return response.data
}
// export async function getContentUploadRequests()
export async function checkAdmin() {
    let baseURL = url
    let { access_token } = getToken()

    let response = await axios.get(`${baseURL}readerSection/isadmin/`,
                                    { headers: {'Authorization': `Bearer ${access_token}`, 
                                    'Content-Type': 'application/json'} })

    return response.data
}


export async function getContentUploadRequests() {
    let baseURL = url
    let { access_token } = getToken()
    
    let response = await axios.get(`${baseURL}readerSection/contentapproval/`,
                                    { headers: {'Authorization': `Bearer ${access_token}`, 
                                    'Content-Type': 'application/json'} })

    // console.log(response.data)

    return response.data
}

export async function contentUploadRequestResponse(title, member_id, category, appprovalStatus) {
    let baseURL = url
    let { access_token } = getToken()

    // console.log(11111111)
    // console.log(title, category, appprovalStatus, member_id)
    let response = await axios.post(`${baseURL}readerSection/contentapproval/`,
                                    { 'title': title, 'member_id': member_id, 'category': category, 'status': appprovalStatus },
                                    { headers: {'Authorization': `Bearer ${access_token}`, 
                                    'Content-Type': 'application/json'} })

    // console.log(response.data)
    return response.data
}



export async function getReadBooks() {
    let baseURL = url
    let { access_token } = getToken()
    
    let response = await axios.get(`${baseURL}home/readbooks/`,
                                    { headers: {'Authorization': `Bearer ${access_token}`, 
                                    'Content-Type': 'application/json'} })

    return response.data
}



export async function sendOTP(email, requestType) {
    let baseURL = url

    console.log(email, requestType)

    let response = await axios.get(`${baseURL}home/emailverification/`,
                                    {params : {'email' : email,
                                                'request_type': requestType}})

    return response.data
}


// const delay = ms => new Promise(
//     resolve => setTimeout(resolve, ms)
// )

export async function verifyOTP(email, otp) {
    let baseURL = url
    // let { access_token } = getToken()

    console.log(email, otp)

    // await delay(2000)

    let response = await axios.post(`${baseURL}home/emailverification/`,
                                    { 'email':email, 'otp':otp })

    return response.data
}


export async function changeUsername(newUsername) {
    let baseURL = url
    let { access_token } = getToken()

    console.log(newUsername)

    let response = await axios.post(`${baseURL}home/changeusername/`,
                                    { 'new_username':newUsername },
                                    { headers: {'Authorization': `Bearer ${access_token}`, 
                                    'Content-Type': 'application/json'} })

    return response.data
}

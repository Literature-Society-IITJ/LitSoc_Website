# Literature Society Website

The Literature Society, IIT Jodhpur is a society of literary enthusiasts who like to engage in activities like poetry sessions, book reading sessions etc. People can view the poetries and other writings uploaded by the students of IITJ alongside the important announcements regarding the society activities. Furthermore, the students can issue books through the website.

## Built With

* [React.js](https://reactjs.org/) - Javascript library used
* [Django](https://www.djangoproject.com/) - Python framework used

## Collaborators
|Name|Roll no.|Role|
|--|--|--|
|[Shubh Goyal](https://github.com/Shubh-Goyal-07)| B21CS073 |Front-end|
|[Sukriti Goyal](https://github.com/s-goyal23)|B21CS075|Back-end|

## Frontend

1. Make sure you have installed npm globally. It comes with node.js.
2.  Open the terminal and go to the project directory

```bash
  cd frontend
```
3. Install dependencies

```bash
  npm i
```
4. Start the server

```bash
  npm run dev
```
5. The project should now be running locally!

## Backend

1. Make sure you have python3 installed on your system.
2. Make a .env file in the backend folder 
2. Copy the contents of the .env.example file to the .env file 

To check this

#### Run
```bash
  python --version
```
##### you should get like this python with a version
```bash
  Python 3.10.5
```

##### if you are not getting this then install python and add it to environment variables
2. Install virtualenv in case you haven't

```bash
  pip install virtualenv 
```
3. Activate the virtual environment

```bash
  virtualenv venv
  venv\scripts\activate
```
4. Install the necessary python packages

```bash
  pip install -r requirements.txt 
```
5. Go to the project directory

```bash
  cd backend
```
6. Migrate the models

```bash
  python manage.py makemigrations
```

```bash
  python manage.py migrate
```
7. Run the server 

```bash
  python manage.py runserver 
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

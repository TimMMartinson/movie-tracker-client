import { 
    signUp, 
    signIn, 
    indexMonth, 
    indexMovies } from './api.js'
import { onFailure, 
    onIndexMovieSuccess, 
    onShowMovieSuccess, 
    onSignUpSuccess, 
    onSignInSuccess, 
    onIndexSuccess } from './ui.js'
// import { store } from './store.js'

const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const signInForm = document.getElementById('signInForm')
const indexContainer = document.getElementById('indexContainer')
const indexButton = document.getElementById('indexButton')

// User actions
signInForm.addEventListener('submit', (event) => {
    event.preventDefault()
})

signUpButton.addEventListener('click', (event) => {
    signUp()
})

signInButton.addEventListener('click', (event) =>{
    signIn()
})

// Month actions
indexContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
        if(!id) return
        indexMovies(id)
            .then((res) => {
                console.log(res)
                return res.json()
            })
            .then((data) => {
                const moviesArray = Object.values(data)
                onIndexMovieSuccess(moviesArray)
            })
            .catch((err) => {
                console.error(err)
            })
})
indexButton.addEventListener('click', (event) => {
        indexMonth()
            .then((res) => res.json())
            .then((data) => {
                const monthsArray = Object.values(data)
                onIndexSuccess(monthsArray)
            })
            .catch((err) => {
                console.error(err)
            })
})
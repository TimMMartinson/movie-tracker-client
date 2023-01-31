import { signUp, signIn, indexMonth } from './api.js'
import { onFailure, onIndexMovieSuccess, onShowMovieSuccess, onSignUpSuccess, onSignInSuccess, onIndexSucces } from './ui.js'
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
indexButton.addEventListener('click', (event) => {
        indexMonth()
            .then((res) => onIndexSucces(res))
})
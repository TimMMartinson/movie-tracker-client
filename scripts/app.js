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
// lots of unused imports from our ui file
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
	// interesting pattern here- typically we add the api function to the submit of the form instead of he click of the button ( the button click Triggers the form submit) because then we have access to the form input data on the event target ... I see you've hardcoded the form elements into the api function - very creative solution!
	signUp()
})

signInButton.addEventListener('click', (event) =>{ 
    signIn() // cant help but feel we're missing a good amount of stuff here, like all of our promise chain and other ui function calls ... like below ! 
})

// Month actions
indexContainer.addEventListener('click', (event) => { // see my server suggestions
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
indexButton.addEventListener('click', (event) => { // see server suggestions
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
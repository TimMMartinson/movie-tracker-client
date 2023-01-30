import { signUp, signIn } from "./api.js"

const signUpButton = document.getElementById("signUp")
const signInButton = document.getElementById("signIn")
const signInForm = document.getElementById("signInForm")

signInForm.addEventListener("submit", (event) => {
    event.preventDefault()
})

signUpButton.addEventListener("click", (event) => {
    signUp()
})

signInButton.addEventListener("click", (event) =>{
    signIn()
})
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
const monthNav = document.getElementById("monthNav")

for (let i=0; i < months.length; i++) {
    let btn = document.createElement("button")
    btn.innerHTML = months[i]
    monthNav.appendChild(btn)
}

import { signUp, signIn } from "./api"

const signUpButton = document.getElementById("signUp")
const signInButton = document.getElementById("signIn")

signUpButton.addEventListener("click", (evt) => {
    evt.preventDefault()
    signUp()
})

signInButton.addEventListener("click", (evt) =>{
    evt.preventDefault()
    signIn()
})
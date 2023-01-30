import { showMovies } from "./api.js"

export const createMonthNav = (user) => {
    const months = ["JAN", "FEB", "MAR", "APR", 
    "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const monthNav = document.getElementById("monthNav")

    monthNav.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const monthIndex = months.indexOf(event.target.innerHTML)
        const monthId = user.months[monthIndex]._id
        showMovies(monthId)
        }
    })

    for (let i=0; i < months.length; i++) {
        let btn = document.createElement("button")
        btn.innerHTML = months[i]
        monthNav.appendChild(btn)
    }
}

const signInContainer = document.querySelector("#signInContainer")
const messageContainer = document.querySelector("#messageContainer")
const indexContainer = document.querySelector("#indexContainer")
const showMovieContainer = document.querySelector("#showMovieContainer")

export const onFailure = (error) => {
    messageContainer.innerHTML = `
    <h3>You've got an error!</h3>
    <p>${error}</p>
    `
}

export const onIndexSuccess = (movies) => {
    movies.forEach(movie => {
        const div = document.createElement("div")
        div.innerHTML = `
        <h3>${movie.title}</h3>
        <h3>${movie.watched}</h3>
        <h3>${movie.comments}</h3>
        <button data-id="${movie._id}">Show Movie</button>
        <button data-id-"${movie.is}">Delete Movie</button>
        `
    })
}
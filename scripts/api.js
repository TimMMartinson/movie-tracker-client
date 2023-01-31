export const signUp = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    fetch("http://127.0.0.1:8000/sign-up", {
        method: "POST",
        body: JSON.stringify({
            credentials: {
                email: email,
                password: password
            }
        }),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
}

import { createMonthNav } from "./ui.js"

export const signIn = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
  
    fetch("http://127.0.0.1:8000/sign-in", {
      method: "POST",
      body: JSON.stringify({
        credentials: {
          email,
          password
        }
      }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      window.localStorage.setItem("token", data.token)
      console.log(localStorage)
    })
    .then(createMonthNav())
    .catch(err => {
      console.error(err)
    })
  }

export const showMovies = (monthId) => {
    fetch(`http://127.0.0.1:8000/months/${monthId}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    console.log(showMovies)
    // .then(res => res.json())
    // .then(data => {
    //     const movieList = document.getElementById("showMovieContainer")
    //     movieList.innerHTML = ""

//         data.month.movies.forEach(movie => {
//             const movieItem = document.createElement("li")
//             movieItem.innerHTML = `Title: ${movie.title} <br> 
//             Watched: ${movie.watched} <br> Comments: ${movie.comments}`
//             movieList.appendChild(movieItem)
//         })
//     })
//     .catch(err => {
//         console.log(err)
//     })
}

// let monthIds = []

// export const fetchMonths = (userId) => {
//     fetch(`http://127.0.0.1:8000/months/${userId}`)
//     .then(res => res.json())
//     .then(data => {
//         for (let i = 0; i < data.months.length; i++) {
//             monthIds.push(data.months[i]._id)
//         }
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }

// const monthValue = document.getElementById("month-names").value
// const titleValue = document.getElementById("newMovie").value
// const watched = document.querySelector("input[name='watched']:checked").value === "Yes"
// const comments = document.getElementById("comments").value

// const movieData = {
//     month: monthValue,
//     title: titleValue,
//     watched: watched,
//     comments: comments
// }

// export const addMovie = () => {
    
// }
 
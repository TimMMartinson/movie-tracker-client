// import { store } from './store'

const signInContainer = document.querySelector('#signInContainer')
const messageContainer = document.querySelector('#messageContainer')
const indexContainer = document.querySelector('#indexContainer')
const showMovieContainer = document.querySelector('#showMovieContainer')

export const onFailure = (error) => {
    messageContainer.innerHTML = `
    <h3>You've got an error!</h3>
    <p>${error}</p>
    `
}

// User Actions
export const onSignUpSuccess = () => {
    messageContainer.innerHTML = 'You have created a new user! Now Sign in'
}

export const onSignInSuccess = (userToken) => {
    messageContainer.innerHTML = ''
}

// Month Actions
export const onIndexSuccess = (months) => {
    console.log(months)
    indexContainer.innerHTML = ''
    months.forEach((monthArray) => {
        monthArray.forEach((month) => {
            console.log(month)
            const div = document.createElement('div')
            div.innerHTML = `
            <h2>${month.month}</h2>
            <button data-id="${month._id}">Show Movies</button>
            `
            indexContainer.appendChild(div)
        }) 
    })
}

// Movie Actions
export const onIndexMovieSuccess = (movies) => {
    console.log(movies)
    indexContainer.innerHTML = ''
    movies.forEach((movie) => {
        console.log(movie)
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>${movie.title}</h3>
        <button data-id="${movie._id}">Show Movie</button>
        `
        indexContainer.appendChild(div)
    })
}

export const onShowMovieSuccess = (movie) => {
    indexContainer.classList.add('hide')

    showMovieContainer.classList.remove('hide')
    const div = document.createElement('div')
	div.innerHTML = `
        <div class='row'>
            <div class='col'>
                <h2>Movie</h2>
                <h3>${movie.title}</h3>
                <p>${movie.watched}</p>
                <p>${movie.comments}</p>
            </div>
            <div class='col'>
                <form data-id="${movie._id}">
                    <input class="form-control" type="text" name="title" value="${movie.title}">
                    <input class="form-control" type="radio" name="watched" value="${movie.watched}">
                    <input class="form-control" type="text" name="comments" value="${movie.comments}">
                    <button type="submit" class="btn btn-warning">Update Movie</button>
                </form>
                <button type="button" class="btn btn-danger" data-id="${movie._id}">Delete Movie</button>
            </div>
        </div>
    `
    showMovieContainer.appendChild(div)
}
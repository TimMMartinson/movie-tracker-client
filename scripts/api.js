// User actions
export const signUp = () => { // a function should do one thing and do it well 
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    fetch(`http://127.0.0.1:8000/sign-up`, {
        method: 'POST',
        body: JSON.stringify({
            credentials: {
                email: email,
                password: password
            }
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json()) // this is abandoning the functional programming paradigm - should be in app
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
}

export const signIn = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
  
    fetch(`http://127.0.0.1:8000/sign-in`, {
      method: 'POST',
      body: JSON.stringify({
        credentials: {
          email,
          password
        }
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json()) 
    .then(data => {
      window.localStorage.setItem('token', data.token)
      console.log(localStorage)
    })
    .catch(err => {
      console.error(err)
    })
  }

// Movie Actions

export const indexMovies = (monthId) => {
    return fetch(`http://127.0.0.1:8000/movies?monthId=${monthId}`, {
        headers: {
			'Authorization': `Bearer ${window.localStorage.getItem('token')}`
		} 
    })
}

// Month Actions
export const indexMonth = () => {
	return fetch(`http://127.0.0.1:8000/months`, {
		headers: {
			'Authorization': `Bearer ${window.localStorage.getItem('token')}`
		}
	})
}


// there is no movie or month crud in here ? that's a little disappointing after all the effort you put into those route in the backend. 
// User actions
export const signUp = () => {
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
    .then(res => res.json())
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
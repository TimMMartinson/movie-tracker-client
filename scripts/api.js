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

export const signIn = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    fetch("http://127.0.0.1:8000/sign-in", {
        method: "POST",
        body: JSON.stringify({
            credentials: {
                email: email,
                password: password
            }
        }),
        headers: {
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
export const signUp = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    fetch("/sign-up", {
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
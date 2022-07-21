function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email": email,

        })
    }
    return fetch('http://localhost:3000/users', configurationObject)
        .then(res => res.json())
        .then(object => {
            console.log(object)
            const users = document.createElement('ul')
            users.setAttribute('id', 'list')
            document.body.appendChild(users)
            const user = document.createElement('li')
            user.textContent = object.id
            users.appendChild(user)
        })
        .catch(error => {
            alert("Unauthorized Access")
            console.log(error.message)
            const errorHelp = document.createElement('p')
            document.body.appendChild(errorHelp)
            errorHelp.textContent = error.message
        })
}

submitData()
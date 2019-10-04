const submitData = (name, email) => {
  
    const url = "http://localhost:3001/users"
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
                name, 
                email
            })
    }

    return fetch(url, configObject)
        .then(response => response.json())
        .then(data => {
            const idList = document.querySelector("#user-id")
            idList.innerHTML = data.id; 
        })
        .catch(error => {
            const err = document.querySelector("#error")
            err.innerHTML = error.message; 
        })
    }

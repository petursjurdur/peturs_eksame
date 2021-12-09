document.addEventListener("DOMContentLoaded", function() {
    
    let button = document.getElementById("submit")

    button.addEventListener("click", (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        let newUser = {
            username: username,
            password: password,
        };
        
        fetch('http://localhost:3000/newuser', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)

        }).then(response => response.json())
        .then(data => {
            console.log(data)
            alert("Bruger Oprettet" + data.msg)
                location.href = "/hjem.html"
            })
    
        .catch((error) => {
            alert('Error:', error)
        })
    })
})
document.addEventListener("DOMContentLoaded", (event) => {

  const savedUser = localStorage.getItem("user");
  if(savedUser) {
      location.href = "/hjem.html";
  }
    
  document.getElementById("submit").addEventListener("click", () => {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = {
      username: username,
      password: password,
    };
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(user));
          location.href = "/hjem.html";
        } else {
          window.alert("Fail");
        }
      })
      .catch(() => {
        window.alert("Noget er galt");
      }); 
     
  });
});
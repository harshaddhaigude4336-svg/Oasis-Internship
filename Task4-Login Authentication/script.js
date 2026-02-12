// Register user
function register() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        document.getElementById("message").innerText = "Fill all fields!";
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerText = "Registration Successful!";
}

// Login user
function login() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var savedUser = localStorage.getItem("user");
    var savedPass = localStorage.getItem("pass");

    if (user === savedUser && pass === savedPass) {

        localStorage.setItem("loggedIn", "true"); // session
        window.location.href = "dashboard.html";

    } else {
        document.getElementById("message").innerText = "Wrong Username or Password!";
    }
}

// Logout
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}

// Protect dashboard
if (window.location.pathname.includes("dashboard.html")) {

    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html";
    }
}

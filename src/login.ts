document.addEventListener("DOMContentLoaded", () =>{
    const loginButton = document.getElementById("admin-button") as HTMLButtonElement;
    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const errorMessage = document.getElementById("error") as HTMLParagraphElement;

    errorMessage.style.display = "none";
    const users = [
        {username: "admin", password:"admin123", role: "admin"},
        {username: "player", password:"player123", role: "player"}
    ];
    loginButton?.addEventListener("click", () =>{
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        usernameInput.value = "";
        passwordInput.value = "";
        const user = users.find(u=> u.username === username && u.password === password);

        if(user) {
            localStorage.setItem("userType", user.role);
            localStorage.setItem("username", user.username);

            if(user.role === "admin") window.location.href = "admin.html";
            else window.location.href = "index.html";
        } else errorMessage.style.display = "block";
    });
})
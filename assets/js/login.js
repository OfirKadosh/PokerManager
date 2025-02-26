"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("admin-button");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error");
    errorMessage.style.display = "none";
    const users = [
        { username: "admin", password: "admin123", role: "admin" },
        { username: "player", password: "player123", role: "player" }
    ];
    loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        usernameInput.value = "";
        passwordInput.value = "";
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem("userType", user.role);
            localStorage.setItem("username", user.username);
            if (user.role === "admin")
                window.location.href = "admin.html";
            else
                window.location.href = "index.html";
        }
        else
            errorMessage.style.display = "block";
    });
});
//# sourceMappingURL=login.js.map
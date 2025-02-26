import { AdminController } from "./controllers/AdminController.js";

document.addEventListener("DOMContentLoaded", () => {
  const userType = localStorage.getItem("userType");
  if(userType !== "admin") {
    alert("Unauthorized access! Redirecting to login...");
    window.location.href = "login.html";
  }
  new AdminController();
});
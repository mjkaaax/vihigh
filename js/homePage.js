document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        window.location.href = "login.html";
        return;
    }

    const welcomeText = document.querySelector(".title");
    if (welcomeText) {
        const nameToShow = loggedInUser.displayName || loggedInUser.username;
        welcomeText.textContent = `Welcome, ${nameToShow}!`;
    }
});
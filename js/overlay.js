document.querySelector(".pfp").addEventListener("click", function() {
    document.body.classList.toggle("active-accOverlay");
});

document.querySelector(".accOverlay .close-btn").addEventListener("click", function() {
    document.body.classList.remove("active-accOverlay");
});

document.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) return;

    const pfpOverlay = document.querySelector(".pfpOverlay");
    const changePfpBtn = document.querySelector(".changePfp");

    if (loggedInUser.profilePic) {
        pfpOverlay.src = loggedInUser.profilePic;
    }
    if (!loggedInUser) return;

    const pfp = document.querySelector(".pfp");

    if (loggedInUser.profilePic) {
        if (pfp) pfp.src = loggedInUser.profilePic;
        if (pfpOverlay) pfpOverlay.src = loggedInUser.profilePic;
    }

    changePfpBtn.addEventListener("click", () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.click();

        fileInput.addEventListener("change", () => {
            const file = fileInput.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                const newPic = e.target.result;

                pfpOverlay.src = newPic;

                loggedInUser.profilePic = newPic;
                localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

                const users = JSON.parse(localStorage.getItem("users")) || [];
                const index = users.findIndex(u => u.username === loggedInUser.username);
                if (index !== -1) {
                    users[index].profilePic = newPic;
                    localStorage.setItem("users", JSON.stringify(users));
                }

                const pfpNavbar = document.querySelector(".pfp");
                if (pfpNavbar) {
                    pfpNavbar.src = newPic;
                }
            };

            reader.readAsDataURL(file);
        });
    });

    const nameToDisplay = document.querySelector(".nameOverlay");
    if (nameToDisplay) {
        const nameToShow = loggedInUser.displayName || loggedInUser.username;
        nameToDisplay.textContent = `${nameToShow}`;
    }

    const usertoDisplay = document.querySelector(".username");
    if (usertoDisplay) {
        const userToShow = loggedInUser.username;
        usertoDisplay.textContent = `@${userToShow}`;
    }

    const logoutBtn = document.querySelector(".logOutOverlay");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "../html/loginPage.html";
        });
    }
});
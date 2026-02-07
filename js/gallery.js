const albums = {
    travel: [
        "../images/library.png",
        "../images/travel2.jpg",
        "../images/travel3.jpg"
    ],
    animals: [
        "../images/gallery.png",
        "../images/animal2.jpg"
    ],
    people: [
        "../images/pfp.png",
        "../images/people2.jpg"
    ],
    nature: [
        "../images/navBG.png",
        "../images/logoOnly.png"
    ],
    events: [
        "../images/logoFull.png",
        "../images/favorites.png"
    ],
    videos: [
        "../images/animalAlbum.png",
        "../images/aboutMeHeader.png"
    ]
};

const overlay = document.getElementById("albumOverlay");
const overlayImage = document.getElementById("overlayImage");
const closeBtn = document.querySelector(".overlayClose");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentAlbum = [];
let currentIndex = 0;

document.querySelectorAll(".card").forEach((card, index) => {
    card.addEventListener("click", () => {
        if (index === 0) currentAlbum = albums.travel;
        if (index === 1) currentAlbum = albums.animals;
        if (index === 2) currentAlbum = albums.people;
        if (index === 3) currentAlbum = albums.nature;
        if (index === 4) currentAlbum = albums.events;
        if (index === 5) currentAlbum = albums.videos;

        currentIndex = 0;
        overlayImage.src = currentAlbum[currentIndex];
        overlay.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
    overlayImage.src = currentAlbum[currentIndex];
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentAlbum.length;
    overlayImage.src = currentAlbum[currentIndex];
});

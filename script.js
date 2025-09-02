// Show slides
function showSlide(slideId) {
    console.log("Switching to:", slideId);

    // Hide all slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.display = 'none';
    });

    // Show the selected slide
    document.getElementById(slideId).style.display = 'block';

    // If final slide, trigger ultimate love overload
    if (slideId === "statement") {
        addHearts();
        startHeartRain();
        addCuteFaces();
    }
}

// 🌸 Continuous Flower Rain (for starting slide and all others)
function startFlowerRain() {
    const flowers = ["🌸", "🌹", "🌼", "🌷", "🌻", "💐"];
    
    setInterval(() => {
        let flower = document.createElement("div");
        flower.classList.add("raining-flower");
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = (Math.random() * 5 + 5) + "s";
        flower.style.top = "-10%";
        document.body.appendChild(flower);

        // Remove after animation
        setTimeout(() => {
            flower.remove();
        }, 11000);
    }, 800); // one flower every 0.4s
}

// 💖 Existing hearts for final slide
function addHearts() {
    let statementDiv = document.getElementById("statement");
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 1) + "s";
        heart.style.top = Math.random() * 20 + "%";
        statementDiv.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

// ❤️ Heart rain on final slide
function startHeartRain() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("raining-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        heart.style.top = "-10%";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

// 🥰 Cute faces for final slide
function addCuteFaces() {
    let statementDiv = document.getElementById("statement");
    for (let i = 0; i < 10; i++) {
        let face = document.createElement("div");
        face.classList.add("cute-face");
        face.innerHTML = "🥰";
        face.style.left = Math.random() * 80 + "vw";
        face.style.animationDuration = (Math.random() * 2 + 1) + "s";
        face.style.top = Math.random() * 50 + "%";
        statementDiv.appendChild(face);

        setTimeout(() => {
            face.remove();
        }, 4000);
    }
}

// 🚀 Start flower rain as soon as the page loads
window.onload = () => {
    showSlide("slide1");  // show first slide
    startFlowerRain();    // start raining flowers
};


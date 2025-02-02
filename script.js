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

// Floating hearts on every slide
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

        // Remove hearts after animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

// Raining Hearts on Final Slide (NOW NONSTOP)
function startHeartRain() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("raining-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        heart.style.top = "-10%";
        document.body.appendChild(heart);

        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

// Cute Blinking Faces for Final Slide
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

        // Remove faces after animation
        setTimeout(() => {
            face.remove();
        }, 4000);
    }
}
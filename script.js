// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to draw the baby breath bouquet
function drawBouquet() {
    ctx.fillStyle = '#87CEEB'; // Light blue
    ctx.beginPath();
    ctx.arc(canvas.width - 100, canvas.height - 100, 30, 0, 2 * Math.PI);
    ctx.fill();

    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(canvas.width - 100 + Math.cos(i * Math.PI / 5) * 40, canvas.height - 100 + Math.sin(i * Math.PI / 5) * 40, 15, 0, 2 * Math.PI);
        ctx.fill();
    }

    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(canvas.width - 100 + Math.cos(i * Math.PI / 2.5) * 60, canvas.height - 100 + Math.sin(i * Math.PI / 2.5) * 60, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Function to draw the falling petals
function drawPetals() {
    ctx.fillStyle = '#FFC0CB'; // Pink
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Main animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBouquet();
    drawPetals();
    requestAnimationFrame(animate);
}

animate();

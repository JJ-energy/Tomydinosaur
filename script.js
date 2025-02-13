const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Petal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speed = Math.random() * 0.5 + 0.1;
        this.color = '#87CEEB'; // pixel blue
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = -this.size;
            this.x = Math.random() * canvas.width;
        }
    }
}

const petals = [];
for (let i = 0; i < 100; i++) {
    petals.push(new Petal(Math.random() * canvas.width, Math.random() * canvas.height));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < petals.length; i++) {
        petals[i].draw();
        petals[i].update();
    }
    requestAnimationFrame(animate);
}

animate();

// Draw baby breath flower
ctx.font = '30px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillStyle = '#fff';
ctx.fillText('Happy Valentine\'s Day', canvas.width / 2, canvas.height / 2 - 50);

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
ctx.fillStyle = '#87CEEB'; // pixel blue
ctx.fill();

for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.arc(canvas.width / 2 + Math.cos(i * Math.PI / 5) * 70, canvas.height / 2 + Math.sin(i * Math.PI / 5) * 70, 20, 0, 2 * Math.PI);
    ctx.fillStyle = '#87CEEB'; // pixel blue
    ctx.fill();
}
// ...

// Draw baby breath bouquet
ctx.fillStyle = '#87CEEB'; // pixel blue
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

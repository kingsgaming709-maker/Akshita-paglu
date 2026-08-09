const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

ctx.textAlign = "center";
ctx.textBaseline = "middle";

const points = [];

for (let scale = 11; scale <= 16; scale++) {
    for (let i = 0; i < 120; i++) {

        const angle = i * Math.PI * 2 / 120;

        const x =
            16 * Math.pow(Math.sin(angle), 3) * scale;

        const y =
            (13 * Math.cos(angle)
                - 5 * Math.cos(2 * angle)
                - 2 * Math.cos(3 * angle)
                - Math.cos(4 * angle)) * scale;

        points.push({ x, y });
    }
}

let progress = 0;
let pulse = 1;

function draw() {

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(pulse, pulse);

    for (let i = 0; i < progress; i++) {

        const p = points[i];

        const alpha = i / points.length;

        ctx.fillStyle = `rgba(255,182,193,${0.3 + alpha * 0.7})`;

        ctx.shadowBlur = 15;
        ctx.shadowColor = "#ff69b4";

        ctx.font = "bold 11px Arial";
        ctx.fillText("I Love You", p.x, -p.y);
    }

    ctx.restore();

    if (progress < points.length) {
        progress += 2;        // Drawing speed
    } else {
        pulse = 1 + Math.sin(Date.now() / 250) * 0.04; // Heartbeat
    }

    requestAnimationFrame(draw);
}

draw();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

ctx.fillStyle = "#ffb6c1";
ctx.textAlign = "center";
ctx.font = "12px Arial";

const cx = canvas.width/2;
const cy = canvas.height/2;

let scale = 11;

function drawHeart(scale){

    for(let i=0;i<120;i++){

        let angle = i * Math.PI * 2 / 120;

        let x = 16 * Math.pow(Math.sin(angle),3);
        let y = 13*Math.cos(angle)
              -5*Math.cos(2*angle)
              -2*Math.cos(3*angle)
              -Math.cos(4*angle);

        x *= scale;
        y *= scale;

        ctx.fillText("I Love You", cx+x, cy-y);
    }
}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let s=11;s<=16;s++){
        drawHeart(s);
    }

    scale += 0.02;
    if(scale>16) scale=11;

    requestAnimationFrame(animate);
}

animate();

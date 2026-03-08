const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(){
    for(let i=0;i<80;i++){
        particles.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height/2,
            dx:(Math.random()-0.5)*8,
            dy:(Math.random()-0.5)*8,
            life:100
        });
    }
}

function animateFireworks(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p,i)=>{
        p.x+=p.dx;
        p.y+=p.dy;
        p.life--;
        ctx.fillStyle=`hsl(${Math.random()*360},100%,50%)`;
        ctx.fillRect(p.x,p.y,4,4);
        if(p.life<=0) particles.splice(i,1);
    });
    requestAnimationFrame(animateFireworks);
}

setInterval(createFirework,1500);
animateFireworks();س
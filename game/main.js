document.getElementById("txt").innerText="これはゲームです";
const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");


let x=225;
let y=-50;
let y1=0;

window.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowLeft"){
        x -= 10;
    } else if(e.key==="ArrowRight"){
        x += 10;
    } else if(e.key === "Space"){
     tama += 1;
    }
    });
function gameLoop(){
ctx.fillStyle="black";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="blue";
ctx.fillRect(x,500,30,30)

ctx.fillStyle="yellow";
ctx.fillRect(225,y1,30,30)
y1 += 1;

ctx.fillStyle="yellow";
ctx.fillRect(100,y,30,30)
y += 1;

ctx.fillStyle="white";
ctx.fillRect(x+10,400-tama*10,10,10);
requestAnimationFrame(gameLoop);
}

gameLoop();


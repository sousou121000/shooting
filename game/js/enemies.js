export const enemies=[];
const SIZE=26;

function spawnEnemy(canvas){
    const w=SIZE;
    const h=SIZE;
    const x=Math.raundom()*(canvas.width - w);
    const y=0;
    const vy=5;

/*    enemies.push({x,y,width:w,height:h,vy:vy});
}

export function SpawnEnemy(canvas){
    if(enemies.length<5){
        spawnEnemy(canvas);
    }
}
export function updateEnemies(canvas){
    for(let i=enemies.length-1; i>=0; i--){
        const e=enemies[i];
        e.y += e.vy;
        if(e.y > canvas.height){
            enemies.splise(i,1);
        }
    }
}

export function/*
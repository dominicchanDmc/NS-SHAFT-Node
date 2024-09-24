import PlayerObj from "./script/player.js"
import BlockObj from "./script/block.js";
import J_BlockObj from "./script/j_Block.js";
import D_BlockObj from "./script/d_Block.js";
import L_BlockObj from "./script/l_Block.js";

//--------param
const statusStart = 'Start';
const statusEnd = 'End';
const standHold = 0, leftMoveAction = 1 ,rightMoveAction = 2;

const bgpic=new Image();
		bgpic.src="./assets/bg.jpg";
const toppic=new Image();
		 toppic.src="./assets/top.jpg";
const stand=new Image();
		 stand.src="./assets/1.png";
const blockPic=new Image();
		blockPic.src="./assets/block.jpg";
const j_blockPic=new Image();
		j_blockPic.src="./assets/jblock.jpg";
const d_blockPic=new Image();
        d_blockPic.src="./assets/dblock.jpg";
const l_blockPic=new Image();
        l_blockPic.src="./assets/leftBlock.jpg";
const leftpic=new Image();
		leftpic.src="./assets/left.png";
const rightpic=new Image();
		rightpic.src="./assets/right.png";
const gameOverPic=new Image();
        gameOverPic.src="./assets/gameOver.jpg";
let canvasB,ctxB,canvasM,ctxM;

let gameStatus = statusStart;
let endStatus = false;
let player = new PlayerObj();
let keysDown = {};
let speed = 7; 
let up = 0,up2=0,hitBlock = 0;
let down = 1,down2 = 1; 
let m_y = 0,m_y2 = 0,flag3 = 0;
let leftMove = 0 ,rightMove = 0,r = 0;
let ms = 250;
let recondFloor = 0;

//-------------------------
function restartGame() {
    console.log('Restarting game...');
    gameStatus = statusStart;
    endStatus = false;
    player = new PlayerObj();
    recondFloor = 0;

    restartButton.style.display = 'none';

}
document.addEventListener('DOMContentLoaded', () => {
    const restartButton = document.getElementById('restartButton');
    if (restartButton) {
        restartButton.addEventListener('click', restartGame);
        console.log("Restart button listener attached");
    } else {
        console.log("Restart button not found in DOM");
    }
});

function render() {
    canvasB = document.getElementById('canvasBoard');
    ctxB = canvasB.getContext('2d');
    canvasM = document.getElementById('canvasMove'); 
    ctxM = canvasM.getContext('2d');
    canvasB.width = 480;
    canvasB.height = 740;
    canvasM.width = 600;
    canvasM.height = 300;

    
    window.addEventListener('keydown', function(e) {
        keysDown[e.keyCode] = true;
    });
    window.addEventListener('keyup', function(e) {
        delete keysDown[e.keyCode];
    });
    /////move by touch
    canvasB.addEventListener("touchstart", function (e) {
            touches = e.touches[0];
          // tou = 1;
        });

    if(gameStatus == statusStart ){
        ctxB.drawImage(bgpic,0,0,canvasB.width,canvasB.height);
        if(player.state == standHold ) 
            ctxB.drawImage(stand,player.x,player.y,player.width,player.height);
        else if(player.state == leftMoveAction){
            ctxB.drawImage(leftpic,leftMove,0,player.width,player.height,player.x,player.y,player.width,player.height);
            leftMove+=50;
            if(leftMove >= 200) leftMove =0;
        }	
        else if(player.state == rightMoveAction){
            ctxB.drawImage(rightpic,rightMove,0,player.width,player.height,player.x,player.y,player.width,player.height);
            rightMove +=50;
            if(rightMove >= 200) rightMove =0;
        }
        ctxB.drawImage(toppic,0,0,canvasB.width,40);
        for(let i = 0 ; i < 10 ; i++){
            if(BlockArray[i].mod == 0) ctxB.drawImage(blockPic,BlockArray[i].x, BlockArray[i].y, BlockArray[i].width, BlockArray[i].height);
            else if  (BlockArray[i].mod == 1) ctxB.drawImage(spic,BlockArray[i].x, BlockArray[i].y, BlockArray[i].width, BlockArray[i].height);
            else if  (BlockArray[i].mod == 2) ctxB.drawImage(d_blockPic,BlockArray[i].x, BlockArray[i].y, BlockArray[i].width, BlockArray[i].height);
            else if  (BlockArray[i].mod == 3) ctxB.drawImage(j_blockPic,BlockArray[i].x, BlockArray[i].y, BlockArray[i].width, BlockArray[i].height);
            else{
                ctxB.fillStyle = BlockArray[i].color;
                ctxB.fillRect(BlockArray[i].x, BlockArray[i].y, BlockArray[i].width, BlockArray[i].height);
            }	
        }
        recondFloor++;
    }
    else if( (gameStatus == statusEnd) && endStatus){
        ctxB.clearRect(0, 0, canvasB.width, canvasB.height);
         let grd=ctxB.createLinearGradient(240,0,240,740);
        grd.addColorStop(0,"#eff2f7");
        grd.addColorStop(1,"#052459");
        ctxB.fillStyle=grd;
        ctxB.fillRect(0,0,canvasB.width,canvasB.height);
        ctxB.font = "60px Verdana";
        ctxB.fillStyle = "#FFA500";
        ctxB.fillText("Game Over", 70, 100);
        ctxB.lineWidth = 3;
        ctxB.strokeStyle = "#8A0808";
        ctxB.strokeText("Game Over", 70, 100);
        player.life = 0;
        ctxB.drawImage(gameOverPic,100, 200, 280,280);
        // ctxB.fillStyle = "#FFA500";
        // ctxB.fillRect(140,520,200,50);
        // ctxB.lineWidth = 4;
        // ctxB.strokeStyle = "#8A0808";
        // ctxB.strokeRect(140,520,200,50);
        // ctxB.font = "40px Verdana";
        // ctxB.fillStyle = "#FFA500";
        // ctxB.fillText("restart", 170, 560);
        // ctxB.lineWidth = 2;
        // ctxB.strokeStyle = "#8A0808";
        // ctxB.strokeText("restart", 170, 560);

         restartButton.style.display = 'block';
    }

        player.recondFloor = Math.floor(recondFloor/70);
        ctxM.clearRect(0, 0,canvasM.width,canvasM.height);
        ctxM.font = "60px Verdana";
        ctxM.fillStyle = "#F7A619";
        ctxM.fillText("Life = " + player.life, 30, 80);
        ctxM.lineWidth = 2;
        ctxM.strokeStyle = "#0EA418";
        ctxM.strokeText("Life = " + player.life, 30, 80);
        ctxM.font = "60px Verdana";
        ctxM.fillStyle = "#F7A619";
        ctxM.fillText("Recond Floor = " + player.recondFloor, 30, 150);
        ctxM.lineWidth = 2;
        ctxM.strokeStyle = "#0EA418";
        ctxM.strokeText("Recond Floor = " + player.recondFloor, 30, 150);
        if(localStorage.getItem('rec') < player.recondFloor && endStatus) localStorage['rec'] = player.recondFloor;
        ctxM.font = "60px Verdana";
        ctxM.fillStyle = "#F7A619";
        if( localStorage.getItem('rec') == null) ctxM.fillText("Recond = 0" , 30, 220);
        else ctxM.fillText("Recond =" + localStorage.getItem('rec'), 30, 220);
        ctxM.lineWidth = 2;
        ctxM.strokeStyle = "#0EA418";
        if( localStorage.getItem('rec') == null) ctxM.strokeText("Recond = 0" , 30, 220);
        else ctxM.strokeText("Recond =" + localStorage.getItem('rec'), 30, 220);
    
}
function update(mod) {
    // if(game == 1){
    if (37 in keysDown && player.x >= 0 && player.x < (canvasB.width-40) ) {
        player.x -= player.speed * mod;
        player.state = 1;
        if(player.x <= 0) player.x = 1;
    }
    else if (39 in keysDown && player.x >= 0 && player.x < (canvasB.width-40)) {
        player.x += player.speed * mod;
        player.state = 2;
        if(player.x >= (canvasB.width-40) ) player.x = canvasB.width-41;
    }
    for(let i = 0 ; i < 10; i++){
        BlockArray[i].y -= speed;
    }
    for(let i = 0 ; i < 10 ; i++){
        if((player.y <= BlockArray[i].y  &&player.y >= BlockArray[i].y -40 )&& player.x >BlockArray[i].x-20 && player.x < BlockArray[i].x +150){
            up =1;
            m_y = i;
            break;
        }
        else up = 0;
    }	
    if(up == 1){
        player.y = BlockArray[m_y].y-40;
        if(BlockArray[m_y].mod == 1) {
            // if(flag == 0 &&player.life< fulllife ) player.life++;
            // flag = 1;
            player.speed=ms/3;
        }else if (hitBlock==0 && 
            (BlockArray[m_y].mod == 2 || BlockArray[m_y].mod == 7)){

            if(player.life< player.fullLife) player.life--;
            player.speed = ms;
            hitBlock = 1;
        }else if(BlockArray[m_y].mod == 3 || BlockArray[m_y].mod == 9){ //J_block
            player.speed = ms*1.5;
            player.y -= 70;
        }
        else {
            // if(flag == 0 &&player.life< fulllife ) player.life++;
            player.speed =ms;
            // flag = 1;
        }
    }
    else  {
        if( player.y<35 )
        {
            player.life -= 5;
            player.y = 35;
        }
        player.y += 10;
        player.speed =ms;
        hitBlock = 0;
    }
    if(canvasB!=undefined && (player.y > canvasB.height || player.life <=0)) {
        gameStatus = statusEnd;
        endStatus = true;
    }
    // console.log(flag+"  "+player.life + "   " + player.speed);
    if(player.stair > 95) speed = 15;
    else if(player.stair > 80) speed = 14;
    else if(player.stair > 65) speed = 10;
    else if(player.stair > 50) speed = 10;
    else if(player.stair > 35) speed = 9;
    else if(player.stair > 20) speed = 8;
    for(let i = 0 ; i < 10 ; i++){
        if( BlockArray[i].y <= 30 ){
            BlockArray[i].y = canvasB.height + (Math.random()*10+1)*(Math.random()*50+50) + 100;
            BlockArray[i].x = Math.random() * canvasB.width-100;
            /// Avoid Overlapping
            while(1)
            {
                BlockArray[i].y = canvasB.height + (Math.random()*10+1)*(Math.random()*50+50) + 100;
                BlockArray[i].x = Math.random() * canvasB.width-100;
                var overlap = false;
                for(let j = 0 ; j < 10 ; j++)
                {
                    if( i==j ) continue;
                    if( (Math.abs(BlockArray[i].x-BlockArray[j].x)<=200) && (Math.abs(BlockArray[i].y-BlockArray[j].y)<=60)  )
                    {
                        overlap = true;
                        //console.log("overlap!");
                        break;
                    }
                }
                //console.log(overlap);
                if(!overlap) break;
            }
            /////////////////////////////////////
        }	
    }
    //}
}
function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
}



var time = Date.now();
setInterval(run, 35);

let BlockArray = [];
BlockArray[0] = new BlockObj(150,600);
for( let i = 1 ; i < 10 ; i++){
    let r;
    if (canvasB!=null && canvasB.width!=null)
         r = Math.random() * canvasB.width-150;
    else
        r = Math.random() * 380;
    //let r = Math.random() * 380;
    let de = (Math.random() * 20+i*4)*40 ;
    /// Avoid Overlapping
    while(1)
    {    
    if (canvasB!=null && canvasB.width!=null)
        r = Math.random() * canvasB.width-150;
    else
       r = Math.random() * 380;
         // = Math.random() * canvasB.width-100;
        //r = Math.random() * 380;
        de = (Math.random() * 20+i*4)*40 ;
        let overlap = false;
        for(let j = 0 ; j < i ; j++)
        {
            if(i==j) continue;
            if( (Math.abs(r-BlockArray[j].x)<=200) && (Math.abs(de-BlockArray[j].y)<=60)  )
            {
                overlap = true;
                //console.log("overlap!");
                break;
            }
        }
        if(!overlap) break;
    }
    /////////////////////////////////////
    if(i == 3 || i == 9 ) BlockArray[i] = new D_BlockObj(r,de);
    else if ( i == 2 || i == 7) BlockArray[i] = new BlockObj(r,de);
    else if ( i == 5 ) BlockArray[i] = new J_BlockObj(r,de);
    else BlockArray[i] = new BlockObj(r,de);
}

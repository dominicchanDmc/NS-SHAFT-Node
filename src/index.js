import PlayerObj from "./script/player.js"
import BlockObj from "./script/block.js";
import J_BlockObj from "./script/j_Block.js";
import D_BlockObj from "./script/d_Block.js";

//--------param
const statusSt = 'Start';

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
const leftpic=new Image();
		leftpic.src="./assets/left.png";
const rightpic=new Image();
		rightpic.src="./assets/right.png";
let canvasB,ctxB,canvasM,ctxM;



let gameStatus = statusSt;
let player = new PlayerObj();


//-------------------------
function render() {
    canvasB = document.getElementById('canvasBoard');
    ctxB = canvasB.getContext('2d');
    canvasM = document.getElementById('canvasMove'); 
    ctxM = canvasM.getContext('2d');
    canvasB.width = 480;
    canvasB.height = 740;
    canvasM.width = 480;
    canvasM.height = 300;
    if(gameStatus == statusSt ){
        ctxB.drawImage(bgpic,0,0,canvasB.width,canvasB.height);
        if(player.state == 0 ) 
            ctxB.drawImage(stand,player.x,player.y,player.width,player.height);
        else if(player.state == 1){
            ctxB.drawImage(leftpic,a,0,player.width,player.height,player.x,player.y,player.width,player.height);
            a+=50;
            if(a >= 200) a =0;
        }	
        else if(player.state == 2){
            ctxB.drawImage(rightpic,b,0,player.width,player.height,player.x,player.y,player.width,player.height);
            b +=50;
            if(b >= 200) b =0;
        }
        ctxB.drawImage(toppic,0,0,canvasB.width,40);
        for(let i = 0 ; i < 10 ; i++){
            if(Array[i].mod == 0) ctxB.drawImage(blockPic,Array[i].x, Array[i].y, Array[i].width, Array[i].height);
            else if  (Array[i].mod == 1) ctxB.drawImage(spic,Array[i].x, Array[i].y, Array[i].width, Array[i].height);
            else if  (Array[i].mod == 2) ctxB.drawImage(kpic,Array[i].x, Array[i].y, Array[i].width, Array[i].height);
            else if  (Array[i].mod == 3) ctxB.drawImage(j_blockPic,Array[i].x, Array[i].y, Array[i].width, Array[i].height);
            else{
                ctxB.fillStyle = Array[i].color;
                ctxB.fillRect(Array[i].x, Array[i].y, Array[i].width, Array[i].height);
            }	
        }
    }
    
}
function update(mod) {
    if(game == 1){
    if (37 in keysDown && man.x >= 0 && man.x < (canvas.width-40) ) {
        man.x -= man.speed * mod;
        man.state = 1;
        if(man.x <= 0) man.x = 1;
    }
    else if (39 in keysDown && man.x >= 0 && man.x < (canvas.width-40)) {
        man.x += man.speed * mod;
        man.state = 2;
        if(man.x >= (canvas.width-40) ) man.x = canvas.width-41;
    }else if(mouse == 0 && tou == 0)man.state = 0;
    for(i = 0 ; i < 10; i++){
        Array[i].y -= speed;
    }
    for( i = 0 ; i < 10 ; i++){
        if((man.y <= Array[i].y  &&man.y >= Array[i].y -40 )&& man.x >Array[i].x-20 && man.x < Array[i].x +150){
            up =1;
            m_y = i;
            break;
        }
        else up = 0;
    }	
    if(up == 1){
        man.y = Array[m_y].y-40;
        if(Array[m_y].mod == 1) {
            if(flag == 0 &&man.life< fulllife ) man.life++;
            flag = 1;
            man.speed=ms/3;
        }else if (Array[m_y].mod == 2){
            if(flag == 0)man.life -= 5;
            flag = 1;
            man.speed = ms;
        }else if(Array[m_y].mod == 3){
            if(flag == 0 &&man.life< fulllife ) man.life++;
            man.speed = ms*1.5;
            man.y -= 100;
            flag = 1;
        }
        else {
            if(flag == 0 &&man.life< fulllife ) man.life++;
            man.speed =ms;
            flag = 1;
        }
    }	
    else  {
        if( man.y<35 )
        {
            man.life -= 5;
            man.y = 35;
        }
        man.y += 10;
        man.speed =ms;
        flag = 0;
    }
    if(man.y > canvas.height || man.life <=0) {
        game = 0;
        end = 1;
    }
    //console.log(flag+"  "+man.life + "   " + man.speed);
    if(man.stair > 95) speed = 15;
    else if(man.stair > 80) speed = 14;
    else if(man.stair > 65) speed = 12;
    else if(man.stair > 50) speed = 10;
    else if(man.stair > 35) speed = 9;
    else if(man.stair > 20) speed = 8;
    for(i = 0 ; i < 10 ; i++){
        if( Array[i].y <= 30 ){
            Array[i].y = canvas.height + (Math.random()*10+1)*(Math.random()*50+50) + 200;
            Array[i].x = Math.random() * canvas.width-100;
            /// Avoid Overlapping
            while(1)
            {
                Array[i].y = canvas.height + (Math.random()*10+1)*(Math.random()*50+50) + 200;
                Array[i].x = Math.random() * canvas.width-100;
                var overlap = false;
                for(j = 0 ; j < 10 ; j++)
                {
                    if( i==j ) continue;
                    if( (Math.abs(Array[i].x-Array[j].x)<=200) && (Math.abs(Array[i].y-Array[j].y)<=60)  )
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
    }
}
function run() {
   // update((Date.now() - time) / 1000);
    render();
    time = Date.now();
}

var time = Date.now();
setInterval(run, 40);

let Array = [];
Array[0] = new BlockObj(150,600);
for( let i = 1 ; i < 10 ; i++){
    // let r = Math.random() * canvasB.width-100;
    let r = Math.random() * 380;
    let de = (Math.random() * 10+10+i*4)*40 ;
    /// Avoid Overlapping
    while(1)
    {
        // r = Math.random() * canvasB.width-100;
        r = Math.random() * 380;
        de = (Math.random() * 10+10+i*4)*40 ;
        let overlap = false;
        for(let j = 0 ; j < i ; j++)
        {
            if(i==j) continue;
            if( (Math.abs(r-Array[j].x)<=200) && (Math.abs(de-Array[j].y)<=60)  )
            {
                overlap = true;
                //console.log("overlap!");
                break;
            }
        }
        if(!overlap) break;
    }
    /////////////////////////////////////
    if(i == 3 || i == 9 ) Array[i] = new BlockObj(r,de);
    else if ( i == 2 || i == 7) Array[i] = new BlockObj(r,de);
    else if ( i == 5 ) Array[i] = new J_BlockObj(r,de);
    else Array[i] = new BlockObj(r,de);
}

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
let keysDown = {};
let speed = 7; 
let up = 0,up2=0;
let down = 1,down2 = 1; 
let m_y = 0,m_y2 = 0,flag3 = 0;
let leftMove = 0 ,rightMove = 0,r = 0;
let ms = 250;
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

    
    window.addEventListener('keydown', function(e) {
        keysDown[e.keyCode] = true;
    });
    window.addEventListener('keyup', function(e) {
        delete keysDown[e.keyCode];
    });
    /////move by touch
    canvasB.addEventListener("touchstart", function (e) {
            touches = e.touches[0];
            tou = 1;
        });
    canvasB.addEventListener("touchmove", function (e) {
            var t = e.touches[0];
            if (t.pageX < touches.pageX && player.x > 0 && player.x < 560) {
                player.x -= player.speed * 0.015;
                player.state = 1;
                if(player.x <= 0) player.x = 1;
            }
            else if (t.pageX > touches.pageX && player.x > 0 && player.x < 560) {
                player.x += player.speed * 0.015;
                player.state = 2;
                if(player.x >= 560) player.x = canvasB.width-41;
            }else player.state = 0;
            //alert(touches.pageX);
        });	

    if(gameStatus == statusSt ){
        ctxB.drawImage(bgpic,0,0,canvasB.width,canvasB.height);
        if(player.state == 0 ) 
            ctxB.drawImage(stand,player.x,player.y,player.width,player.height);
        else if(player.state == 1){
            ctxB.drawImage(leftpic,leftMove,0,player.width,player.height,player.x,player.y,player.width,player.height);
            leftMove+=50;
            if(leftMove >= 200) leftMove =0;
        }	
        else if(player.state == 2){
            ctxB.drawImage(rightpic,rightMove,0,player.width,player.height,player.x,player.y,player.width,player.height);
            rightMove +=50;
            if(rightMove >= 200) rightMove =0;
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
        Array[i].y -= speed;
    }
    for(let i = 0 ; i < 10 ; i++){
        if((player.y <= Array[i].y  &&player.y >= Array[i].y -40 )&& player.x >Array[i].x-20 && player.x < Array[i].x +150){
            up =1;
            m_y = i;
            break;
        }
        else up = 0;
    }	
    if(up == 1){
        player.y = Array[m_y].y-40;
        if(Array[m_y].mod == 1) {
            // if(flag == 0 &&player.life< fulllife ) player.life++;
            // flag = 1;
            player.speed=ms/3;
        }else if (Array[m_y].mod == 2){
            // if(flag == 0)player.life -= 5;
            // flag = 1;
            player.speed = ms;
        }else if(Array[m_y].mod == 3){
            // if(flag == 0 &&player.life< fulllife ) player.life++;
            player.speed = ms*1.5;
            player.y -= 100;
            // flag = 1;
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
        // flag = 0;
    }
    // if(player.y > canvas.height || player.life <=0) {
    //     game = 0;
    //     end = 1;
    // }
    //console.log(flag+"  "+player.life + "   " + player.speed);
    if(player.stair > 95) speed = 15;
    else if(player.stair > 80) speed = 14;
    else if(player.stair > 65) speed = 12;
    else if(player.stair > 50) speed = 10;
    else if(player.stair > 35) speed = 9;
    else if(player.stair > 20) speed = 8;
    for(let i = 0 ; i < 10 ; i++){
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
    //}
}
function run() {
    update((Date.now() - time) / 1000);
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

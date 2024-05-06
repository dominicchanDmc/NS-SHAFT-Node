import PlayerObj from "./script/player.js"
import BlockObj from "./script/block.js";

//--------param
const statusSt = 'Start';

const bgpic=new Image();
		bgpic.src="./assets/bg.jpg";
const toppic=new Image();
		 toppic.src="./assets/top.jpg";
const stand=new Image();
		 stand.src="./assets/1.png";
const blockpic=new Image();
		blockpic.src="./assets/block.jpg";
let canvasB,ctxB,canvasM,ctxM;

let gameStatus = statusSt;
let player = new PlayerObj();

canvasB = document.getElementById('canvasBoard');
ctxB = canvasB.getContext('2d');
canvasM = document.getElementById('canvasMove'); 
ctxM = canvasM.getContext('2d');
canvasB.width = 480;
canvasB.height = 740;
canvasM.width = 480;
canvasM.height = 300;
//-------------------------
function render() {
    if(gameStatus == statusSt ){
        ctxB.drawImage(bgpic,0,0,canvasB.width,canvasB.height);
        if(player.state == 0 ) 
            ctxB.drawImage(stand,player.x,player.y,player.width,player.height);

        ctxB.drawImage(toppic,0,0,canvasB.width,40);
        for(i = 0 ; i < 10 ; i++){
            if(Array[i].mod == 0) ctxB.drawImage(blockpic,Array[i].x, Array[i].y, Array[i].width, Array[i].height);
            else if  (Array[i].mod == 1) ctxB.drawImage(spic,Array[i].x, Array[i].y, Array[i].width, Array[i].height);
            else if  (Array[i].mod == 2) ctxB.drawImage(kpic,Array[i].x, Array[i].y, Array[i].width, Array[i].height);
            else if  (Array[i].mod == 3) ctxB.drawImage(jpic,Array[i].x, Array[i].y, Array[i].width, Array[i].height);
            else{
                ctxB.fillStyle = Array[i].color;
                ctxB.fillRect(Array[i].x, Array[i].y, Array[i].width, Array[i].height);
            }	
        }
    }
}

function run() {
   // update((Date.now() - time) / 1000);
    render();
    time = Date.now();
}

let Array = [];
Array[0] = new BlockObj(150,600);
for( let i = 1 ; i < 10 ; i++){
    let r = Math.random() * canvasB.width-100;
    let de = (Math.random() * 10+10+i*4)*40 ;
    /// Avoid Overlapping
    while(1)
    {
        r = Math.random() * canvasB.width-100;
        de = (Math.random() * 10+10+i*4)*40 ;
        let overlap = false;
        for(j = 0 ; j < i ; j++)
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
    // if(i == 3 || i == 9 ) Array[i] = new s_block(r,de);
    // else if ( i == 2 || i == 7) Array[i] = new k_block(r,de);
    // else if ( i == 5 ) Array[i] = new j_block(r,de);
    // else Array[i] = new BlockObj(r,de);
}

var time = Date.now();
setInterval(run, 40);

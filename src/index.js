// import PlayerObj from "./player.js"

//--------param
const statusSt = 'Start';

const bgpic=new Image();
		bgpic.src="./assets/bg.jpg";
const toppic=new Image();
		 toppic.src="./assets/top.jpg";
const stand=new Image();
		 stand.src="./assets/1.png";
let canvasB,ctxB,canvasM,ctxM;

let gameStatus = statusSt;
// let player = new PlayerObj();

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
        if(player.state == 0 ) ctxB.drawImage(stand,player.x,player.y,player.width,player.height);

        ctxB.drawImage(toppic,0,0,canvasB.width,40);
    }
}

function run() {
   // update((Date.now() - time) / 1000);
    render();
    time = Date.now();
}
var time = Date.now();
setInterval(run, 40);

class BlockXObj{
    
    constructor(a,b) {
        this.x= a;
        this.y= b;
        this.width= 300;
        this.height= 300;
        this.mod = 1;
        this.mo2 = 5;
        this.color = '#198e99';
        this.z = [x,y];
    }

    constructor(a,b,c,d) {
        this.x= a;
        this.y= b;
        this.width= 300;
        this.height= 300;
        this.mod = 0;
        this.mo2 = 8;
        this.mode = c;
        this.action = d;
        this.color = '#198e99';
        this.z = [x,y];
    }

    setXValue(a,b,speed,mod,size) {
       this.x= a;
        this.y= b;
        this.speed = speed;
        this.mod= mod;
        this.z = [x,y];
        this.size = size;
    }
} 

export default BlockXObj; 
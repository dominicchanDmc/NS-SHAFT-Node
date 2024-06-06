class BlockZObj{
    
    constructor(a,b) {
        this.x= a;
        this.y= b;
        this.width= 300;
        this.height= 300;
        this.mod = 0;
        this.color = '#198e99';
    }

    constructor(a,b,c,d) {
        this.x= a;
        this.y= b;
        this.width= 300;
        this.height= 300;
        this.mod = 0;
        this.mode = c;
        this.action = d;
        this.color = '#198e99';
    }

    setZValue(a,b,speed) {
       this.x= a;
        this.y= b;
        this.speed = speed;
    }
} 

export default BlockZObj; 
class BlockZObj{
    constructor(a,b) {
        this.x= a;
        this.y= b;
        this.width= 300;
        this.height= 300;
        this.mod = 0;
        this.color = '#198e99';
        this.z = [x,y];
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
        this.z = [x,y];
    }

    setZValue(a,b,speed,mod,size,hp) {
       this.x= a;
        this.y= b;
        this.speed = speed;
        this.mod= mod;
        this.z = [x,y];
        this.size = size;
        this.hp = hp;
    }

    
} 

export default BlockZObj; 
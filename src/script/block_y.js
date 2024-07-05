class BlockYObj{
    
    constructor(a,b) {
        this.x= a;
        this.y= b;
        this.width= 300;
        this.height= 300;
        this.mod = 0;
        this.color = '#198469';
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
        this.color = '#198469';
        this.z = [x,y];
    }

    setZValue(a,b,speed,mod,size) {
       this.x= a;
        this.y= b;
        this.speed = speed;
        this.mod= mod;
        this.z = [x,y];
        this.size = size;
    }
} 

export default BlockYObj; 
class BlockYObj{
    
    constructor(a,b) {
        this.x= a;
        this.y= b;
        this.width= 300;
        this.height= 300;
        this.mod = 0;
        this.mo2 = 7;
        this.color = '#148999';
        
    }

    constructor(a,b,c,d,action) {
        this.x= a;
        this.y= b;
        this.width= 400;
        this.height= 400;
        this.mod = 0;
        this.mo2 = 7;
        this.mode = c;
        this.action = action;
        this.color = '#148999';
        
    }

    setYValue(a,b,speed,mod,size) {
       this.x= a;
        this.y= b;
        this.speed = speed;
        this.mod= mod;
        this.z = [x,y];
        this.size = size;
    }
} 

export default BlockYObj; 
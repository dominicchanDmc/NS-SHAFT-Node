//const maxLife = 3;

class PlayerObj{
    
    constructor() {
        this.x = 200; 
        this.y= 300;   
        this.width= 40;
        this.height= 40;  
        this.speed= 200;   
        this.life= 3;
        this.stair=0;      
        this.state=0;
        this.color= '#FF8000';
    }
} 

export default PlayerObj; 
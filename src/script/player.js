//const maxLife = 3;

class PlayerObj{
    
    constructor() {
        this.x = 200; 
        this.y= 300;   
        this.width= 40;
        this.height= 40;  
        this.speed= 150;   
        this.life= 5;
        this.recondFloor=0;      
        this.state=0;
        this.color= '#FF8000';
    }
} 

export default PlayerObj; 
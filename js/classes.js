
//Background
class Background{
    constructor(w,h){
     //Dibujar en canvas x,y,w,h 
     this.x =0;
     this.y =0;
     this.width = canvas.width;
     this.height = canvas.height;
     //image
     //imagen de fondo
     this.image = new Image();
        this.image.src = "images/bg.jpg";

    }

    update(){
    
        

        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);

    }
}

//spacecraft

class Spacecraft1{
    constructor (x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "images/spacecraft1.png"
        
    }
    
    update(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }


    collistion(){}
}
// let spacecraft1=document.querySelector(".spacecraft1")
//         let body=document.querySelector("body")
//         document.addEventListener("mousemove",(e)=>{
//             spacecraft1.style.left=e.clientX+"px";
//         })

// Enemys 1

class Enemy1{
    constructor (x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "images/enemy1.png"
        
    }
    
    update(){
        ctx.drawImage(this.image,this.x,this.y+=.3,this.width,this.height)
    }


    collistion(){}
}

// Enemys 1

class Enemy2{
    constructor (x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "images/enemy2.png"
        
    }
    
    update(){
        ctx.drawImage(this.image,this.x,this.y+=.3,this.width,this.height)
    }


    collistion(){}
}
    

    
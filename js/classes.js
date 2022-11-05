
//Background
class Background{
    constructor(w,h){
     //Dibujar en canvas x,y,w,h 
     this.x =10;
     this.y =10;
     this.width = w;
     this.height = h;
     //image
     //imagen de fondo
     this.image = new Image();
        this.image.src = "../images/bg.jpg";

    }

    update(){
        console.log("update");
        

        ctx.drawImage(this.image,this.x,this.y);

    }
}
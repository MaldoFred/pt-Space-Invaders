
//Background
class Background {
    constructor(w, h) {
        //Dibujar en canvas x,y,w,h 
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        //image
        //imagen de fondo
        this.image = new Image();
        this.image.src = "images/bg.jpg";
    }

    update() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        divPoin.innerHTML = "points:" + points;
    }
}

//spacecraft
class Spacecraft1 {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = new Image();
        this.image.src = "images/spacecraft1.png"
    }

    launchermissiles() {
        missilesArray.push({ x: this.x + 40, y: this.y, w: 3, h: 10 });
    }
    update() {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }
}

// Enemys 1

class Enemy1 {
    constructor(x, y, w, h, img) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = img;

    }

    update() {
        ctx.drawImage(this.image, this.x, this.y += .5, this.width, this.height)

    }

    collision(item) {
        return (
            this.x < item.x + item.w &&
            this.x + this.width > item.x &&
            this.y < item.y + item.h &&
            this.y + this.height > item.y
        )
    }
}

// Enemys 1
// class Enemy2 {
//     constructor(x, y, w, h) {
//         this.x = x;
//         this.y = y;
//         this.width = w;
//         this.height = h;
//         this.image = new Image();
//         this.image.src = "images/enemy2.png"

//     }

//     update() {
//         ctx.drawImage(this.image, this.x, this.y += .3, this.width, this.height)
//     }

// }



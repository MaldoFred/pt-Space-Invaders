
window.onload = function () {
    console.log("funsiono");
    // var ctx = document.getElementById("my-canvas").getContext("2d");
    //llamar clase
    const bg = new Background(canvas.widht, canvas.height);
    const spacecraft1 = new Spacecraft1(300, 500, 80, 80);
    let anemy1Array = []

    function generateEnemys1() {
        if (!(frames % 400 == 0)) {
            return
        }
        const x = Math.floor(Math.random() * (600 - 20) + 20)
        const img = frames % 160 == 0 ? "images/enemy1.png" : "images/enemy2.png"
        const enemy = new Enemy1(x, -80, 80, 80, img)
        anemy1Array.push(enemy)

    }
    function drawEnemy1() {
        anemy1Array.forEach((enemy, index_e) => {
            if (enemy.y >= 520) {
                gameOver()
            }

            enemy.update()
            missilesArray.forEach((misil, index_m) => {
                ctx.fillStyle = "#90F50E";
                ctx.fillRect(misil.x, misil.y -= 2, misil.w, misil.h);
                if (enemy.collision(misil)) {
                    anemy1Array.splice(index_e, 1)
                    missilesArray.splice(index_m, 1)
                    points += 10
                }
            });
            if (enemy.collision(spacecraft1)) {
                gameOver()
            }
            if (points >= 100) {
                winner()
            }
        })
    }

    // start-button
    document.getElementById("start-button").onclick = function () {
        if (!requestId) {
            requestId = setInterval(updateGame, 6);

        }
    };
    // reset
    document.getElementById("Reset").onclick = function () {
        console.log("Reset");
        window.location.reload()
    };

    function gameOver() {
        let image = new Image();
        image.src = "images/gameOver.jpg";
        bg.image = image;
        bg.update();
        setTimeout(() => {
            clearInterval(requestId)
            console.log("game over");
            requestId = undefined
        }, 1500);

    }

    function winner() {

        let image = new Image();
        image.src = "images/winner.png";
        bg.image = image;
        bg.update();
        setTimeout(() => {
            clearInterval(requestId)
            console.log("you winner");
            requestId = undefined
        }, 1500);
    }

    function updateGame() { // actualizar juego
        frames++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bg.update();

        generateEnemys1();

        drawEnemy1();

        spacecraft1.update();
    }

    this.addEventListener("keydown", function (event) {
        if (event.keyCode == '37') {//Tecla con la flecha hacia la izquierda		
            //alert('izquierda');
            console.log(spacecraft1.x)

            if (spacecraft1.x >= 0) {

                spacecraft1.x -= 10;
            }
        }

        if (event.keyCode == '39') { //Tecla con la flecha hacia la Derecha					
            // alert('derecha =)');
            console.log(spacecraft1.x)
            if (spacecraft1.x <= canvas.width - 80) {
                spacecraft1.x += 10;


            }
        }
        if (event.keyCode == '38') {//Tecla con la flecha hacia arriba		
            // alert('arriba');
            if (spacecraft1.y >= 0) {

                spacecraft1.y -= 6;
            }
        }
        if (event.keyCode == '40') { //Tecla con la flecha hacia abajo					
            //alert('abajo =)');
            if (spacecraft1.y <= canvas.height - 80) {

                spacecraft1.y += 6;
            }
        }
        if (event.keyCode == '32') { //missil					

            spacecraft1.launchermissiles();
            console.log(missilesArray.length);
        }

        console.log(event.keyCode);
    })
};

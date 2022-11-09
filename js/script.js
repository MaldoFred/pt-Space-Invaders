
window.onload = function () {
    console.log("funsiono");
    // var ctx = document.getElementById("my-canvas").getContext("2d");
    //llamar clase
    const bg = new Background(canvas.widht, canvas.height);
    const spacecraft1 = new Spacecraft1(300, 500, 80, 80);
    const enemy1 = new Enemy1(300, -80, 80, 80);
    const enemy2 = new Enemy2(100, -80, 80, 80);
    let anemy1Array = []
    let anemy2Array = []


    // function launchermissiles(){

    // }


    function generateEnemys1() {
        if (!(frames % 400 == 0)) {
            return
        }
        const x = Math.floor(Math.random() * (600 - 20) + 20)
        const enemy = new Enemy1(x, -80, 80, 80)
        anemy1Array.push(enemy)


    }
    function drawEnemy1() {
        anemy1Array.forEach((enemy, index_e) => {
            if(enemy.y>=520){
                let image = new Image();
                image.src="images/gameOver.jpg";
                bg.image= image;
                bg.update();
            }
            enemy.update()
        })
    }

    function generateEnemys2() {
        if (!(frames % 600 == 0)) {
            return
        }
        const x = Math.floor(Math.random() * (600 - 20) + 20)
        const enemy = new Enemy2(x, -80, 80, 80)
        anemy2Array.push(enemy)


    }
    function drawEnemy2() {
        anemy2Array.forEach((enemy, index_e) => {
            if(enemy.y>=520){
                let image = new Image();
                image.src="images/gameOver.jpg";
                bg.image= image;
                bg.update();
            }
            enemy.update()
        })

    }


    function mostrarMas() {

    }

    // start-button
    document.getElementById("start-button").onclick = function () {
        startGame();
        setInterval(updateGame, 6);
    };

    function startGame() {
        1


        //ejecuta updateGame
        updateGame()
    }

    function gameOver() {

    }
    // instructions



    function updateGame() { // actualizar juego
        frames++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bg.update();

        generateEnemys1();
        generateEnemys2();

        drawEnemy1();

        drawEnemy2();
        missilesArray.forEach((misil) => {
            ctx.fillStyle = "#90F50E";
            ctx.fillRect(misil.x, misil.y -= 2, misil.w, misil.h);

        });

        spacecraft1.update();
        //     enemy1.update();
        //     enemy2.update();
    }


    // addEventListener 
    //addEventListener()
    this.addEventListener("keydown", function (event) {
        if (event.keyCode == '37') {//Tecla con la flecha hacia la izquierda		
            //alert('izquierda');
            console.log(spacecraft1.x)

            if (spacecraft1.x >= 0) {

                spacecraft1.x -= 6;
            }
        }

        if (event.keyCode == '39') { //Tecla con la flecha hacia la Derecha					
            // alert('derecha =)');
            console.log(spacecraft1.x)
            if (spacecraft1.x <= canvas.width - 80) {
                spacecraft1.x += 6;


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
    // Missil
    // document.addEventListener("clic",()=>{
    //     missil.classList.add("missil");
    //     missil.style.bottom=80+"px"
    //     missil.style.left=(Spacecraft1.getBoundingClientRect().left+40)+"px";
    //     body.append(missil);
    // })



};

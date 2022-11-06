
window.onload = function() {
    console.log("funsiono");
    // var ctx = document.getElementById("my-canvas").getContext("2d");
    //llamar clase
    const bg = new Background(canvas.widht,canvas.height);
    const spacecraft1 = new Spacecraft1(300,500,80,80);
    const enemy1 = new Enemy1(300,-80,80,80);
    const enemy2 = new Enemy2(100,-80,80,80);


    
    document.getElementById("start-button").onclick = function() {
        startGame();
        setInterval(updateGame,6);
    };
  
    function startGame() {1
        

        //ejecuta updateGame
        updateGame()

    }

    function updateGame(){ // actualizar juego
ctx.clearRect(0,0,canvas.width,canvas.height);
        bg.update();

        spacecraft1.update();
        enemy1.update();
        enemy2.update();
    }


    // addEventListener 
    //addEventListener()
  this.addEventListener("keydown", function(event){
    if(event.keyCode == '37'){//Tecla con la flecha hacia la izquierda		
        //alert('izquierda');
        console.log(spacecraft1.x)

        if(spacecraft1.x>=0){

        spacecraft1.x-=6;
        }
     }

     if(event.keyCode == '39'){ //Tecla con la flecha hacia la Derecha					
       // alert('derecha =)');
       console.log(spacecraft1.x)
       if(spacecraft1.x<=canvas.width-80){
        spacecraft1.x+=6;

       
       }
     }
     if(event.keyCode == '38'){//Tecla con la flecha hacia arriba		
       // alert('arriba');
       if(spacecraft1.y>=0){

       spacecraft1.y-=6;
       }
     }
     if(event.keyCode == '40'){ //Tecla con la flecha hacia abajo					
        //alert('abajo =)');
        if(spacecraft1.y<=canvas.height-80){

        spacecraft1.y+=6;
        }
     }
    console.log(event.keyCode);
  })
  };
  
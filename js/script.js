
window.onload = function() {
    console.log("funsiono");
    // var ctx = document.getElementById("my-canvas").getContext("2d");
    //llamar clase
    const bg = new Background(canvas.widht,canvas.height);
    startGame();
    document.getElementById("start-button").onclick = function() {
     
    };
  
    function startGame() {
        

        //ejecuta updateGame
        updateGame()

    }

    function updateGame(){ // actualizar juego

        bg.update()

    }
  
  };
  
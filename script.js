const colors = [];
var pickedColor;
var colorH1;

var squares = document.querySelectorAll(".square");
var easyModo = document.querySelector("#easyMode");
var hardModo = document.querySelector("#hardMode");
var cambiarColor = document.querySelector("#ColorDisplay");
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");

easyModo.addEventListener("click", easy);
hardModo.addEventListener("click", hard);
reset.addEventListener("click", restart);
hard();
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")";
}

 function generateRandomColors(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = randomColor();
  }
 }

 function pickColor() {
   colorH1 = Math.floor(Math.random() * colors.length);
   return colors[colorH1];
 } 

function easy() {
  h1.style.background = "";
  message.textContent = "";
  reset.textContent= "NEW COLORS";
  squares[3].classList.remove("square");
  squares[4].classList.remove("square");
  squares[5].classList.remove("square");
  colors.splice(3, 3);

  for (var i = 0; i < 3; i++) {
    squares[i].style.background = randomColor();
    colors[i] = squares[i].style.background;
    cambiarColor.textContent = pickColor();
    pickedColor = cambiarColor.textContent;
  }
}

  function hard() {
    h1.style.background = "";
    message.textContent = "";
    reset.textContent = "NEW COLORS";
    squares[3].classList.add("square");
    squares[4].classList.add("square");
    squares[5].classList.add("square");
    randomColor();
  for (var i = 0; i < 6; i++) {
    squares[i].style.background=randomColor();
    colors[i]=squares[i].style.background;
    cambiarColor.textContent = pickColor();
    pickedColor = cambiarColor.textContent;
  }
}
    
function restart(){
  h1.style.background = "";
  reset.textContent = "NEW COLORS";
  randomColor();
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.background = randomColor();
    colors[i] = squares[i].style.background;
    cambiarColor.textContent = pickColor();
    pickedColor = cambiarColor.textContent;
    message.textContent = "";
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function(){
    var selectedColor = this.style.background;
      if (selectedColor == pickedColor) {
        h1.style.background = pickedColor;
          for(var i=0; i<colors.length ;i++){
            squares[i].style.background = pickedColor;    
          }
            message.textContent = "Right !...!!";
            reset.textContent = "Play again ??";
      }else{
          this.style.background = "#232323";
          message.textContent = "Try Again ...!!";
      }
    });  
  }

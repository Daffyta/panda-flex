var imgTotales = document.getElementsByClassName('img');
var eliminarElem = document.getElementsByClassName('x');

for (var i = 0; i < eliminarElem.length; i++) {
  imgTotales[i].addEventListener("click",ocultarImagen);
}
function ocultarImagen() {
  this.style.display = "none";
}

// Restaurar Imagenes
var botonRestaurar = document.getElementById('restaurando');
botonRestaurar.addEventListener("click",restaurar);

function restaurar(){
  for(var i=0; i < eliminarElem.length;i++){
      imgTotales[i].style.display="inline-block";
    }
}

// Origen ... ocultar texto izquierdo

function origen(){
  var textLeft = document.getElementById("text-left");
  textLeft.addEventListener("click",origen);
  if (textLeft.style.display == "none") {
    textLeft.style.display = "inline-block"
  } else {
      textLeft.style.display = "none"
  }
}

// Extincion ... ocultar texto derecho

function extincion(){
  var textRight = document.getElementById("text-right");
  if (textRight.style.display == "none") {
    textRight.style.display = "inline-block"
  } else {
      textRight.style.display = "none"
  }
}

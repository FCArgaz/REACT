var estadoLicuadora = "Apagado";
var licuadora = document.getElementById("licuadora");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

function controladorLicuadora() {
  if (estadoLicuadora == "Apagado") {
    estadoLicuadora = "Encendido";
    blenderSounds();
    licuadora.classList.add("prendida");
/*     console.log("me prendiste"); */
  } else {
    estadoLicuadora = "Apagado";
    blenderSounds();
    licuadora.classList.remove("prendida");
    /* console.log("me apagaste"); */
  }
}

function blenderSounds(){
    if( sonidoLicuadora.paused ){
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
};
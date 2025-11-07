let ataquejugador = ""
let ataqueEnemigo = ""
let vidasJugador = 3
let vidasEnemigo = 3

function reiniciarJuego() {
    location.reload()
}

function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"
    
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascota = document.getElementById("boton-mascotas")
    botonMascota.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("ataque-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("ataque-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("ataque-tierra")
    botonTierra.addEventListener("click", ataqueTierra)



    let botonReiniciar = document.getElementById("reiniciar-juego")
    botonReiniciar.addEventListener("click", reiniciarJuego) 
    
}

function seleccionarMascotaJugador() {

    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"


    let inputCloro = document.getElementById("Cloro")
    let inputTosca = document.getElementById("Tosca")
    let inputPuchito = document.getElementById("Puchito")  
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputCloro.checked) {
        spanMascotaJugador.innerHTML = "Cloro" 
    } else if (inputTosca.checked) { 
        spanMascotaJugador.innerHTML = "Tosca"
    } else if (inputPuchito.checked) {
        spanMascotaJugador.innerHTML = "Puchito"
    } else {
        alert("Selecciona bien pelotudo") 
        reiniciarJuego ()
    } 
    seleccionarmascotaEnemigo()



}
function seleccionarmascotaEnemigo() {
        let mascotaAleatorio = aleatorio(1,3)
        let spanMascotaEnemigo = document.getElementById("mascota-enemigo") 

        if (mascotaAleatorio == 1) {
            spanMascotaEnemigo.innerHTML = "Cloro"
        } else if (mascotaAleatorio == 2) {
            spanMascotaEnemigo.innerHTML = "Tosca" 
        } else {
            spanMascotaEnemigo.innerHTML = "Puchito"
        }
}

function ataqueFuego() {
    ataquejugador = "FUEGO 🔥"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataquejugador = "AGUA 💧"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataquejugador = "TIERRA 🌱"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO 🔥"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA 💧"
    }   else { ataqueEnemigo = "TIERRA 🌱"
    }   

    combate()

}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataquejugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
    } else if (ataquejugador == "FUEGO 🔥" && ataqueEnemigo == "TIERRA 🌱") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataquejugador == "AGUA 💧" && ataqueEnemigo == "FUEGO 🔥") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataquejugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 💧") { 
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }  
    revisarVidas()

}

    function revisarVidas() {
        if (vidasEnemigo == 0) {
            crearMensajeFinal("FELICIDADES, GANASTE EL COMBATE")
        } else if (vidasJugador == 0) {
            crearMensajeFinal("Perdiste la pelea, dedicate a otra cosa")
        }
    }

function crearMensaje(resultado) {
        let sectionMensajes = document.getElementById("mensajes")

        let parrafo = document.createElement("p")
        parrafo.innerHTML = "Tu mascota atacó con " + ataquejugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + "." + resultado 

    
        sectionMensajes.appendChild(parrafo)
}
    
function crearMensajeFinal(resultadoFinal) {
        let sectionMensajes = document.getElementById("mensajes")

        let parrafo = document.createElement("p")
        parrafo.innerHTML = resultadoFinal 

    
        sectionMensajes.appendChild(parrafo)

            let botonFuego = document.getElementById("ataque-fuego")
            botonFuego.disabled = true
            let botonAgua = document.getElementById("ataque-agua")
            botonAgua.disabled = true
            let botonTierra = document.getElementById("ataque-tierra")
            botonTierra.disabled = true

            let sectionReiniciar = document.getElementById("reiniciar")
            sectionReiniciar.style.display = "block"
}



function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)
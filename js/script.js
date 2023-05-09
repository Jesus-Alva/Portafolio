let menuVisible = false;
//function que muestra el menú
function visibilidadMenu() {
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculta el menu una vez se selecciona una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion que aplica las animacion
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("sass");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("javascript");
        habilidades[6].classList.add("c");
        habilidades[7].classList.add("laravel");
        habilidades[8].classList.add("bootstrap");
        habilidades[9].classList.add("angular");
        habilidades[10].classList.add("argon");
        habilidades[11].classList.add("vue");
        habilidades[12].classList.add("node");
        habilidades[13].classList.add("comunicacion");
        habilidades[14].classList.add("team");
        habilidades[15].classList.add("creatividad");
        habilidades[16].classList.add("dedicacion");
        habilidades[17].classList.add("pm");
        
    }

}

//detecta el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


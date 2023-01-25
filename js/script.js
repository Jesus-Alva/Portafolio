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
        habilidades[1].classList.add("php");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("c");
        habilidades[5].classList.add("laravel");
        habilidades[6].classList.add("bootstrap");
        habilidades[7].classList.add("angular");
        habilidades[8].classList.add("argon");
        habilidades[9].classList.add("vue");
        habilidades[10].classList.add("node");
        habilidades[11].classList.add("comunicacion");
        habilidades[12].classList.add("team");
        habilidades[13].classList.add("creatividad");
        habilidades[14].classList.add("dedicacion");
        habilidades[15].classList.add("pm");
        
    }

}

//detecta el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


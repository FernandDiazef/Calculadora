const boton = document.querySelectorAll("#num");
const signos = document.querySelectorAll("#signo");
let mostrar = document.querySelector("#mostrar");
const botonResultado = document.querySelector("#buttonResultado");
const botonLimpiar = document.querySelector("#limpiar");
let calcular = "";

//estos son los los nuemros
for(i = 0; i < boton.length; i++){
    boton[i].addEventListener("click", (event) => {
        mostrar.value += event.target.value;
    })
}
//estos son los signos 
for(j = 0; j < signos.length; j++){
    signos[j].addEventListener("click", (event) => {
        mostrar.value += event.target.value;
    })
}
//boton de limpiar
botonLimpiar.addEventListener("click", () => {
    mostrar.value = "";
    calcular = "";
})
//boton del calculo de sumar, restar y multipliclar
botonResultado.addEventListener("click", () => {
    try{
    calcular = eval(mostrar.value);
    mostrar.value = calcular;
    }catch(error){
        mostrar.value = "Exprecion mal formada";
    }
})
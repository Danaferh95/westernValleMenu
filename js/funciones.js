/*--------------------------------------------------------

	MENU DESPLEGABLE
		
	En esta sección hacemos el toggle del menu principal, donde se vuelve 
	un menu hamburguesa cuando el dispositivo es pequeño

--------------------------------------------------------*/

const navegacion = document.querySelector("nav"); //seleccionamos la navegación
const btnNav = document.querySelectorAll(".abrir , .cerrar"); //seleccionamos .abrir y .cerrar  que son los botones que abren y cierran el menu

//Aqui hacemos un for each para que cada boton al dar click hagamos un toggle entre la clase desplegado

btnNav.forEach((obj)=>{

	obj.addEventListener("click",()=>{
		navegacion.classList.toggle("desplegado");
	});


}); 
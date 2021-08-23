/*1. Crear un botón que al hacerle click, muestre un saludo por alert.*/
// let saludo= ()=> console.log("hola")
// const m= document.querySelector("#this")

// m.addEventListener("click", saludo)


/*2. Crear un botón que al hacerle click, muestre un mensaje en el HTML.*/

// let m= ()=> document.write("<p>Gracias por visitar nuestra pagina!</p>")

// const l= document.querySelector("#cuis")

// l.addEventListener("click", m)


/*3. Crear un botón que al hacerle click cambie de color.*/

// let accion=()=> document.querySelector("#cuis").classList.add("color")


/*4. Crear 5 botones numerados del 1 al 5. Al hacer click en uno y mostrar un mensaje que diga “Haz clickeado el botón $número”, indicando al usuario cuál botón apretó.*/

// agarro el elemento con el que voy a trabajar
// const botones = document.querySelectorAll("button")
// // document.getElementByValue(console.log(this.values))



// const cuandoSeHaceClick = function(hizo){
// 	document.write(`hiciste click en el boton ${hizo}`)
// }

// botones.forEach(boton=>{
// 	boton.addEventListener("click", function(){
// 		cuandoSeHaceClick(this.value)
	// })
// }) // me muestra el valor del value que tengo en html, no id y no class (en este caso). en este caso al presionar el boton me desaparece xq le sobreescribo algo con document.write


/*5. Crear un input y un botón. Dentro del input el usuario debe ingresar un color y al hacre click, el input se pone de ese color y se genera un mensaje indicando el color elegido.*/

// //acciones sobre el input
// const i= document.querySelector("#entrada")

// //funcion para que cambie de color el input
// let colorido=()=>{document.querySelector("#entrada").classList.add(`${i.value}`)}

// // acciones sobre el boton
// //elijo la clase boton
// const o= document.querySelector("#ingreso")

// //defino funcion para que me cambie el color del input
// let cambio= ()=>document.querySelector(".mensaje").innerText=(`elegiste el color ${i.value}`)

// //cuando hago click en el boton van a pasar estas dos cosas
// o.addEventListener("click", cambio)
// o.addEventListener("click", colorido)


/*6. Crear dos input tipo número y un botón. */

// /*a) Al hacer foco en un input se debe poner azul.*/

// let o= document.querySelector("#escribo")

// let colorido= ()=> {o.classList.add("azul")}

// o.addEventListener("focus", colorido)

// /*b) Al escribir, se debe poner violeta.*/

// let writing= ()=>{o.classList.add("violeta")}

// o.addEventListener("keydown", writing)

// /*c) Cuando se le saca el foco, se pone verde.*/

// let green= ()=> {o.classList.add("verde")}

// o.addEventListener("blur", green)


// /*d) Al hacer click en el boton genera un nuevo párrafo en el html que muestra la suma de ambos*/

// let boton= document.querySelector("button")

// let info= ()=>{console.log(o.value)}

// let info2= ()=>{console.log(boton.value)} /*con esto averiguo el valor del botonnnnn!!*/

// let suma= ()=> {document.write(`<p>${parseFloat(boton.value) + parseFloat(o.value)}`)}

// boton.addEventListener("click", info)
// boton.addEventListener("click", suma)

/*7)Poner en un select tres (o más) opciones de superheroes. Dependiendo el que el usuario elija, se mostrará debajo una imagen que haga referencia al personaje. Cuando se le pase el mouse por encima, la imagen debe mostrar una foto de su identidad secreta en su lugar. (Por ejemplo en lugar de verse superman, se vera a Clark Kent).*/

// let selected; let cod;

// function ShowSelected()
// {
 
// cod = document.getElementById("nom").value;   /* Para obtener el valor */
// console.log(cod);
 

// var combo = document.getElementById("nom");   /* Para obtener el texto */
// selected = combo.options[combo.selectedIndex].text;
// console.log(selected);

// photograph()

// }

// const m= document.querySelector("img")   

// let change= ()=>{m.src= `${cod}.jpg`}

// let photograph= ()=>{ 
//     if (selected===`${selected}`){
//         m.src=`${selected}.jpg`};  
//         m.addEventListener("mouseover", change)
//     }

//     m.addEventListener("mouseout", photograph)
    
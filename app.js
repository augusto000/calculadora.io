"use strict"
//calculadora

const botones = document.querySelectorAll('button');
const displayInferior = document.getElementById('displayInferior');
const displaySuperior = document.getElementById('displaySuperior');
let operador1=0,operador2=0,resultado=0,contenedor="",contador=1,simboloOperacion="";
displayInferior.textContent = "0" ;            
displaySuperior.textContent = "=";
botones.forEach(boton =>{
    boton.addEventListener('click',function(){
        debugger
        contenedor=(boton.textContent.trim());
       //Boton 'C': usar boton.className para tomar la la clase del boton, o boton.id y así poder validar.
        if(boton.className==="c"){
            displayInferior.textContent = "0" ;            
            displaySuperior.textContent = ""
            return;
        }
        if(boton.className==="log2"){
             let logaritmo = Math.log2(displayInferior.textContent);
             displaySuperior.textContent="= "+logaritmo;
             //alert(logaritmo);              
              return;
        }

        if(boton.className==="borrar"){
            displayInferior.textContent=displayInferior.textContent.slice(0,-1);
            return;
        }
        if(boton.className==="igual"){            
            console.log("ANTES  ", displayInferior.textContent);
            displaySuperior.textContent = eval(displayInferior.textContent);
            console.log("DESPUES  ", displaySuperior.textContent);
            return;
         }
        //displayInferior.textContent se puede usar como
        //contenedor para evaluar lo que contiene.GREAT!
        if(displayInferior.textContent === "0"){
            displayInferior.textContent=contenedor;
        }
        else{
            displayInferior.textContent+=contenedor;
        }        
    });
});


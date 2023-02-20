window.addEventListener('load', ()=> /*escuchamos solo cuando se carga el documento*/

{   /*Creamos dos constantes y nos guardamos los elementos que necesitmos*/
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');
    /*Creamos otra constante para convertir en el HTMLCollection a Array */ 
    const keypadButtonsArray = Array.from(keypadButtons);
    
    /*Iteramos por nuestro array de botones */
    keypadButtonsArray.forEach( (button) => {
        
        /*A cada boton le agregamos un listener*/
        button.addEventListener('click', ()=> {
            calculadora(button, display)
        })
    })
});

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        
        case '=':
            calcular(display);
            break;
        
        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) /*tomar el string y resolverlo y guardarlo en el inner HTML*/
}

function actualizar(display, button){
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
    /*display .innetHTML = display.innerHTML + button.innerHMTL*/
}

function borrar(display){
    display.innerHTML = 0
}
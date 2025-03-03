const display = document.getElementById("display");


function addToDisplay(value) {
    display.value += value;
}


function clearDisplay() {
    display.value= ""
} 


function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error){
        display.value = "Erro";
    }
    
}

function calculatePorcentage() {
    display.value = eval(display.value) / 100;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

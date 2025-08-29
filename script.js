const textBox = document.getElementById("textBox");
const toFar = document.getElementById("toFar");
const toCel = document.getElementById("toCel");
const result = document.getElementById("result");
let temp;

function convert(){
    temp = Number(textBox.value);
    if(toFar.checked){
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }else if(toCel.checked){
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "C";
    }else{
        result.textContent = "please choose a unit";
    }
}
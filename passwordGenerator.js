const inputGenerator = document.querySelector("#passwordGenerator");
const inputNumber = document.querySelector("#passwordNumber");
const inputSymbols = document.querySelector("#passwordSymbols");
const length = document.querySelector("#length");

const result = document.querySelector(".result1");

const letter = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ";
const numbers = "0123456789";
const symbols = "?/^$%#~*£"; 

function generatorPassword (str, nb) {
    let result = "";

    for (i = 0; i < nb; i++) {
        result = result + str.charAt(Math.floor(Math.random() * str.length)); 
    }
    return result;
}


inputGenerator.addEventListener("click", () => {
    let alpha = letter;

    inputNumber.checked ? (alpha = alpha + numbers) : "";
    inputSymbols.checked ? (alpha = alpha + symbols) : "";

    if (length.value == typeof '') {
        return 0;
    } else {
        result.innerHTML = generatorPassword(alpha, length.value);
    }
});

inputGenerator.value = "Generator";
length.value = "Number";
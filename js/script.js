import { Modal } from './modal.js'
import { alertError } from './alert-error.js';
import { calculeteIMC, notANumber } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.getElementById('weight');
const inputHeight = document.getElementById('height');

inputHeight.oninput = () => alertError.close()
inputWeight.oninput = () => alertError.close()

form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value
    const height = inputHeight.value

    const isWeightOrHeightNotANumber = notANumber(weight) || notANumber(height);

    if (isWeightOrHeightNotANumber) {
        alertError.open()
        return
    }


    const result = calculeteIMC(weight, height);
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`;

    Modal.Message.innerText = message;
    Modal.open();
}
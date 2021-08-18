function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        console.log(number);
        if (number=='C') {
            calcInput.value = '';
        }
    }
    else {      
        const prviousNumber = calcInput.value;
        const newnumber = prviousNumber + number;
        calcInput.value = newnumber;
    }
})
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('verification-success');
    const failedError = document.getElementById('verification-failed');
    if (pin==typedNumbers) {
        failedError.style.display = 'none';
        successMessage.style.display = 'block';
    }
    else {
        successMessage.style.display = 'none';
        failedError.style.display = 'block';
    }
}


function sum() {
    var num1 = parseInt(document.getElementById("first").value, 10);
    var num2 = parseInt(document.getElementById("second").value, 10);
    document.getElementById('hasil').innerHTML = num1 + num2;
}

function sub() {
    var num1 = parseInt(document.getElementById("first").value, 10);
    var num2 = parseInt(document.getElementById("second").value, 10);
    document.getElementById('hasil').innerHTML = num1 - num2;
}

function mul() {
    var num1 = parseInt(document.getElementById("first").value, 10);
    var num2 = parseInt(document.getElementById("second").value, 10);
    document.getElementById('hasil').innerHTML = num1 * num2;
}

function div() {
    var num1 = parseInt(document.getElementById("first").value, 10);
    var num2 = parseInt(document.getElementById("second").value, 10);
    document.getElementById('hasil').innerHTML = num1 / num2;
}
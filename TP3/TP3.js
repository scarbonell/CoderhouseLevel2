// COMENTARIO: el codigo es el mismo que hicimos en clase, precario pero funciona la calculadora correctamente... tendria que ahorrar codigo y otra forma de hacerlo.


//sumar

function getValues() {
	var num1 = document.getElementById('numero1').value;
	var num2 = document.getElementById('numero2').value;

	return [num1, num2];
}

function showResult(value){
	document.getElementById('resultado').innerHTML = value;
}

function suma () {
	var values = getValues();
	showResult(sum(values[0], values[1]));
}

function sum (a, b) {
	return parseInt(a) + parseInt(b);
}




//restar

function getValues() {
	var num1 = document.getElementById('numero1').value;
	var num2 = document.getElementById('numero2').value;

	return [num1, num2];
}

function showResult(value){
	document.getElementById('resultado').innerHTML = value;
}

function restar () {
	var values = getValues();
	showResult(res(values[0], values[1]));
}

function res (a, b) {
	return parseInt(a) - parseInt(b);
}

//multiplicar

function getValues() {
	var num1 = document.getElementById('numero1').value;
	var num2 = document.getElementById('numero2').value;

	return [num1, num2];
}

function showResult(value){
	document.getElementById('resultado').innerHTML = value;
}

function multiplicar () {
	var values = getValues();
	showResult(mult(values[0], values[1]));
}

function mult (a, b) {
	return parseInt(a) * parseInt(b);
}

//dividir

function getValues() {
	var num1 = document.getElementById('numero1').value;
	var num2 = document.getElementById('numero2').value;

	return [num1, num2];
}

function showResult(value){
	document.getElementById('resultado').innerHTML = value;
}

function dividir () {
	var values = getValues();
	showResult(div(values[0], values[1]));
}

function div (a, b) {
	return parseInt(a) / parseInt(b);
}



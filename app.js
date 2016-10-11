var numbers =[];
var calc =[];
var result = 0;



function add(num1, num2){
	return num1 + num2;
};

function mutilpy(num1, num2){
	return num1 * num2;
};

function divide(num1, num2){
	return num1/num2;
};

function subtract(num1, num2){
	return num1 - num2;
};
var numberPress = function(){
	var num = $(this).text();
	numbers.push(text);
};

var operationPress = function(){
	getNum();
	var text = $(this).text();
	numbers.push(text);
};

var getNum = function(){
	if(numbers.length > 0){
		var n= parseFloat(numbers.join('');
		calc.push(n);
	}
};

var pressEqual = function(){
	getNum();
	
	if (calc[1] === '+'){
		result = add(calc[0], calc[2]);
	} else if (calc[1] === '-'){
		result = subtract(calc[0], calc[2]);
	} else if (calc[1] === '*'){
		result = mulipty(calc[0], calc[2]);
	}else if (calc[1] === '/'){
		rese


$('.number').click(numberPress);
$('.operator').click(operationPress);
$('equals').click(pressEqual);
$('.clear').click(pressClear);


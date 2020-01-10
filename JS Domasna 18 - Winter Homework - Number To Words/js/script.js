let inputNumber = document.getElementById('number');
let btn = document.getElementById('btn');
let paragraph = document.getElementById('paragraph');
let div = document.getElementById('div');
let num = inputNumber.value;

let belowTen = [ ``, `One`, `Two`, `Three`, `Four`, `Five`, `Six`, `Seven`, `Eight`, `Nine` ];

let belowTwenty = [
	`Ten`,
	`Eleven`,
	`Twelve`,
	`Thirteen`,
	`Fourteen`,
	`Fifteen`,
	`Sixteen`,
	`Seventeen`,
	`Eighteen`,
	`Nineteen`
];
let belowHundred = [ ``, `Ten`, `Twenty`, `Thirty`, `Forty`, `Fifty`, `Sixty`, `Seventy`, `Eighty`, `Ninety` ];

function helper(num) {
	let result = '';

	if (num < 10) {
		result = belowTen[num];
	} else if (num < 20) {
		result = belowTwenty[num - 10];
	} else if (num < 100) {
		let inputNumberArray = Array.from(inputNumber.value);
		console.log(inputNumberArray);
		let secondNumber = inputNumberArray[inputNumberArray.length - 1];
		if (secondNumber === '0') {
			result = belowHundred[Math.floor(num / 10)] + ' ' + helper(num % 10);
		} else if (secondNumber != 0) {
			result = belowHundred[Math.floor(num / 10)] + '-' + helper(num % 10);
		}
	} else if (num < 1000) {
		result = belowTen[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100);
	} else if (num < 10000) {
		result = belowTen[Math.floor(num / 1000)] + ' Thousand ' + helper(num % 1000);
	} else if (num < 1000000) {
		result = helper(Math.floor(num / 1000)) + ' Thousand ' + helper(num % 1000);
	} else if (num < 1000000000) {
		result = helper(Math.floor(num / 1000000)) + ' Million ' + helper(num % 1000000);
	} else if (num < 1000000000000) {
		result = helper(Math.floor(num / 1000000000)) + ` Billion ` + helper(num % 1000000000);
	} else if (num < 1000000000000000) {
		result = helper(Math.floor(num / 1000000000000)) + ' Trillion ' + helper(num % 1000000000000);
	}

	return result;
}

btn.addEventListener(`click`, function() {
	let valueToNumber = Number(inputNumber.value);
	if (
		inputNumber.value === '' ||
		Number.isNaN(valueToNumber) ||
		inputNumber.value.length > 15 ||
		inputNumber.value < 0
	) {
		inputNumber.style.borderColor = 'red';
		paragraph.innerHTML =
			'<p style="color:red">* Unsuccessful! Please try one of the folowing: Input something in the field, Use numbers, don\'t use negative numbers and don\'t go over 15 numbers! </p>';
	} else if (inputNumber.value === '0') {
		paragraph.innerText = 'Zero';
	} else {
		inputNumber.style.borderColor = 'unset';
		paragraph.innerText = helper(Math.round(inputNumber.value));
	}
});

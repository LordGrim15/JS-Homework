let numbers = [ 1, 16, 23, 43, 17 ];
document.getElementById('main').innerHTML = `<ul>`;
for (let i = 0; i < numbers.length; i++) {
	document.getElementById('main').innerHTML += `<li>${numbers[i]}</li>`;
}
document.getElementById('main').innerHTML += `</ul>`;

let result = 0;
for (let i = 0; i < numbers.length; i++) {
	result += numbers[i];
}

document.getElementById('main').innerHTML += `<p>`;
for (let i = 0; i < numbers.length; i++) {
	if (numbers.length - 1 === i) {
		document.getElementById('main').innerHTML += `${numbers[i]} = ${result}`;
	} else {
		document.getElementById('main').innerHTML += `${numbers[i]} + `;
	}
}
document.getElementById('main').innerHTML += `</p>`;

let numbers = [ 15, 82, 8, 12, 53, 81 ];
let max = -Infinity;
let min = Infinity;

function findMaxMin() {
	for (let i = 0; i <= numbers.length; i++) {
		if (max < numbers[i]) {
			max = numbers[i];
		}
		if (min > numbers[i]) {
			min = numbers[i];
		}
	}
	let result = max + min;
	console.log(`Max is ${max}, min is ${min}, the result is ${result}.`);
}

findMaxMin();

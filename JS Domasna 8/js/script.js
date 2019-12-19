let firstName = [ 'Petar', 'Stefan', 'Dragan', 'Marija' ];
let lastName = [ 'Gjorgjioski', 'Hadzi-Eftimov', 'Kaleovski', 'Senkova' ];
let fullName = [];
let counter = 1;
function fullNameFunction(fullName) {
	for (let i = 0; i < firstName.length; i++) {
		fullName.push(`${counter}. ${firstName[i]} ${lastName[i]}`);
		counter++;
	}
	console.log(fullName);
}
fullNameFunction(fullName);

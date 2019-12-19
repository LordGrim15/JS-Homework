document.getElementsByTagName('div')[0].innerHTML = `<h1 class="h1Intro">Welcome to your recipe page!</h1>`;
let inputRecipeName = prompt('Please input the name of your recipe: ');
let inputNumberOfIngredients = prompt('Now enter the number of ingredients: ');
let numberOfIngredients = parseInt(inputNumberOfIngredients);

let ingredientsArray = [];
if (Number.isNaN(numberOfIngredients)) {
	alert('Invalid entry, please specify in numbers!');
} else {
	for (let i = 0; i < numberOfIngredients; i++) {
		let ingredientName = prompt('Now please enter all of the ingredients one by one: ');
		ingredientsArray.push(ingredientName);
	}
}
// console.log(ingredientsArray);

document.getElementsByTagName('div')[0].innerHTML += `<table class="tableStyle">
<tr>
<th class="tableHeaderStyle">${inputRecipeName}</th>
</tr>`;
for (let i = 0; i < ingredientsArray.length; i++) {
	// let counter = i + 1;
	document.getElementsByTagName(
		'div'
	)[0].firstElementChild.nextElementSibling.firstElementChild.innerHTML += `<tr class="recipeItemsStyle">
    <td class="ingredientStyle"><span class="counterColor"></span> ${ingredientsArray[i]} </td>
    </tr>`;
}
document.getElementsByTagName('div')[0].innerHTML += `</table>`;

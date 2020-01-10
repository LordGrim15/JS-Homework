let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let password = document.getElementById('password');
let email = document.getElementById('email');
let button = document.getElementById('btn');
let table = document.getElementById('table');

button.addEventListener('click', function() {
	table.innerHTML += `<tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${password.value}</td>
    <td>${email.value}</td>
    </tr>`;
});

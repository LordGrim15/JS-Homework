let textArea = $('#text');
let color = $('#color');
let h1 = $('#h1');
let error = $('#error');

$('button').on('click', function() {
	validate();
});

function validate() {
	let textAreaValue = textArea.val();
	if (textAreaValue === '') {
		textArea.css({ borderColor: 'red' });
		error.html(`<p style="color: red">* You need to enter something in the field!</p>`);
		h1.html('');
	} else {
		h1.html(`<h3 style="color: ${color.val()}">${textAreaValue}<h3>`);
		error.html('');
		textArea.css({ borderColor: 'unset' });
	}
}

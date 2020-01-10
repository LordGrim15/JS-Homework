let input = $('#name');
let btnSubmit = $('#btnSubmit');
let paragraph = $('#paragraph');

btnSubmit.on('click', function() {
	// paragraph.text('Hi there' + ' ' + input.val());
	validate();
});

function validate() {
	let inputValue = input.val();
	if (inputValue === '') {
		input.css({ borderColor: 'red' });
		paragraph.css({ color: 'red' });
		paragraph.text('* Please input something in the field!');
	} else {
		input.css({ borderColor: 'unset' });
		paragraph.css({ color: 'unset' });
		paragraph.text(`Hi there ${inputValue}!`);
	}
}

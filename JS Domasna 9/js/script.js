let allParagraphs = document.querySelectorAll('p');
for (let i = 0; i < allParagraphs.length; i++) {
	allParagraphs[i].innerText = '';
	allParagraphs[i].innerText = 'I changed the text of all paragraphs';
}

let allHeaders = document.querySelectorAll('h1, h3');
for (let i = 0; i < allHeaders.length; i++) {
	allHeaders[i].innerText = '';
	allHeaders[i].innerText = 'I changed the text of all headers';
}

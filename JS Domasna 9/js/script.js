let allParagraphsAndHeaders = document.querySelectorAll('p, h1, h3');
for (let i = 0; i < allParagraphs.length; i++) {
	allParagraphs[i].innerText = '';
	allParagraphs[i].innerText = 'I changed the text of both paragraphs and headers';
}

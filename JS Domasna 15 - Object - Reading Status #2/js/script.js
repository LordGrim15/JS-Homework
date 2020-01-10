let selector = document.getElementById(`selector`);
let briefAnswersToBigQuestions = document.getElementById(`answersToQuestions`);
let alex = document.getElementById(`alex`);
let weWereLiars = document.getElementById(`weWereLiars`);
let btn = document.getElementById(`btn`);
let paragraph = document.getElementById(`paragraph`);

function Books(title, author, readingStatus) {
	this.title = title;
	this.author = author;
	this.readingStatus = readingStatus;

	this.selected = function(readingStatus) {
		if (readingStatus === true) {
			paragraph.innerText = `Title: ${this.title},
            Author: ${this.author},
            Reading Status: You have already read this book!`;
		} else {
			paragraph.innerText = `Title: ${this.title},
            Author: ${this.author},
            Reading Status: You still need to read this book!`;
		}
	};
	this.selected(readingStatus);
}

function print(readingStatus) {
	if (selector.value === 'briefAnswersToBigQuestions') {
		let answersBook = new Books('Brief Answers To Big Questions', 'Stephen Hawking', false);
	} else if (selector.value === 'alex') {
		let alexBook = new Books('Alex', 'Pierre Lemaitre', true);
	} else {
		let WeWereLiarsBook = new Books('We Were Liars', 'E. Lockhart', false);
		WeWereLiarsBook;
	}
}

btn.addEventListener('click', function() {
	print();
});

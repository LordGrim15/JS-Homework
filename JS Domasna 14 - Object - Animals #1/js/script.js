let kindEl = document.getElementById(`kind`);
let nameEl = document.getElementById(`name`);
let speakEl = document.getElementById(`speak`);
let btn = document.getElementById(`btn`);
let paragraph = document.getElementById(`paragraph`);

function Animal(petsKind, petsName, petSpeak) {
    this.kind = petsKind;
    this.name = petsName;
    this.speak = function(petSpeak) {
        paragraph.innerText = `${this.name} says ${petSpeak}`;
    };

    this.speak(petSpeak);
}

function clearInput(firstEl, secondEl, thirdEl) {
    firstEl.value = '';
    secondEl.value = '';
    thirdEl.value = '';
}

btn.addEventListener('click', function() {
    let animalObj = new Animal(kindEl.value, nameEl.value, speakEl.value);
    console.log(animalObj);
    clearInput(kindEl, nameEl, speakEl);
});
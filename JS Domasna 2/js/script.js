let _0 = "Rat";
let _1 = "Ox";
let _2 = "Tiger";
let _3 = "Rabbit";
let _4 = "Dragon";
let _5 = "Snake";
let _6 = "Horse";
let _7 = "Goat";
let _8 = "Monkey";
let _9 = "Rooster";
let _10 = "Dog";
let _11 = "Pig";
let input = prompt("Please input your birth year: ");
let birthYear = parseInt(input);
let result = (birthYear - 4) % 12;

if (Number.isNaN(birthYear)) {
  alert("Invalid entry! Please use only numbers!");
} else if (result == 0) {
  alert(`Your Chinese zodiac is: ${_0}`);
} else if (result == 1) {
  alert(`Your Chinese zodiac is: ${_1}`);
} else if (result == 2) {
  alert(`Your Chinese zodiac is: ${_2}`);
} else if (result == 3) {
  alert(`Your Chinese zodiac is: ${_3}`);
} else if (result == 4) {
  alert(`Your Chinese zodiac is: ${_4}`);
} else if (result == 5) {
  alert(`Your Chinese zodiac is: ${_5}`);
} else if (result == 6) {
  alert(`Your Chinese zodiac is: ${_6}`);
} else if (result == 7) {
  alert(`Your Chinese zodiac is: ${_7}`);
} else if (result == 8) {
  alert(`Your Chinese zodiac is: ${_8}`);
} else if (result == 9) {
  alert(`Your Chinese zodiac is: ${_9}`);
} else if (result == 10) {
  alert(`Your Chinese zodiac is: ${_10}`);
} else {
  alert(`Your Chinese zodiac is ${_11}`);
}

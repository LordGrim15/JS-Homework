let chooseInput = prompt(
  "Type 1 if you want to convert dog years to human, otherwise type 2!"
);
let chosen = parseInt(chooseInput);
switch (chosen) {
  case 1:
    let inputDogYears = prompt("Please input your Dogs years:");
    let dogYears = parseInt(inputDogYears);
    function dogHuman() {
      let result = dogYears * 7;
      return result;
    }

    console.log(`Your dog is ${dogHuman()} years in human years.`);

    break;

  case 2:
    let inputHumanYears = prompt("Please input you age: ");
    let humanYears = parseInt(inputHumanYears);
    function humanDog() {
      let result = humanYears / 7;
      return result.toFixed(0);
    }

    console.log(`Your age in dog years is ${humanDog()}.`);

    break;

  default:
    console.log("Invalid entry! Please enter 1 or 2!");
    break;
}

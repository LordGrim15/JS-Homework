let maxCash = 1000;
let inputAmmount = prompt("Please input the ammount you want to withdraw: ");
let ammount = parseInt(inputAmmount);
function atm() {
  if (ammount > maxCash) {
    console.log(
      `You exceeded the ammount on your account! You only have ${maxCash} dollars!`
    );
  } else if (ammount <= maxCash) {
    let result = maxCash - ammount;
    console.log(`You withdraw ${ammount} dollars!`);
    console.log(`Your account is left with ${result} dollars!`);
  } else {
    console.log("Please use numbers!");
  }
}
console.log(atm());

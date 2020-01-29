let btnEqual = document.getElementById(`btnEqual`);
let backSpace = document.getElementById(`backSpace`);
let c = document.getElementById(`c`);
let input = document.getElementById(`input`);
let btns = document.getElementsByClassName(`btns`);
let btnsOperator = document.getElementsByClassName(`btnsOperator`);


function backSpaceee() {
    backSpacee = input.value.substring(0, input.value.length - 1);

    if (input.value === '') {
        input.value = '0';
    }
    input.value = backSpacee;
}

for (let i = 0; i < btns.length; i++) {
    let btns = document.getElementsByClassName(`btns`)[i];
    btns.addEventListener(`click`, function() {
        if (input.value[0] === '0') {
            input.value = btns.value;

        } else {
            input.value += btns.value;
        }
    });
}

c.addEventListener('click', function() {
    input.value = '';
    calculateArray = [];
})


let calculateArray = [];
for (let i = 0; i < btnsOperator.length; i++) {
    let btnsOperator = document.getElementsByClassName(`btnsOperator`)[i];
    btnsOperator.addEventListener(`click`, function() {
        if (calculateArray[calculateArray.length - 1] === `+` || calculateArray[calculateArray.length - 1] === `-` || calculateArray[calculateArray.length - 1] === `*` || calculateArray[calculateArray.length - 1] === `/` || calculateArray[calculateArray.length - 1] === `%`) {
            if (input.value === '') {
                calculateArray[calculateArray.length - 1] = btnsOperator.value;
            }
        } 
        if (input.value != '') {
            if (calculateArray.length === 1) {
                calculateArray.push(Number(input.value));
                input.value = ``;
                input.value += btnsOperator.value;
                calculateArray.push(input.value);
                input.value = ``;
            } else {
                calculateArray.push(Number(input.value));
                input.value = ``;
                input.value += btnsOperator.value;
                calculateArray.push(input.value);
                input.value = ``;
            }
        }
    });
}

backSpace.addEventListener("click", function() {
    backSpaceee();
});

btnEqual.addEventListener(`click`, function() {
    if (calculateArray.length === 1) {
        if (calculateArray[0] === 0) {
            input.value = ``;
        }
        return;
    }
    calculateArray.push(Number(input.value));
    input.value = ``;
    for (let i = 0; i < calculateArray.length; i++) {
        if (calculateArray[i] === "*") {
            let result = calculateArray[i - 1] * calculateArray[i + 1];
            calculateArray.splice(i, 2);
            calculateArray[i - 1] = result;
            i = i - 2;
        } else if (calculateArray[i] === "/") {
            let result = calculateArray[i - 1] / calculateArray[i + 1];
            calculateArray.splice(i, 2);
            calculateArray[i - 1] = result;
            i = i - 2;
        }
    }
    for (let i = 0; i < calculateArray.length; i++) {
        if (calculateArray[i] === "+") {
            let result = calculateArray[i - 1] + calculateArray[i + 1];
            calculateArray.splice(i, 2);
            calculateArray[i - 1] = result;
            i = i - 2;
        } else if (calculateArray[i] === "-") {
            let result = calculateArray[i - 1] - calculateArray[i + 1];
            calculateArray.splice(i, 2);
            calculateArray[i - 1] = result;
            i = i - 2;
        }
    }
    input.value = calculateArray[0];
    calculateArray = []
});
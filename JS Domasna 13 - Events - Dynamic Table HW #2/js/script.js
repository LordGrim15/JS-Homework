let rows = document.getElementById(`rows`);
let columns = document.getElementById(`columns`);
let btn = document.getElementById(`btn`);
let div = document.getElementById('div');
let counter1 = 1;
let counter2 = 1;



btn.addEventListener(`click`, function() {
    if (isNaN(columns.value + rows.value)) {
        alert(`Something went wrong.`);
    } else {
        div.innerHTML += `<table border="1px">
        <tbody id="tbody"></tbody>
        </table>`;
        let tbody = document.getElementById(`tbody`);
        let bodyChild = tbody.children;
        for (let i = 0; i < rows.value; i++) {
            tbody.innerHTML += `<tr></tr>`;
            for (let index = 0; index < columns.value; index++) {
                bodyChild[i].innerHTML += `<td>Row : ${counter1} Column : ${counter2}</td>`;
                counter2++;
            }
            counter1++;
            counter2 = 1;
        }
    }
});
const numberInput = document.getElementById('input-number');
const tableBody = document.getElementById('table-body');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', function () {
  const number = parseInt(numberInput.value);

  clearTable();

  generateTable(number);
});

function clearTable() {
  tableBody.innerHTML = '';
}

function generateTable(number) {
  for (let i = 1; i <= 10; i++) {
    const row = createRow(number, i);
    tableBody.appendChild(row);
  }
}

function createRow(number, i) {
  const cell1 = document.createElement('td');
  const cell2 = document.createElement('td');
  const cell3 = document.createElement('td');
  const cell4 = document.createElement('td');
  const cell5 = document.createElement('td');

  cell1.innerText = number;
  cell2.innerText = ' x ';
  cell3.innerText = i;
  cell4.innerText = ' = ';
  cell5.innerText = number * i;

  const row = document.createElement('tr');
  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  row.appendChild(cell5);

  return row;
}

const employeeData = [
  {
    id: 1001,
    name: 'Habiba Akter',
    position: 'Software Engineer',
    department: 'Engineering',
  },
  {
    id: 1002,
    name: 'Halima Akter',
    position: 'Product Manager',
    department: 'Product',
  },
  { id: 1003, name: 'Hafsa Akter', position: 'Designer', department: 'Design' },
  {
    id: 1004,
    name: 'Hasifa Akter',
    position: 'Data Scientist',
    department: 'Data',
  },
];

function createEmployeeRow(employee) {
  const cells = [];
  for (let i = 1; i <= 4; i++) {
    const cell = document.createElement('td');
    cell.className = 'border px-4 py-2';
    cells.push(cell);
  }

  cells[0].innerText = employee.id;
  cells[1].innerText = employee.name;
  cells[2].innerText = employee.position;
  cells[3].innerText = employee.department;

  const employeeRow = document.createElement('tr');
  employeeRow.className = 'hover:bg-gray-100';
  employeeRow.append(...cells);

  return employeeRow;
}

function renderEmployeeTable() {
  const tableBody = document.getElementById('employeeTableBody');

  for (let i = 0; i < employeeData.length; i++) {
    const employee = employeeData[i];
    const employeeRow = createEmployeeRow(employee);
    tableBody.appendChild(employeeRow);
  }
}

renderEmployeeTable();

function generateTable() {
    const name = document.getElementById('text').value;
    const employeeType = document.querySelector('input[name="radioInput"]:checked').value;
    const email = document.getElementById('email').value;
    const preference = document.getElementById('dropdown').value;
    const completedTraining = document.getElementById('checkbox').checked ? 'Yes' : 'No';
    const graduateYear = document.getElementById('number').value;

    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `<td>${name}</td><td>${employeeType}</td><td>${email}</td><td>${preference}</td><td>${completedTraining}</td><td>${graduateYear}</td>`;
}
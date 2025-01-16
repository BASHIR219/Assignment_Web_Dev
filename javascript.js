function addElement() {
    const name = document.getElementById('inputName').value;
    const type = document.getElementById('inputType').value;
    const required = document.getElementById('required').value;
    const label = document.getElementById('inputLabel').value;

    if (!name || !label) {
        alert('Please fill out all fields.');
        return;
    }

    const table = document.getElementById('elementsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${type}</td>
        <td>${required}</td>
        <td>${label}</td>
    `;

    document.getElementById('formBuilder').reset();
}

function downloadHTML() {
    let htmlContent = '<form>\n';
    const rows = document.getElementById('elementsTable').getElementsByTagName('tbody')[0].rows;

    for (let row of rows) {
        const name = row.cells[0].innerText;
        const type = row.cells[1].innerText;
        const required = row.cells[2].innerText === 'true' ? 'required' : '';
        const label = row.cells[3].innerText;

        htmlContent += `<label>${label}: <input type="${type}" name="${name}" ${required}></label><br>\n`;
    }

    htmlContent += '</form>';
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'form.html';
    link.click();
}

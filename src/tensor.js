// Generar y mostrar matrices
async function generateAndDisplayResults() {
    const rows = 3, cols = 3;

    const matrix1 = tf.randomUniform([rows, cols], 1, 20, 'int32');
    const matrix2 = tf.randomUniform([rows, cols], 1, 20, 'int32');

    const matrixSum = tf.add(matrix1, matrix2);
    const matrixMult = tf.matMul(matrix1, matrix2);

    const matrix1Array = await matrix1.array();
    const matrix2Array = await matrix2.array();
    const matrixSumArray = await matrixSum.array();
    const matrixMultArray = await matrixMult.array();

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
        <h2>Matriz 1</h2>
        ${generateTable(matrix1Array)}
        <h2>Matriz 2</h2>
        ${generateTable(matrix2Array)}
        <h2>Suma de Matrices</h2>
        ${generateTable(matrixSumArray)}
        <h2>Multiplicación de Matrices</h2>
        ${generateTable(matrixMultArray)}
    `;
}

function generateTable(matrix) {
    let tableHTML = '<table>';
    matrix.forEach(row => {
        tableHTML += '<tr>';
        row.forEach(value => {
            tableHTML += `<td>${value}</td>`;
        });
        tableHTML += '</tr>';
    });
    tableHTML += '</table>';
    return tableHTML;
}

document.getElementById('startButton').addEventListener('click', generateAndDisplayResults);
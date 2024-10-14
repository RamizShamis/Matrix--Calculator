
function createMatrices() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    
    const matricesContainer = document.getElementById('matricesContainer');
    matricesContainer.innerHTML = '';

    for (let i = 1; i <= 2; i++) {
        const matrixDiv = document.createElement('div');
        matrixDiv.className = 'matrix';
        matrixDiv.innerHTML = `<h3>Matrix ${i}</h3>`;
        
        for (let r = 0; r < rows; r++) {
            const rowDiv = document.createElement('div');
            for (let c = 0; c < cols; c++) {
                const input = document.createElement('input');
                input.type = 'number';
                input.dataset.row = r;
                input.dataset.col = c;
                input.dataset.matrix = i;
                rowDiv.appendChild(input);
            }
            matrixDiv.appendChild(rowDiv);
        }
        matricesContainer.appendChild(matrixDiv);
    }

    document.getElementById('addMatricesBtn').style.display = 'block';
}

function addMatrices() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';

    const matrix1 = [];
    const matrix2 = [];

    for (let i = 1; i <= 2; i++) {
        for (let r = 0; r < rows; r++) {
            if (!matrix1[r]) matrix1[r] = [];
            if (!matrix2[r]) matrix2[r] = [];
            for (let c = 0; c < cols; c++) {
                const inputValue = document.querySelector(`input[data-row='${r}'][data-col='${c}'][data-matrix='${i}']`).value;
                if (i === 1) {
                    matrix1[r][c] = parseInt(inputValue);
                } else {
                    matrix2[r][c] = parseInt(inputValue);
                }
            }
        }
    }

    const resultMatrix = [];
    for (let r = 0; r < rows; r++) {
        resultMatrix[r] = [];
        for (let c = 0; c < cols; c++) {
            resultMatrix[r][c] = matrix1[r][c] + matrix2[r][c];
        }
    }

    resultMatrix.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.textContent = row.join(' ');
        resultContainer.appendChild(rowDiv);
    });
}
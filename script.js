function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = '';
}

function calculateResult() {
    const input = document.getElementById("result").value;
    try {
        const result = eval(input); // Use eval cautiously; this is for learning purposes
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = 'Error';
    }
}

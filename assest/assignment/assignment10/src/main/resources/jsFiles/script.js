$(document).ready(function() {
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    $('.btn').click(function() {
        const value = $(this).val();
        if (!isNaN(value) || value === '.') {
            currentInput += value;
            $('#display').val(currentInput);
        } else if ($(this).hasClass('operator')) {
            if (currentInput === '') return;
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }
    });

    $('#equals').click(function() {
        if (currentInput === '' || previousInput === '') return;

        const result = calculate(previousInput, currentInput, operator);
        $('#display').val(result);
        currentInput = result;
        previousInput = '';
    });

    $('#clear').click(function() {
        currentInput = '';
        previousInput = '';
        operator = '';
        $('#display').val('');
    });

    function calculate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return 0;
        }
    }
});
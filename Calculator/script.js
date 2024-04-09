// $(selector).action();


function checkName() {
    var name = $('#name').val();

    // Check if the input is numeric
    if (!isNaN(name)) {
        $('#nameError').text('Please input your name');
        return false;
    }

    // Check if the input is a number with decimals
    var regex = /^[0-9]+(\.[0-9]+)?$/;
    if (regex.test(name)) {
        $('#nameError').text(' ');
        return true;
    } else {
        $('#nameError').text('Please input your number');
        return false;
    }
}


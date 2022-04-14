function compute() {
    //fetch principal amount
    var principal = document.getElementById("principal").value;
    var res_visible = true;
    //validate principal amount
    if (principal == '' || principal == ' ' || principal <= 0 || isNaN(principal)) {
        alert('Enter a positive number');
        document.getElementById("principal").focus();
        res_visible = false;
    }
    //show the result only if principal amount is valid
    if (res_visible) {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);
        var totalAmount = interest + principal;
        document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br/>at an interest rate of <mark>${rate}</mark>%.<br/>You will receive an amount of <mark>${totalAmount}</mark>,<br/>in the year <mark>${year}</mark>`;
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
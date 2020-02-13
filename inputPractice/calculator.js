function calc(){
    var a = parseFloat(document.querySelector("#num1").value);
    var b = parseFloat(document.querySelector("#num2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    if (op == "add") {
        calculate = a+b;
    } else if (op == "min"){
        calculate = a-b;
    } else if (op == "multiply"){
        calculate = a*b;
    } else if (op == "divide"){
        calculate = a/b;
    }

    document.querySelector("#result").innerHTML = calculate;
}
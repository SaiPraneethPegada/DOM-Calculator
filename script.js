function clearScreen() {
    document.getElementById("result").value = "";
}

function clearSingle() {
    let clear = document.getElementById("result").value;
    console.log(clear);
    let convert = clear.split("");
    convert.pop();
    console.log((document.getElementById("result").value = convert.join("")));
}

function display(value) {
    console.log((document.getElementById("result").value += value));
}

function displayNum() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    console.log((document.getElementById("result").value = q));
}

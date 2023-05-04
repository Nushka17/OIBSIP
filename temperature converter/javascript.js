function calTemp() {
    temp = parseInt(document.getElementById("number").value);
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    if (valueTemp == "cel") {
        output = (temp * (9 / 5) + 32)
        document.getElementById("answer").value = output;
    }

    else {
        output = ((temp - 32) * (5 / 9));
        document.getElementById("answer").value = output;
    }
}
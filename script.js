const display = (value) => {
    if (value >= 2 && value <= 8) {
        document.getElementById("result").value += value;
    } else {
        alert("Out of this range");
    }

};

const clear = () => {
    document.getElementById("result").value = "";
};

document.getElementById("clearbtn").addEventListener("click", clear);
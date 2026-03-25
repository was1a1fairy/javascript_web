
// 1
let inp1 = document.getElementById("inp1");
let btn1 = document.getElementById("btn1");

btn1.onclick = () => {
    alert(inp1.value);
    inp1.value = "";
}

// 2
let inp2 = document.getElementById("inp2");
let btn2 = document.getElementById("btn2");

btn2.onclick = () => {
    btn2.textContent = inp2.value;
    inp2.value = "";
}
// 3
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let list = document.getElementById("list");

btn3.onclick = () => {
    list.style.color = "red";

}
btn4.onclick = () => {
    list.style.color = "green";
}

// 1
let inp3 = document.getElementById("inp3");
let btn5 = document.getElementById("btn5");

btn5.onclick = () => {
    if (isNaN(inp3.value)) {
        alert("Вы ввели не число(");
    }
    else {
        alert(inp3.value**2);
    }
    inp1.value = "";
}

// 2
let inp4 = document.getElementById("inp4");
let inp5 = document.getElementById("inp5");
let btn6 = document.getElementById("btn6");

btn6.onclick = () => {
    let temp = inp4.value;
    inp4.value = inp5.value;
    inp5.value = temp;
}

// 3
let inp6 = document.getElementById("inp6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");

btn7.onclick = () => {
    inp6.disabled = 1;
    inp6.placeholder = "тут нельзя писать";
}

btn8.onclick = () => {
    inp6.disabled = 0;
    inp6.placeholder = "тут можно писать";
}

// 4

// 5
// 6
// 7
// 8
// 9
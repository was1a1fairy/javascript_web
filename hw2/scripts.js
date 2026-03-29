

// 1

let p = document.getElementsByClassName("p")[0]
let btn1 = document.getElementsByClassName("btn1")[0]

btn1.onclick = () => {
    if (p.innerText == "текст абзаца") {
        p.innerText = "другой"
        btn1.innerText = "вернуть"
    } else {
        p.innerText = "текст абзаца"
        btn1.innerText = "изменить"
    }
}

// 2
let inp1 = document.getElementById("inp1");
let btn2 = document.getElementById("btn2");

btn2.onclick = () => {
    inp1.value = "";
}

// 3

let inp2 = document.getElementsByClassName("inp2")[0];
let btn3 = document.getElementsByClassName("btn3")[0];
let text = document.createElement("p");

btn3.onclick = () => {
    text.innerText = inp2.value;
    inp2.value = "";
}

btn3.after(text);

// 4
let square = document.getElementsByClassName("square-purple")[0];
let btn4 = document.getElementsByClassName("btn4")[0];

btn4.onclick = () => {
    if (square.classList.contains("square-purple")){
        square.classList.replace("square-purple","square-pink");
    } else {square.classList.replace("square-pink","square-purple");}

}

// 5
let btn5 = document.getElementsByClassName("btn5")[0];
let ul = document.createElement("ul")

btn5.onclick = () => {
    for (let i=0; i<10; i++){
        let li = document.createElement("li");
        li.innerText = i + 1;
        if (i%2==0) {
            li.classList.add("light-yellow")
        }
        ul.append(li)
    }
}

btn5.after(ul);

// 6
let p1 = document.getElementsByClassName("text1")[0]
let btn6 = document.getElementsByClassName("btn6")[0]
const p_value = p1.innerText;

btn6.onclick = () => {
    if (p1.innerText == "") {
        p1.innerText = p_value;
        btn6.innerText = "удалить"
    } else {
        p1.innerText = "";
        btn6.innerText = "мяукнуть";
    }
}

// 7

let p2 = document.getElementsByClassName("text2")[0];
let btn7 = document.getElementsByClassName("btn7")[0];
let btn8 = document.getElementsByClassName("btn8")[0];

btn7.onclick = () => {
    let currentFontSize = parseInt(p2.style.fontSize) || 16;
    p2.style.fontSize = (currentFontSize - 1) + "px";
}

btn8.onclick = () => {
    let currentFontSize = parseInt(p2.style.fontSize) || 16;
    p2.style.fontSize = (currentFontSize + 1) + "px";
}


// 8
let img = document.getElementsByClassName("task8")[0]

img.addEventListener("mouseover", function() {
    img.setAttribute("src", "img2.jpg");
})
img.addEventListener("mouseout", function() {
    img.setAttribute("src", "img1.jpg");
})

// 9

// 10

// 11

// 12

// 13

// 14
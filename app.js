const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const nav = document.getElementById("nav-center");
const btn = document.getElementById("btn");
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");
const color = document.querySelector(".color");

btnTwo.addEventListener("click", () => {
    document.getElementById("btn-two").disabled = true;
    if (document.getElementById("btn-three").disabled) {
        document.getElementById("btn-three").disabled = false
    }

})



btnThree.addEventListener("click", () => {
    document.getElementById("btn-three").disabled = true;
    if (document.getElementById("btn-two").disabled) {
        document.getElementById("btn-two").disabled = false
    }
})

btn.addEventListener("click", function () {
    let hexCode = "#";
    for (var i = 0; i < 6; i++) {
        hexCode += colors[getRandom()]
    }
    document.body.style.backgroundColor = hexCode;
    if(document.getElementById("btn-two").disabled){
        document.getElementById("nav-center").style.backgroundColor = hexCode;
    }
    document.body.style.backgroundColor = hexCode;
    color.textContent = hexCode

})

function getRandom() {
    return Math.floor(Math.random() * colors.length);

}


&&
btn2.disabled &&
btn3.disabled &&
btn4.disabled &&
btn5.disabled &&
btn6.disabled &&
btn7.disabled &&
btn8.disabled &&
btn9.disabled
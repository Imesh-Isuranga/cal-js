const num1 =document.getElementById("1");
const num2 =document.getElementById("2");
const num3 =document.getElementById("3");
const num4 =document.getElementById("4");
const num5 =document.getElementById("5");
const num6 =document.getElementById("6");
const num7 =document.getElementById("7");
const num8 =document.getElementById("8");
const num9 =document.getElementById("9");
const num0 =document.getElementById("0");

const numequal =document.getElementById("=");
const numclear =document.getElementById("C");

const numtot =document.getElementById("+");
const nummin =document.getElementById("-");
const numtimes =document.getElementById("x");
const numdivide =document.getElementById("/");

const lbl = document.getElementById("lbl");

var number1 = 0;
var lbltxt = 0;
var operation = "";
var answer = 0;

num1.addEventListener("click",()=>{
    lbltxt = lbltxt*10+1;
    showLbltxt(lbltxt);
})
num2.addEventListener("click",()=>{
    lbltxt = lbltxt*10+2;
    showLbltxt(lbltxt);
})
num3.addEventListener("click",()=>{
    lbltxt = lbltxt*10+3;
    showLbltxt(lbltxt);
})
num4.addEventListener("click",()=>{
    lbltxt = lbltxt*10+4;
    showLbltxt(lbltxt);
})
num5.addEventListener("click",()=>{
    lbltxt = lbltxt*10+5;
    showLbltxt(lbltxt);
})
num6.addEventListener("click",()=>{
    lbltxt = lbltxt*10+6;
    showLbltxt(lbltxt);
})
num7.addEventListener("click",()=>{
    lbltxt = lbltxt*10+7;
    showLbltxt(lbltxt);
})
num8.addEventListener("click",()=>{
    lbltxt = lbltxt*10+8;
    showLbltxt(lbltxt);
})
num9.addEventListener("click",()=>{
    lbltxt = lbltxt*10+9;
    showLbltxt(lbltxt);
})
num0.addEventListener("click",()=>{
    lbltxt = lbltxt*10+0;
    showLbltxt(lbltxt);
})
numequal.addEventListener("click",()=>{
    if (operation=="+") {
        answer = parseInt(lbl.textContent) + number1;
        showLbltxt(answer);
    } else if(operation=="-"){
        answer = parseInt(lbl.textContent) - number1;
        showLbltxt(answer);
    }else if(operation=="x"){
        answer = parseInt(lbl.textContent) * number1;
        showLbltxt(answer);
    }else{
        answer = parseInt(lbl.textContent) / number1;
        showLbltxt(answer);
    }
})

numclear.addEventListener("click",()=>{
    lbltxt = "";
    showLbltxt(lbltxt);
})


numtot.addEventListener("click",()=>{
    number1 = parseInt(lbltxt);
    lbltxt = 0;
    showLbltxt(lbltxt);
    operation = "+";
})
nummin.addEventListener("click",()=>{
    number1 = parseInt(lbltxt);
    lbltxt = 0;
    showLbltxt(lbltxt);
    operation = "-";
})
numtimes.addEventListener("click",()=>{
    number1 = parseInt(lbltxt);
    lbltxt = 0;
    showLbltxt(lbltxt);
    operation = "x";
})
numdivide.addEventListener("click",()=>{
    number1 = parseInt(lbltxt);
    lbltxt = 0;
    showLbltxt(lbltxt);
    operation = "/";
})

function showLbltxt(text){
    lbl.textContent=text;
}

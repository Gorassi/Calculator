
const res_win = document.querySelector(".result_window")

const _1 = document.querySelector("#_1");
const _2 = document.querySelector("#_2");
const _3 = document.querySelector("#_3");
const _4 = document.querySelector("#_4");
const _5 = document.querySelector("#_5");
const _6 = document.querySelector("#_6");
const _7 = document.querySelector("#_7")
const _8 = document.querySelector("#_8")
const _9 = document.querySelector("#_9")
const _0 = document.querySelector("#_0")

const sign = document.querySelector("#_sign")
const point = document.querySelector("#point")
const backSpace = document.querySelector('#backSpace')
const clear = document.querySelector("#clear")

const change_img = document.querySelector('#change_img')

let my_plus = document.getElementById('myplus');
let _minus = document.getElementById('_minus');
let _myltiply = document.getElementById('_myltiply');
let _divide = document.getElementById('_divide');

let button_equals = document.getElementById('equals');

let temp_win = document.getElementById('temp_window');
let action_win = document.getElementById('action_window');
const num_2_window = document.getElementById('num_2_window');

let number_1 = 0;
let number_2 = 0;
let input_number='';
let action = 0;
let result = 0;
let crt_btn = 0;

clear.addEventListener('click', ()=> {
    number_1 = 0;
    number_2 = 0;
    input_number = '';
     result=0;
    action=0;
    res_win.innerHTML =input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);
    })

_1.addEventListener("click", function(){   
    input_number += 1;
    res_win.innerHTML = input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);});
_2.addEventListener("click", function(){ 
    input_number += 2;
    res_win.innerHTML = input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);});
_3.addEventListener("click", function(){   input_number += 3;
    res_win.innerHTML = input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);});
_4.addEventListener("click", function(){   input_number += 4;
    res_win.innerHTML = input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);});
_5.addEventListener("click", function(){   input_number += 5;
    res_win.innerHTML = input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);});
_6.addEventListener("click", function(){   input_number += 6;
    res_win.innerHTML = input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);});
_7.addEventListener("click", function(){   input_number += 7;
    res_win.innerHTML = input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);});
_8.addEventListener("click", function(){   input_number += 8;
    res_win.innerHTML = input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);});
_9.addEventListener("click", function(){   input_number += 9;
    res_win.innerHTML = input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);});
_0.addEventListener("click", function(){   input_number += 0;
    res_win.innerHTML = input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);});

point.addEventListener('click', ()=> {
    let str = input_number;
    if(str.indexOf('.') <= 0) input_number += '.';
    res_win.innerHTML = input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);
})
sign.addEventListener('click', ()=>{
    let str = input_number;
    let arr= str.split('');
    if(arr[0] !='-'){
        input_number='-'+ str;
    } else {
        input_number= input_number.slice(1);
    }
    res_win.innerHTML= input_number;
    if(++crt_btn == 6) document.body.appendChild(btn);
})
backSpace.addEventListener('click', ()=> {
    let str = res_win.innerHTML;
    str = str.substring(0, str.length - 1);
    if(str == '-') str = '';
    res_win.innerHTML = str;
    if(++crt_btn == 6) document.body.appendChild(btn);
})


my_plus.addEventListener('click', ()=>{
    number_1 = number_2;
    number_2 =  Number(input_number);
    input_number = '';        
    action = 'a';
    temp_win.innerHTML = number_1;
    action_win.innerHTML= action;
    num_2_window.innerHTML= number_2;
    res_win.innerHTML = number_2;
    if(++crt_btn == 6) document.body.appendChild(btn);
})

_minus.addEventListener('click', ()=>{
    number_1 = number_2;
    number_2 =  Number(input_number);
    input_number = '';
    res_win.innerHTML = number_2;
    action = 'b';
    temp_win.innerHTML = number_1;
    action_win.innerHTML= action;
    num_2_window.innerHTML= number_2;
    if(++crt_btn == 6) document.body.appendChild(btn);
})

_multiply.addEventListener('click', ()=>{
    number_1 = number_2;
    number_2 =  Number(input_number);
    input_number = '';
    res_win.innerHTML = number_2;
    action = 'c';
    temp_win.innerHTML = number_1;
    action_win.innerHTML= action;
    num_2_window.innerHTML= number_2;
    if(++crt_btn == 6) document.body.appendChild(btn);
})

_divide.addEventListener('click', ()=>{
    number_1 = number_2;
    number_2 =  Number(input_number);
    input_number = '';
    res_win.innerHTML = number_2;
    action = 'd';
    temp_win.innerHTML = number_1;
    action_win.innerHTML= action;
    num_2_window.innerHTML= number_2;
    if(++crt_btn == 6) document.body.appendChild(btn);
})

button_equals.addEventListener('click', ()=>{
    number_1 = number_2;
    number_2 =  Number(input_number);
    switch(action){
        case 'a': result = number_1 + number_2;
        break;
        case 'b': result = number_1 - number_2;
        break;
        case 'c': result = number_1*number_2;
        break;
case 'd': result = number_1/number_2;
    }

    temp_win.innerHTML = number_1;
    action_win.innerHTML= action;
    num_2_window.innerHTML= number_2;
    
    res_win.innerHTML = result;
    input_number = '';
    number_1 = 0;
    number_2 = 0;
    if(++crt_btn == 6) document.body.appendChild(btn);
})

let i = 2;

change_img.addEventListener('click', ()=>{
    if(i%2 == 0) {
        document.body.style.backgroundImage = 'url(GIF/color_lines.gif)';
    } else {
        document.body.style.backgroundImage = 'url(GIF/nature.gif)';
    }
    // document.body.style.background = 'aqua';
   i++;    
})

let btn = document.createElement('button');
btn.id = 'cm3';
btn.innerHTML = "Don't push !!!";
btn.style.position = 'absolute';
btn.style.margin = 'auto auto 50px -650px';
btn.style.width = '200px';
btn.style.transition = '1s';
btn.href='http://127.0.0.1:5500/Calculator/exp.html';
// btn.style.margin = "0 20px";
btn.onclick=function(){
    document.body.style.backgroundImage = 'url(GIF/explosion_2.gif)';
}






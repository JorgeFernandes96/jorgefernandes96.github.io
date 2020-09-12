console.log("Hello Word");
let myBox = document.getElementById('myBox1');
let myBox123 = document.getElementById('myBox2');
let myBox1234 = document.getElementById('myBox3');
$(document).ready(function(){
    let myBox1 = document.getElementById('myBox1');
    let myBox2 = document.getElementById('myBox2');
    let myBox3 = document.getElementById('myBox3');
    myBox1.classList.toggle('fade');
    myBox2.classList.toggle('fade');
    myBox3.classList.toggle('fade');
})
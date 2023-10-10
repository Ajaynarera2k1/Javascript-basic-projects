const inputSlider = document.querySelector("[data-lengthslider]");
const inputDisplay = document.querySelector("[data-lengthnumber]");
const passwordDisplay = document.querySelector("[data-passworddisplay]");
const copybtn     = document.querySelector("[data-copy]");
const copymsg = document.querySelector("[data-copymsg]");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#numbers");
const symbol = document.querySelector("#symbols");
const dataindicator = document.querySelector("[data-indicator]");
const generatebtn = document.querySelector(".generate-password");
const allcheckbox = document.querySelectorAll("input[type=checkboc]");

let password = "";
let passwordlength = 10;
let checkcount = 1;
// indicator color

const 

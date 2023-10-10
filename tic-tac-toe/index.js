const boxes = document.querySelectorAll(".box");
const gameinfo =document.querySelector(".player-info");
const newgamebutton = document.querySelector(".btn");

let currentplayer;
let gamegrid;

const winpositions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// function for game initialisation
function gameinit(){
    currentplayer = "x";
    gamegrid =["","","","","","","",""];
    newgamebutton.classList.remove("active");
    gameinfo.innerTEXT = `Current palyer-${ currentplayer }`;
    
}
gameinit();
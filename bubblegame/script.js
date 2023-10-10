let timer = 60;
let score = 0;
let hit ;

function createbabbal(){
    var clutter="";
    for(let i =0; i<=118; i++){
         let value = Math.floor(Math.random()*10);
        clutter +=`<div class="bubble">${value} </div>`;
    }
    document.querySelector("#pbtm").innerHTML=  clutter ;
}


function timerval(){
    let timer2 =  setInterval(()=> {
        document.querySelector("#timerval").textContent= timer;      

            if(timer>0){
                timer--;
            }
             else{
                document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
                clearInterval(timer2);
            }
      } ,1000)
}

function hitval(){
       hit =  Math.floor(Math.random()*10); 
      document.querySelector("#hitval").textContent = hit;
}

function increasescore(){
       score+=10;
       document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click",function(details){
                   let clickednum = Number(details.target.textContent);
                 if(clickednum === hit){
                    increasescore();
                    createbabbal();
                    hitval();
                 }
})

createbabbal();
timerval();
hitval();

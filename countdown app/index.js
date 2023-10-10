const enddate = "8 august 2023 2:29 PM";
 
// document.querySelector("#timing").innerText = enddate;
document.getElementById("timing").innerText = enddate;

const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(enddate);
    const now = new Date();
    const diff = ((end - now)/1000);

    if(diff<0){
        return;
    }
    // days
    inputs[0].value= Math.floor(diff/60/60/24);

    // hours
    inputs[1].value= Math.floor((diff/60/60)%24);

    // minutes
    inputs[2].value= Math.floor((diff/60)%60);

    // seconds
    inputs[3].value= Math.floor((diff)%60);
    
}

setInterval(() => {
      clock();
}, 1000);

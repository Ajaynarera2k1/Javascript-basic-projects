  function getcolor () {
        const Randomnumber = Math.floor( Math.random()*16777215);
        const Randomcode = "#" + Randomnumber.toString(16);
        document.body.style.backgroundColor = Randomcode;
        document.querySelector("#color").innerText  = Randomcode;
        //   16 is code to get hex code
        //  console.log(Randomcode);
         navigator.clipboard.writeText(Randomcode);
}

document.querySelector(".btn").addEventListener("click", getcolor);

// init call
 getcolor();
 
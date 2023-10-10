const countvalue = document.querySelector("#counter");

function increment() {
     let number =parseInt(countvalue.innerText);
     number = number + 1;
     countvalue.innerText = number;
};

 function decrement() {
      let number = parseInt(countvalue.innerText);
      number = number - 1;
      countvalue.innerText = number;
 };

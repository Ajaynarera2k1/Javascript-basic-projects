let form = document.querySelector("form");
let main= document.querySelector(".main");
// let btn = document.querySelector(".btn")
let clear = btn.querySelector(".clearall")

form.addEventListener("submit",(event) => {
      let name = event.target.uname.value;
      let email= event.target.email.value;
      let phone= event.target.phone.value;
      let checkstatus=0;

      let userdata = JSON.parse(localStorage.getItem("userdetails")) ?? [];

      for(let v of userdata){
        if(v.email==email || v.phone==phone){
            checkstatus=1;
            break;
        }
      }
      if(checkstatus==1){
        alert("phone number or email already exist");
      }

      else{
              userdata.push(
        {
            'name':name,
            'email':email,
            'phone':phone
        } )
        localStorage.setItem("userdetails",JSON.stringify(userdata))
        event.target.reset();
         displaydata();
        event.preventDefault();
      }

   
     

})
// displaying the data

let displaydata = () => {
    let userdata = JSON.parse(localStorage.getItem("userdetails"))?? [];
    let finaldata ='';
    userdata.forEach((element,i) => {
        finaldata+=`
       
        <div class="items">
            <span onclick="removedata(${i})">&times;</span>

            <h5>NAME</h5>
            <div>${element.name}</div>

            <h5>EMAIL</h5>
            <div>${element.email}</div>

            <h5>PHONE</h5>
            <div>${element.phone}</div>
             
            
        </div>      `
    });
       main.innerHTML= finaldata;
       console.log(finaldata);
   
    
}

// removing data
let removedata = (index) => {
    let userdata = JSON.parse(localStorage.getItem("userdetails"))?? [];
    userdata.splice(index,1);

    localStorage.setItem("userdetails",JSON.stringify(userdata));
    displaydata();


}
// clear all data
clearall.addEventListener("click", () => {
    localStorage.clear("userdetails");
    displaydata();
})
displaydata();



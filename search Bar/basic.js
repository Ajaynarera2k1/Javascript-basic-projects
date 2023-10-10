 const searchfun = () =>{
     let filter = document.getElementById("myinput").value.toUpperCase();
     let mytable = document.getElementById("mytable");

     myinput.addEventListners("input",function(){
        let raws = mytable.getElementsByTagName('tr');

        for (let i = 1; i <  raws.length; i++) {
            const td = raws[i].getElementsByTagName("td")[1];
    
            if (td) {
                const productNameText = td.textContent || td.innerText;
                if (productNameText.toUpperCase().indexOf(filter) > -1) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none";
                }
            }
        }
     })
     

 

 }

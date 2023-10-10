const search= ()=> {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.querySelector('.product-list');
    const product = document.querySelectorAll(".product");
    const pname= document.getElementsByTagName('h2')[0];
      for(let i=0; i<pname.length ; i++){
        

        let match = pname.textContent || pname.innerHTML;

        if(match){
            if(textvalue.toUpperCase().indexof(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    
    }
}


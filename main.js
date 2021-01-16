




const hide = document.getElementById('hide');
const show = document.getElementById('show');





function myFunction(){

    
    let x = document.getElementById("myInput");
    if(x.type === "password"){
        x.type = "text";
        hide.style.display =   "none"
        show.style.display = "inline-block"
       
    }else{
        x.type = "password";
        show.style.display =   "none"
        hide.style.display = "inline-block"
        
       
    }
   
}


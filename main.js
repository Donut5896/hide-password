
function myFunction(){

    
    let x = document.getElementById("myInput");
    if(x.type === "password"){
        x.type = "text";
        document.getElementById("hide").style.display = "inline-block";
        document.getElementById("show").style.display = "none";
    }else{
         document.getElementById("hide").style.display = "none";
        document.getElementById("show").style.display = "inline-block";
    }
}
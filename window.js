//fun to do things with window object


let h1 = document.querySelector("h1");
document.querySelector("body").style.backgroundColor = "cyan";


window.addEventListener("keydown",function(dets){
    
    if(dets.key == " "){
        h1.innerText = "Aapne daba diya hai !!!!\n\n\n\n\n\n\n\n\n     Space";
        h1.style.fontSize = "50px";
        
        
    }
    else{
        h1.textContent = dets.key;
    }
    
});
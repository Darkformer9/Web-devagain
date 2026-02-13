let a= document.createElement("div");
document.body.appendChild(a);
let box=document.createElement("div");
box.classList.add("box");
a.appendChild(box);
// box.textContent="Ka Ho Mangaroo";
 //   box.style.height="200px";
 
  //  box.style.width="200px"; 
 //   box.style.backgroundColor="blue";

 let si=setInterval(()=> {   // this will run the function after each 4 seconds or 4000millisecions 
    box.style.backgroundColor = "yellow";
    box.textContent = "I turned yellow at 4 seconds!";
    console.log("bar hua");
}, 4000);  
      

         // or

 /*let st=setTimeout(function() {         // the function will come in affect after 4000milliseconds annd 4 seconds
    box.style.backgroundColor = "yellow";            these both are the same just the
    box.textContent = "I turned yellow at 4 seconds!";
}, 4000);   */


clearInterval(si); // this will clear the time interval so the time interval function will not run after it


clearTimeout(st);  // this will clear the timeout in the same way


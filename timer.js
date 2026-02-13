let bar=document.querySelector("#bar");
let text=document.querySelector("#percent-text");
let progress = 0;


let download =setInterval(() => {

    progress++;



   // bar.style.background='linear gradient(to right,#be1515 ${progress}%, #be1515 ${progress}%)';
    bar.style.background = `linear-gradient(to right, #4caf50 ${progress}%, #ddd ${progress}%)`;
    
    //updating the text
    if(text){
   text.innerText =progress +"%";
   }


   if(progress >=100) {
    clearInterval(download);
    download.querySelector(`h4`).innerText="Download Completed.. !!!";

    
        
        // 3. Optional: Bar ka color change kar do finish hone par
        bar.style.background = "#0f0bec";
       bar.style.colour="white";

   }
     
},50 );
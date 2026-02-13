let pa=document.querySelector("p");
pa.style.fontSize="40px";
pa.addEventListener("click",function(){
    pa.style.color="green";    //now when we click on the paragraph the color will change to red
})
pa.addEventListener("dblclick",function(){
    pa.style.color="white";    //now when we double click on the paragraph the color will change to yellow
})
pa.append("This is a new text")
    pa.style.color="blue";
   //this will add the text at the end of the paragraph

// To remove the event listerner we hust have to use the same function that we used to add the event listener but 
// we have to use the name of the function instead of an anonymous function
// for examlple;
pa.removeEventListener("dblclick",function(){})   //this will remove the event listener for double click but it will not work because we are using an anonymous function


let inp=document.querySelector("input");
inp.style.border="4px solid skyblue";
inp.style.borderRadius="10px";
inp.style.height="40px";
inp.addEventListener("input",function(dets){
    if(dets.data !== null){  //check if the data is null means something is types ,not deleted thing will show up in the console
        console.log(dets.data);  //prints the caharacter in the console if the character is not null
        }
//this will log the value of the input field in the console
})



let select=document.querySelector("select");
let car=document.querySelector("#cars");
select.style.height="40px";
select.style.width="200px";
select.style.borderRadius="10px";
select.addEventListener("change",function(dets){
     document.querySelector("h3").textContent = `The selected car is ${dets.target.value}`; //now the h3 will tell which option is selected
    
})



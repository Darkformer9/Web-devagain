// DOM stands for Document Object Model
// It is a programming interface for web documents
// It represents the page so that programs can change the document structure, style, and content
//Matlab kisi webpage ke andar user ke interactions ko handle karne ke liye DOM ka use karta hai,aur  jo change hota hai use DOM manipulation kehte hai.
//  to access any element of a web page in js we use document objects selector
let a =12;
let h1 = document.querySelector("h1");
console.dir(h1);
console.log(h1);
h1.textContent="h1"; // now h1 have became an object and we can change its content using textContent property
h1.innerHTML="<i>The Test Text</i>"; // innerHTML se hum html tag bhi use kar sakte hai agar hume jarurat ho to
let link= document.querySelector("a");
link.setAttribute("href","https://www.google.com");// here we changed the href attribute to open youtube to open google.
  

 // jus  like it if you set it to getattribute then it will return the value of that attribute but it will not change it
 // and removeattribute will remove that attribute from the element.

 let he=document.createElement("p"); // createElement se hum new element create kar sakte hai
 he.textContent="this is a created element";
    document.body.appendChild(he); // appendChild se hum us element ko body me add kar sakte hai
    //  document.body.prepend(he); // prepend se hum us element ko body ke starting me add kar sakte hai matlab ye script ke just pahle add ho jayega

    // removeChild se hum kisi element ko remove kar sakte hai
    // replaceChild se hum kisi element ko replace kar sakte hai
    let im=document.createElement("img");
    im.setAttribute("src","https://images.unsplash.com/photo-1763935383619-fb4769a90321?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    im.setAttribute("alt","random image");  //or
     // document.createElement("img").setAttribute("alt","random image"); // we can also do like this but it will not work because createElement return a new element and setAttribute return undefined so we cannot chain them like this
    
    document.body.appendChild(im);

    //now we are changing the CSS styles from JS
   
   
    h1.style.color="blue"; // we can also change the style of an element using style property
    h1.style.backgroundColor="yellow";
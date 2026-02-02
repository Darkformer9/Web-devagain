console.log("ka ho mangaroo")
console.log("jai Shree Ram")
let a=24;
let b=a;//its a primitive data type so when we add something in b it doen't change the value of a
 b=b+2;
   
 c='rajesh';
d=c+'nahi';  // this is true for strings too
let ab=["Ram","Sita"];
let ac=ab;


function Ram() {
    console.log("Jai Shree Ram");  
}

// grading system
function getGradeScore(score){
    if(score>=90 && score<=100){
        return "A+";
    }
    else if(score>=75 &&score<=89){
        return "A";

    }
    else if(score>=60 &&score<=74){
        return "B";

    }
    else if(score>=50 &&score<=59) return "C"; // you can do it this style too its good if you don't want to write more lines but readability is not very good in this style

    
    else if(score>=33 &&score<=49){
        return "D";

    }
   else {
    return "Fail";
   }
}



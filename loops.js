// simple for loop to print jai Shree Ram 100 times with if else too
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("Hare Ram");
  } else {
    console.log("Jai Shree Ram");
  }
}
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let i = 20;
while (i >= 1) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i--;
}
// muyltiplication table of 5

let a = 1;
do {
  i = a * 5;
  console.log(i);
  a++;
} while (a <= 10);
//sum of numbers from 1 to 100
let b = 0;
let x = 1;
while (b <= 100) {
  i = i + b;
  b++;
}
console.log(x);

// numvbers divisible by 3 from 1 to 50
let y = 1;

while (y <= 50) {
  if (y % 3 == 0) {
    console.log(y);
  }
  y++;
}

//get a number from the user and check if its even or odd
a = prompt("enter a number from 1 to 50  ");
if (a % 2 == 0) {
  console.log(" the number " + a + " is a even number");
} else {
  console.log(" the number " + a + " is a odd number");
}

//count from 1 to 100 the number which are divisible by both 3 and 5
let count = 0;
let z = 1;
do {
  if (z % 3 == 0 && z % 5 == 0) {
    count = count + 1;
  }
  z++;
} while (z <= 100);
console.log(count);

// Functions
// 1.   The Normal Function

function Fanksan() {
  //and this is function declaration part and rthe name of function is Fanksan and the bracket just after Fanksan is where you can give some parameters too
  //in between curly braces you can perform some other functions too
  console.log("anything you want to print");
}
Fanction(); //this is how you can call the function whenever you want

// 2  The fat Arrow type function
let fat = () => {
  // this is how you can declare function in fat arrow function where the let is a datatype and fat is the function name
  // yaha pe wo likho jo aap perform karna chahte ho
  console.log("This arrow function");
};

// 3 aur dusra prakar ka function
let fank = function () {
  //its declared like this  fank is the name of the function
  console.log("Kyu nahi ho rahi padhai");
};
function jor(a, b) {
  //here we give values to the function a,b are called parameters
  //function jor(a="ram",b="sita"){
  // you can also set some default value if got no arguments
  console.log(`Jor${a} haisa ${b} bhai`); //backticks(``)are good if you don't want to do concatination
}
jor(lagake, Aman); // here lagake and Aman is arguements

function fun() {
  return 20; //we can return some statemets or values from a function and it will get saved in the same place from where it was called
}

let chaman = fun(); //here chaman stores the value of the function fun
console.log(chaman);

// A discount calculator by using  high order function (HOF)
function Disc(){
    a=prompt("Enter the Amount");
    return function(){
        b=prompt("Enter The Rate of Discount");
        c=b/100;
        c=c*a;
        a=a-c;
        console.log(`Amount Payble is: ${a} and the discounted value is ${c}`);
    }
}
Disc()();
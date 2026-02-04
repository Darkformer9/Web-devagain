//this is how you can initialize or declare a array
let a = [1, a, 2, 4];

console.log(a[1]); //this is how you can access and print the value
a.push(5); // this is how you can add something in the array and its add the element in the last
a.pop(); //if you want to remove something which is at the last of the array

a.shift(); //just in case you want to remove the object from the beginning
a.unshift(9); // to add an element at the beginning of the array element

// if you want to reverse the all elements you can use the reverse functionality of arrays
a.reverse();

//if you want to remove the "a "from the array given above you can use
a.splice(1, 1); //now it will start remving from 1 and you given 1 then it will remove only the element present at index 1  and element 1 is in the zero index
 //also you can add elements at any place in the array using the splice function
 a.splice(3,0,4,5); // here it will start from index 3 and remove 0 elements and add 4 and 5 at index 3 and 4 respectively

// if you want some of the elements in a sequence wise you can use slice and store the value in a different variable

b = a.slice(0, 2); //now this variable b will have three elements [1,a,2] but it will not remove the elements from the original array

//if your array has numbers and you want to sort them in ascending or descending order you can use sort function

let sa = a.sort(function (a, b) {
  // here the sorted array will be stored in variable sa, a and b is for comparison in sorting
  return b - a; //b-a will sort in descending order
  return a - b; //  a-b will sort the array in adcending order
});

// For-each it works in arrays

a.forEach(function (val) {
  //means each element of array a will perform some function utill the last array performs the function
  console.log(val); // the function each element will perform which is printing the values in the console
});

/*/map works on the same principal of the foreach loop and map is used when you want to make a new array on the basis of an existing array
    but returning something from the function is manadatory otherwise you will get undefined in the answer*/
letb = a.map(function (val) {
  return val + 2; // it will return the element value with 2 added in it.
});

/* filter also work on the same principal of map but it is used for the filtering the elements*/
let fa = a.filter(function (don) {
  if (a / 2 == 0)
    //it will check the element, if divisible by 2 then it will print otherwise it will skip and the values will be stored in the array fa.

    return true; //true if you want to get the element which satisfies the condition and false if you want to get the element which doesn't satisfies the condition.
});

let redu = a.reduce(function (accumulator, value) {
  return accumulator + val; //in reduce fuction all the elements are summed and added in the accumulator
}, 0);

let finda = a.find(function (val) {
  if (val === 2) return val;
}); // it will find the element which is equal to 2 and return that element otherwise undefined
console.log(finda);

//next

let somea = a.some(function (val) {
  return val > 10;
});
console.log(somea); // it will return true if any one of the element is greater than 10 otherwise false


//next
      let everya= a.every(function(val) {
         
         return val>10;
      }); 
      console.log(everya); // it will return true if all the elements are greater than 10 otherwise false



      destructuring in arrays
    
      let[x,,z]=a; // it will assign first element of array a to x and third element to z but it will skip the second element becuase of extra comma and no extra variable is assigned to it.
    console.log(x,z) //to print the values of x and z as saboot
      //by this way is uses the elements of array "a";;;;



      // to copy an array in a different array without changing the original array you can use spread operator
      let copya=[...a] //here the ... is the spread operator and you alreaady know that a is the original array
         console.log(copya)  //as a saboot to show that the array is copied in a different array without changing the original array



         










//  now we are here to discuss the object related things
let obj={       //this is object declaration the name of the object here is obj you can name it anything according to you
    Name:"Ram",   //these are the object elements where the Name is key and the "Ram" is value
    Age:"khud Jano",  //the value of key Age is "khud Jano"
    weapon: "dhanush",
}


//now the calling part from where you can use the object data or values
//and for this you have two ways
//first
  
obj.Name;  //by this we can access the value of name of object obj


//second way
obj["Name"] // to access the value of name




const Ram={   //now you will see the nesting in objects
    
    address:{    // this is the first key
        
        locations:{  // this is the second key inside the first key which is address
            lat:22.5,   //another key lat inside key locations
            log:23.45    //another key log inside key locations
        },
    },
};
console.log(Ram.address.locations.lat);
// let's assume a scenario in which you are not sure that the object key is present or not so for that we have a method called optional chaining
console.log(Ram?.address?.locations?.lat); // this will check whether the key is present or not if present then it will give the value otherwise it will give undefined without throwing any error
   //this a kind of thing you can use in your code to avoid errors basically it doen't avoid error but it doesn't throw error.



let aabject={   //now you will understand how loops work  in objects 
    name:"Ram",
    Age:26,
    Address: "mandir"
};
 for(let key in aabject){   // this is the for in loop which is used to iterate the object elements
     
     console.log(key,aabject[key]);
     
     }



    // if you want to copy all elements of aabject to new object then you can use this method
     
     let newObject=Object.assign({},aabject);
     console.log(newObject);

     // or
        let newObject2={...aabject};
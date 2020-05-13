// Implement a function which behaves like the uniq command in UNIX.

// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

// Example:

// ['a','a','b','b','c','a','b','c'] --> ['a','b','c','a','b','c']


let sequence = ['a','a','a','b','b','c','a','b','c'];
let duplicateFinder = (acc, value, index, array)=>{
   
    if(value !== array[index-1] || value === undefined){
        acc.push(value);
    }return acc;
         
    
    
   
        
    
    
};



let uniq = (seq) => {
    return seq.reduce(duplicateFinder, []);
}

 console.log(uniq(sequence));

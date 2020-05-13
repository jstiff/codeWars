// Implement a function which behaves like the uniq command in UNIX.

// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

// Example:

// ['a','a','b','b','c','a','b','c'] --> ['a','b','c','a','b','c']


let sequence = ['a','a','b','b','c','a','b','c'];
let duplicateFinder = (acc, elem)=>{
    if(acc.indexOf(elem)===-1){
        acc.push(elem);
    }
    return acc;

};

let uniq = (seq) => {
    return seq.reduce( duplicateFinder,[]);
}

let duplicateFree = uniq(sequence);
console.log(duplicateFree);
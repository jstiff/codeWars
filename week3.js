// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) = [1,3]

//******************** Version one **************************************** */

function arrayDiff(array1, array2) {
  let newArray = [];
  for (let elemA of array1) {
    if (!array2.includes(elemA)) {
      newArray.push(elemA);
    }
  }
  return newArray;
}
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

//******************  Version two ********************************/

function arrayDiff(array1, array2) {
  return array1.filter((x) => !array2.includes(x));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

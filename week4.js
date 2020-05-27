// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

//************************************************************************** */

function likes(names) {
  let test = names.length;
  switch (true) {
    case test === 0:
      return "no one likes this";
      break;
    case test === 1:
      return `${names[0]} likes this`;
      break;
    case test === 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case test === 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    case test > 3:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
      break;
  }
}

//*****************************************************************************

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.*/

function findNb(m) {
  let n = 1;
  let total = 1;
  while (total !== m) {
    if (m > total) {
      n += 1;
      total += n ** 3;
    } else if (m < total) {
      return -1;
    }
  }
  return n;
}
let answer = findNb(1071225); //should return 45
console.log(answer);

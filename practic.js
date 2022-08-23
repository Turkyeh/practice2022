// Q1:
// Write a function named createList that takes in an array of the current store intentory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate your grocery list based on the store's inventory.
//  If the item is available, add it to your list. Return the final list.


const createList = (availableItems) => {
  let arr = [];
  availableItems.forEach(function(e) {
    if (e.available) arr.push(e)
  });
  return arr;
}


//test code
let a = [{
    name: 'apples',
    available: true
  },
  {
    name: 'pears',
    available: true
  },
  {
    name: 'oranges',
    available: false
  },
  {
    name: 'bananas',
    available: true
  },
  {
    name: 'blueberries',
    available: false
  }
];
console.log(createList(a));



// Q2:
// Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

// For example: evenOdd([1,2,3]) returns ['odd','even','odd'].

let expe = /[0-9]/;
let max = [];

// arr = [10, 20, 30, 40, 50, 60, 70, 80, 99, 24, 55, 77];
arr = [1,null,2,3,4,5,6,7,8,10];

let state = arr.map(function (ele) {               //    if (isNaN(parseInt( ele))==false) {
    if (expe.test(ele) == true) {
        if (ele % 2 == 0) { max.push("even"); }
        else { max.push("odd"); }
    }
    else
        max.push("N/A");
}
);


console.log(max);


// Q3:
// Write a function named notInFirstArray that, given two arrays as input,
//  uses filter to return an array of all the elements in the second array that are not included in the first array.

// For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].

var filtered = [1, 2, 3, 4].filter(
    function(e) {
    return this.indexOf(e) < 0;
    },
    [1,2, 3]
);
console.log(filtered);




// Q4:
// Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

// Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.


function reverseString(string) {
    //convert the string to an array
    const array = string.split('');

    //use the reduce method to convert the array to a reversed string
    const reversedString = array.reduce((reversed, character) => {
        return character + reversed
    }, '')

    return reversedString;
}

console.log(reverseString("yasmenhjk"));




/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Q5:
// Write a function named isNum that takes in a string or number of any length.
// This function should use a regular expression pattern to return true if the input contains a number,
//  and false if the input does not contain a number.

// For example:
// 12345 returns true
// '12345' returns true
// 'h3llo world' returns true
// 'hello world' returns false


function isNum(params) {
    // let matrix=params.split*
    let reex = /\d/ig;
    let camdon = reex.test(params);
    return camdon;
    
}





console.log(isNum('hello world'));







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Q6:
// You have created a game application and begin by asking users an easy question: In which month is Halloween?

// Write a function named matchMonth which uses a regular expression pattern to match any of these
// inputs: October, Oct, october, oct

// If the user enters any of these four inputs, return true. For any other input, return false.



document.getElementById("register").onsubmit = function () {
    
    let aninpuert = document.getElementById("answer").value;

    let ans = /(October|Oct|october|oct)/ig;

    let validtest = ans.test(aninpuert);
    console.log(validtest);
    if (validtest === false) {
        return false;

    }



    return true;

}
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); 8
console.log(yearNeptuneDiscovered); 1846


//-------------------
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); //{ yearNeptuneDiscovered: 1846,    yearMarsDiscovered: 1659}
  



//-----------------------------
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Alejandro, green
  getUserData({firstName: "Melissa"}) //  Melissa, green
  getUserData({}) // ?\\ firstName(the answer is undefined because they did not define it), green





  //----------
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // maya
console.log(second); // marisa
console.log(third); // chi




//------------
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); //  "whiskers on kittens",
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//---------------------------
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]


//------------------------------
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
const{a,b} = obj.numbers




/* Write an ES2015 Version */

let arr = [1, 2];
let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// Write an ES2015 Version 
[arr[0], arr[1]] = [arr[1], arr[0]];


/*
raceResults()
{
first: the first element in the array
second: the second element in the array
third: the third element in the array
rest: all other elements in the array
Write a one line function to make this work using
An arrow function
Destructuring
‘Enhanced’ object assignment (same key/value shortcut)
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
}
/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/


let raceResults = array => {const raceresults = [first, second, third, ...rest]
}
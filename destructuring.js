//Object Destructuring 1:
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets);//8
// console.log(yearNeptuneDiscovered);//1846

//Object Destructuring 2:
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
// };

// let {numPlanets, ...discoveryYears} = planetFacts;
// console.log(discoveryYears);//{yearNeptuneDiscovered: 1659, yearMarsDiscovered: 1846 

//Object Destructuring 3:
// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
  
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
//   getUserData({firstName: "Melissa"}) // ?
//   getUserData({}) // ?
//   console.log(getUserData({}));//"Your name is undefined and you like green"

//Array Destructuring 1:
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // Maya
// console.log(second); // Marisa
// console.log(third); // Chi

//Array Destructuring 2:
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // Raindrops on roses
//   console.log(whiskers); // whiskers on kittens
//   console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//Array Destructuring 3:
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // [10,30,20]

//ES5 Assigning Variables to Object Properties ES 2015 version:
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const { numbers: {a,b}} = obj;

// console.log(a); //1
// console.log(b); //2

//ES5 Array Swap in ES2015 One-Line Array Swap with Destructuring Version:
let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

// console.log(arr); [0: 2, 1:1]

//raceResults():
// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])


//   {
//     first : "Tom",
//     second: "Margaret",
//     third: "Allison",
//     rest: ["David", "Pierre"]
//   }

const raceResults = (array) => ({first, second, third, ...rest} = array, {first, second, third, rest});
const finish = raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]);
// console.log(finish); //{"Tom", "Margaret", "Allison", "David", "Pierre"}
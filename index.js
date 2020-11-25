// Preliminaries
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}
for(var i = numbers.length - 1; i >= 0; i--){
    console.log(numbers[i])
}
var fruits = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// Bronze Medal
var array = []
for(var i = 0; i < numbers.length; i++){
    array.push(numbers[i])
    console.log(array)
}
var everyOtherFruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(var i = 0; i <everyOtherFruit.length; i+=2){
    console.log(everyOtherFruit[i])
}

// Silver Medal
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

  for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
  }
  nameArray = []
  for(var i = 0; i < peopleArray.length; i++){
    nameArray.push(peopleArray[i].name)
    console.log(nameArray)
  }
  occupationArray = []
  for(var i = 0; i < peopleArray.length; i++){
      occupationArray.push(peopleArray[i].occupation)
      console.log(occupationArray)
  }
  nameArray = []
  for(var i = 0; i < peopleArray.length; i+=2){
    nameArray.push(peopleArray[i].name)
    console.log(nameArray)
  } 
  occupationArray = []
  for(var i = 1; i < peopleArray.length; i+=2){
      occupationArray.push(peopleArray[i].occupation)
      console.log(occupationArray)
  }

  // Gold Medal - Nesting
// var zeroes = [0, 0, 0]
// newArray = []
// for (var i = 0; i < zeroes.length; i++){
//         newArray.push(zeroes[i])
//             for(var j = 0; j = newArray; j++){
//                 newArray.push(newArray[j])
//                 console.log(newArray)
//         }
// }
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  //answer
let createInstructor = (firstName, lastName) => { firstName, lastName};





var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"


//answer 
let favoriteNumber = 42;
let instructor = {
  firstName: "Colt",
[favoriteNumber]: "That is my favorite!"
}



/*const d = createAnimal("dog", "bark", "Woooof!")
//{species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"
*/
//answer
const d = {
species: "dog", 
bark() {
    return "Woof!"
}  
}

const s = {
 species: "sheep",
 bleet() { return 
    "BAAAAaaaa"}
}


//correct answer
function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }

var myPet = {
    species: "dog",
    name: "Dog1",
    legs: 4,
    friends: ["Dog2", "Dog3"]
};

function myFunction(myObj){
    return myObj;
}


console.log(myFunction(myPet));
module.exports = {myPet, myFunction};
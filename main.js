// 1. Creating a Lesson Plan(Using for loop )
// Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate 
// whether each lesson is running this year.
// Steps to Follow:
// 1. Create a blank array: Start by setting up an empty array named myWork that will hold 
// objects.
// 2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
// o Create an object representing a lesson.
// o Each lesson should have a name property, which is a string like "Lesson 1", 
// "Lesson 2", etc.
// o Each lesson should also have a status property, which alternates between true
// and false. This means "Lesson 1" will have status: true, "Lesson 2" will have 
// status: false, and so on.
// 3. Add the lesson to the array: Push each lesson object into the myWork array.
// 4. Print the result: Finally, log the myWork array to the console to see the list of lessons.
// Hints:
// • Use a ternary operator to set the status property based on whether the lesson number is 
// odd or even.
// • The modulo operator % can help determine if a number is even or odd.
// const myWork :  {name: string;  status: boolean} [] = []
// for(let i=1; i<=10; i++){
//     let lesson = {
//      name: `Lesson ${i}`,
//      status: i % 2 === 1 ? true : false 
//     }
//     if (i %2 ===1){
//         console.log("The lesson is odd");
//     }
//     else{
//         console.log("The lesson is even");
//     }
//     myWork.push(lesson)
// };
// console.log(myWork);
// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly 
// generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number 
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a 
// random number between 1 and the maximum value. Log this value to the console for 
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set 
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the 
// correct guess is made.
// 6. Check the user's guess: Inside the loop, check if the current guess matches the random 
// number. Provide feedback if the guess is too high or too low.
var maxVal = 6;
var randomNumber = Math.floor(Math.random() * maxVal) + 1;
console.log(randomNumber);
var numberArray = [1, 2, 3, 4, 5, 6];
var indexNumber = 0;
while (indexNumber < numberArray.length) {
    var currentGuess = numberArray[indexNumber];
    if (currentGuess === randomNumber) {
        console.log("Congratulation 🎉 you guessed the correct number");
    }
    else if (currentGuess < randomNumber) {
        console.log("Your Guess is too low! 😔");
    }
    else {
        console.log("Your Guess is too high! 😄");
    }
    indexNumber++;
}
// 3. Counter Incrementer (Using do while loop )
// Objective: Create a program that increments a counter by a specified step value using a 
// do...while loop and prints the counter value to the console until it reaches or exceeds 100.
// Steps to Follow:
// 1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
// 2. Create a variable, step, to increase your counter by: Define a variable step to hold 
// the value by which the counter will be incremented.
// 3. Add a do...while loop: In the loop, print the counter to the console and increment it by 
// the step amount each iteration.
// 4. Continue to loop until the counter is equal to or more than 100: The loop should run 
// as long as the counter is less than 100
// let  counter: number = 0;
// let step: number = 1;
// do {
//     console.log(counter);
//     counter += step
// }while(counter < 100);
// 4.Exploring Objects with for...in Loop
// Objective: Practice working with objects in TypeScript and iterating over their properties using 
// a for...in loop.
// Instructions:
// 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3, 
// each with corresponding string values.
// 2. Use a for...in loop to get properties' names and values from the object:
// o Iterate through the properties of myObject using a for...in loop.
// o Inside the loop, print each property's name and its corresponding value to the 
// console.
// let myObject = {
//     item1: "Watch⌚",
//     item2: "T shirt👕",
//     item3: "Shoes🩰",
// }
// for(let X in myObject){
//     console.log(`${X}: ${myObject[X]}`);
// }
// 5.Exploring Arrays with Loops(Using loop )
// Objective: Practice working with arrays in TypeScript and using for loops and for...of loops 
// to iterate through array elements.
// Instructions:
// 1. Create an empty array:
// o Define an empty array called myArray.
// 2. Run a loop 10 times, adding a new incrementing value to the array:
// o Use a for loop to iterate 10 times.
// o In each iteration, add a new incrementing value (starting from 1) to the myArray.
// 3. Log the array into the console:
// o After populating the array, log the myArray into the console.
// 4. Use the for loop to iterate through the array:
// o Use a for loop to iterate through the array elements.
// o Adjust the number of iterations based on the number of values in the array.
// o Output each array element along with its index into the console.
// Use the for...of loop to output the value into the console from the array:
// o Use a for...of loop to iterate through the array elements.
// o Output each array element directly into the console.
// const myArray : number[]= []
// for(let i=1; i<= 10; i++){
//     myArray.push(i)
// }
// console.log(myArray);
// for(let i=0; i<myArray.length; i++){
//     console.log(`Index:  ${i}, Value: ${myArray[i]}`);
// }
// for(let x of myArray ){
//     console.log(`Value: ${x}`);
// }

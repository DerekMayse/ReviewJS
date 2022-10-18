console.log("Hello World!")

//All About Me
//In your JavaScript file, declare and assign the following variables with information about yourself:
//firstName should hold a string of your first name
//lastName should hold a string of your last name
//age should hold a number of your age
//likesTravel should hold a boolean representing whether or not you like to travel
//Log each variable to the console.

let firstName = ("Derek")
let lastName = ("Mayse")
fullName = `${firstName} ${lastName}`
let age = 29    
let likesTravel = true
console.log ("My name is", fullName, ".", "I am", age, "years old. Do I like to travel?", likesTravel)


//1. Today's weather
//In your JavaScript file, instantiate and assign the following variables with information about the current weather:
//temperature should hold a number representing the current temperature in Fahrenheit
//conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).
//sunriseTime should hold a string representing what time the sun rose this morning
//sunsetTime should hold a string representing what time the sun will set this evening
//Log each variable to the console.
//Use string template literals to combine these variables into
// a sentence about the weather. 
//(Example: "It's currently sunny and 55 degrees.
// The sun rose this morning at 7:34 AM and will set at 5:09 PM.")

let temperature = 48 
let conditions = ("dark" )
let sunriseTime = ("7:34")  
let sunsetTime = ("5:09")

console.log(`It's currently ${conditions} and ${temperature} degrees.
The sun rose this morning at ${sunriseTime} AM and will set at ${sunsetTime} PM.`)

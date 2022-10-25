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


//Favorite Movies
//In your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
//Log each movie in the array to the console.

let movieArray = ['Donnie Darko', 'Scott Pilgrim', 'Rocky Horror']
console.log(movieArray[0])
console.log(movieArray[1])
console.log(movieArray[2])

//All About Me Pt. 2
//Instead of storing the data from your first lightning exercise in separate variables, 
//store them in an object. Your object should have a property of firstName, lastName, age, likesToTravel. 
//It should also have a property called favoriteMovies, which should hold the array of your favorite movies you
 //created in the last lightning exercise.

let meObject = {
    firstName :"Derek",
    lastName :"Mayse",
    age :29,
    likesTravel : true,
    favoriteMovies : ['Donnie Darko', 'Scott Pilgrim', 'Rocky Horror']
}

console.log (meObject.firstName, meObject.lastName,
     meObject.age,"likes to travel?", meObject.likesTravel, meObject.favoriteMovies)




//2. Weather Object
//In your JavaScript file, create an object that represents the current weather.
 //Your can reuse your data from the first exercise. Your object should have the following properties:

//temperature
//conditions
//Log the current temperature to the console.

//Use string template literals to log a sentence about the weather console. (Example: "It's 64 degrees F and sunny.")

let weatherObject = {
    temperature : 69,
    conditions : "cloudy"
}

console.log(`It's ${weatherObject.temperature} degrees and ${weatherObject.conditions}.`)



//Nested Weather Objects
//Refactor your weather object to include today's high and low temperature and sunrise/ sunset times. Now your object should look something like this:

//let todaysWeather = {
 // temperature: {
  //  high: 55,
  //  low: 32
 // },
 // conditions: "sunny",
 // astronomy: {
  //  sunrise: "7:43 AM",
 //   sunset: "5:09 PM"
 // }
// }
//Log today's high temperature to the console.
//Log today's low temperature to the console.
//Log today's conditions to the console.
//Log today's sunrise time to the console.
//Use string template literals to create a more detailed description of today's weather.

let todaysWeather= {

    temperature: {
    high: 66,
    low: 45,
    },
    
    conditions: "cloudy",

    astronomy: {
    sunrise: "7:33am",
    sunset: "7:42pm"
    }

    

};

console.log(todaysWeather.temperature.high,
  todaysWeather.temperature.low, todaysWeather.astronomy.sunrise, todaysWeather.conditions)
 
  console.log( `The weather conditions for today is ${todaysWeather.conditions} with a high tempature of ${todaysWeather.temperature.high}
  degrees and a low of ${todaysWeather.temperature.low}. Sunrise will be at ${todaysWeather.astronomy.sunrise} and the sun will set
  at ${todaysWeather.astronomy.sunset}.` )


  //Weather Forecast
 // Copy and paste the following array into your JavaScript file
  
  let weatherForecast = [
   {
    day: "Today",
    temperature: {
      high: 55,
      low: 32
    },
    conditions: "sunny",
    astronomy: {
      sunrise: "7:43 AM",
      sunset: "5:09 PM"
    }
   },
   {
    day: "Saturday",
    temperature: {
      high: 50,
      low: 29
     },
    conditions: "cloudy",
    astronomy: {
      sunrise: "7:44 AM",
      sunset: "5:08 PM"
    }
   },
   {
    day: "Sunday",
    temperature: {
      high: 47,
      low: 35
     },
    conditions: "chance of rain",
    astronomy: {
      sunrise: "7:45 AM",
      sunset: "5:07 PM"
    }
   }
  ]
  //Log today's weather conditions to the console.
  //Log Saturday's high temperature to the console.
  //Log Saturday's sunrise time to the console.
  //Log Sunday's conditions to the console.
 // Log Sunday's sunset time to the console.
 // Use string template literals to build few sentences about the weather forecast for Sunday.
 // (Example: "The high on Sunday will be 47 and the low will be 35. We're predicting a 
 //chance of rain. The sun will rise at 7:45 AM and set at 5:07 PM.")

 

 console.log(weatherForecast[0].conditions)
 console.log(weatherForecast[1].temperature.high)
 console.log(weatherForecast[1].astronomy.sunrise)
 console.log(weatherForecast[2].conditions)
 console.log(weatherForecast[2].astronomy.sunset)
 console.log(`The high on Sunday will be ${weatherForecast[2].temperature.high} and the low will be ${weatherForecast[2].temperature.low}.
  We're predicting ${weatherForecast[2].conditions}. The sun will rise at ${weatherForecast[2].astronomy.sunrise} and
   set at ${weatherForecast[2].astronomy.sunset}.`)

  
  
// Student Grades
//In your JavaScript file, copy and paste the following array:


let williamGrades = [62, 97, 99, 85, 73, 97];
//Print the first grade in the array to the console.
//Print the last grade in the array to the console.
//Use JavaScript to find William's average grade.

console.log (williamGrades[0])
console.log (williamGrades[5])

function findAverage(array){
    let average = 0;
   for (let i = 0; i < array.length; i++){
    let currentNum = array[i]
    average += currentNum;
   }
   average = average / array.length
   return average
}

console.log(findAverage(williamGrades))




//6. Movie Star
//In your JavaScript file, create an object that represents a famous movie star.
// Your object should have the following properties:

//firstName
//lastName
//age
//favoriteFood
//Log the movie star's favorite food to the console.

//Use string template literals to log their full name to the console.

//Use string template literals to log a sentence
// or two about your movie star to the console.
 // (Example: "Dwayne The Rock Johnson is 46 years old. His favorite food is raw meat.")

 let movieStarObject = {
  firstName: "Dwayne",
  lastName: "Johnson",
  age : 46,
  favoriteFood: "raw meat"

 };

 console.log (movieStarObject.firstName, movieStarObject.lastName,
  movieStarObject.age,  movieStarObject.favoriteFood);

  console.log(`${movieStarObject.firstName} The Rock ${movieStarObject.lastName} is 
  ${movieStarObject.age} years old. His favorite food is ${movieStarObject.favoriteFood}.`)

 // Refactor your movie star object to add their hobbies.
 //  Now your object should look something like this:

let dwayneObject = {
  firstName: "Dwayne",
  lastName: "Johnson",
  favoriteFood: "Eggs",
  hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building incredible muscle mass"]
}
//Log each one of their hobbies individually to the console.
//Use string template literals to create a sentence about their 
//hobbies. You should include how many hobbies they have in your sentence.
 //(Hint: use the .length property.) Example output:
 // "They have three main hobbies: jumping out of planes,
 //  personally holding the San Andreas fault together, and building muscle
  // mass.") Store your new setnence in a variable called hobbiesSentence then log it to the console.

  console.log(dwayneObject.hobbies[0],
    dwayneObject.hobbies[1],
    dwayneObject.hobbies[2])

    let hobbiesSentence = `They have ${dwayneObject.hobbies.length} main hobbies: ${dwayneObject.hobbies[0]},
      ${dwayneObject.hobbies[1]}, and ${dwayneObject.hobbies[2]}.`

console.log(hobbiesSentence)






//Challenge
//Weather Data
//Here's some real data from the Yahoo Weather API:

let weatherData = {
  "query": {
   "count": 1,
   "created": "2018-12-06T20:52:22Z",
   "lang": "en-US",
   "results": {
    "channel": {
     "units": {
      "distance": "mi",
      "pressure": "in",
      "speed": "mph",
      "temperature": "F"
     },
     "title": "Yahoo! Weather - Nome, AK, US",
     "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
     "description": "Yahoo! Weather for Nome, AK, US",
     "language": "en-us",
     "lastBuildDate": "Thu, 06 Dec 2018 11:52 AM AKST",
     "ttl": "60",
     "location": {
      "city": "Nome",
      "country": "United States",
      "region": " AK"
     },
     "wind": {
      "chill": "14",
      "direction": "68",
      "speed": "36"
     },
     "atmosphere": {
      "humidity": "90",
      "pressure": "989.0",
      "rising": "0",
      "visibility": "11.0"
     },
     "astronomy": {
      "sunrise": "11:38 am",
      "sunset": "4:7 pm"
     },
     "image": {
      "title": "Yahoo! Weather",
      "width": "142",
      "height": "18",
      "link": "http://weather.yahoo.com",
      "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
     },
     "item": {
      "title": "Conditions for Nome, AK, US at 11:00 AM AKST",
      "lat": "64.499474",
      "long": "-165.405792",
      "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
      "pubDate": "Thu, 06 Dec 2018 11:00 AM AKST",
      "condition": {
       "code": "15",
       "date": "Thu, 06 Dec 2018 11:00 AM AKST",
       "temp": "28",
       "text": "Blowing Snow"
      },
      "forecast": [
       {
        "code": "16",
        "date": "06 Dec 2018",
        "day": "Thu",
        "high": "29",
        "low": "25",
        "text": "Snow"
       },
       {
        "code": "26",
        "date": "07 Dec 2018",
        "day": "Fri",
        "high": "27",
        "low": "22",
        "text": "Cloudy"
       },
       {
        "code": "28",
        "date": "08 Dec 2018",
        "day": "Sat",
        "high": "22",
        "low": "8",
        "text": "Mostly Cloudy"
       },
       {
        "code": "34",
        "date": "09 Dec 2018",
        "day": "Sun",
        "high": "7",
        "low": "-11",
        "text": "Mostly Sunny"
       },
       {
        "code": "28",
        "date": "10 Dec 2018",
        "day": "Mon",
        "high": "3",
        "low": "-11",
        "text": "Mostly Cloudy"
       },
       {
        "code": "28",
        "date": "11 Dec 2018",
        "day": "Tue",
        "high": "10",
        "low": "2",
        "text": "Mostly Cloudy"
       },
       {
        "code": "26",
        "date": "12 Dec 2018",
        "day": "Wed",
        "high": "9",
        "low": "5",
        "text": "Cloudy"
       },
       {
        "code": "28",
        "date": "13 Dec 2018",
        "day": "Thu",
        "high": "14",
        "low": "8",
        "text": "Mostly Cloudy"
       },
       {
        "code": "30",
        "date": "14 Dec 2018",
        "day": "Fri",
        "high": "13",
        "low": "-3",
        "text": "Partly Cloudy"
       },
       {
        "code": "30",
        "date": "15 Dec 2018",
        "day": "Sat",
        "high": "7",
        "low": "-3",
        "text": "Partly Cloudy"
       }
      ],
      "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/15.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Blowing Snow\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Snow. High: 29Low: 25\n<BR /> Fri - Cloudy. High: 27Low: 22\n<BR /> Sat - Mostly Cloudy. High: 22Low: 8\n<BR /> Sun - Mostly Sunny. High: 7Low: -11\n<BR /> Mon - Mostly Cloudy. High: 3Low: -11\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
      "guid": {
       "isPermaLink": "false"
      }
     }
    }
   }
  }
 }
//You'll need to use bracket notation to mine into this object because the keys are strings.

//Use JavaScript to answer the following questions and log your answers to the console.

//What time was sunrise this morning in Nome, AK?
//What was the wind chill in Nome, AK when this data was generated?
//What was the visibility?
//What will be the high on Saturday the 8th?
//Use string template literals to build a sentence about the weather
// forecast for Saturday, Dec 15. 
//(Example: "Saturday, December 15 will be Partly Cloudy with a high of 7 and a low of -3".)
//In the data, "Partly Cloudy" is capitalized,
// but in our sentence that doesn't really make sense. 
//Look up the method to convert a string to lowercase.
//What is the average forecasted high temperature for the next seven days?


console.log(weatherData['query']['results']['channel']['astronomy']['sunrise'])
console.log(weatherData['query']['results']['channel']['wind']['chill'])
console.log(weatherData['query']['results']['channel']['atmosphere']['visibility'])
console.log(weatherData['query']['results']['channel']['item']['forecast'][2]['high'])
console.log(`${weatherData['query']['results']['channel']['item']['forecast'][9]['day']},
${weatherData['query']['results']['channel']['item']['forecast'][9]['date']} will be 
${weatherData['query']['results']['channel']['item']['forecast'][9]['text'].toLowerCase()}
 with a high of ${weatherData['query']['results']['channel']['item']['forecast'][9]['high']}
  and a low of${weatherData['query']['results']['channel']['item']['forecast'][9]['low']}. `)
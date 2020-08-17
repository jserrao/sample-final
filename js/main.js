// (req 'request' -> that's when you ask for the data)
// Request: https://official-joke-api.appspot.com/jokes/programming/ten
//
// (res 'response' -> that's the data your API is giving back to you)
// Response: JSON -> array of objects (the most common response from an API endpoint)
//
// Request - base URL (get this from documentation)
// Endpoint - a different collection of data being made available
const officialJokeRes = [
  {
      "id": 72,
      "type": "programming",
      "setup": "I was gonna tell you a joke about UDP...",
      "punchline": "...but you might not get it."
  },
  {
      "id": 18,
      "type": "programming",
      "setup": "Why did the programmer quit his job?",
      "punchline": "Because he didn't get arrays."
  },
  {
      "id": 35,
      "type": "programming",
      "setup": "Why do Java programmers wear glasses?",
      "punchline": "Because they don't C#"
  },
  {
      "id": 377,
      "type": "programming",
      "setup": "Knock-knock.",
      "punchline": "A race condition. Who is there?"
  },
  {
      "id": 33,
      "type": "programming",
      "setup": "Which song would an exception sing?",
      "punchline": "Can't catch me - Avicii"
  },
  {
      "id": 28,
      "type": "programming",
      "setup": "To understand what recursion is...",
      "punchline": "You must first understand what recursion is"
  },
  {
      "id": 25,
      "type": "programming",
      "setup": "How many programmers does it take to change a lightbulb?",
      "punchline": "None that's a hardware problem"
  },
  {
      "id": 23,
      "type": "programming",
      "setup": "Why do programmers always mix up Halloween and Christmas?",
      "punchline": "Because Oct 31 == Dec 25"
  },
  {
      "id": 26,
      "type": "programming",
      "setup": "If you put a million monkeys at a million keyboards, one of them will eventually write a Java program",
      "punchline": "the rest of them will write Perl"
  },
  {
      "id": 74,
      "type": "programming",
      "setup": "Why do C# and Java developers keep breaking their keyboards?",
      "punchline": "Because they use a strongly typed language."
  }
]
console.log(officialJokeRes)

/**
 * Form capture
 * 
 * 1- Go into our DOM and get the form element itself
 * 2- Element and add an eventListener onto it (submit)
 * 3- Stop the event from occurring (default action) - propagation
 * 4- Get .value from the input (property of input form elements)
 * 5- Clean up the data you get! Protect your program!!!!!! Security
 * 
 */
const jokeForm = document.getElementById('test-forms')

jokeForm.addEventListener('submit', async function(evt) {
  evt.preventDefault()

  // How do we get the data?
  const userData = document.getElementById('joke-count').value
  userData.trim() // trim method to take away excess whitespace
  // const userDataTypecast = Number(userData)// typecasting - where you take one type and turn it into another

  if (userData === 'ten') {
    // Fetch our data in here
    const response = await fetch('https://official-joke-api.appspot.com/jokes/' + userData)
    const jokeData = await response.json()
    
    // Our array - tem items
    // each item has an index -> 0,1,2,3,4,5,6,7,8,9 (ten total items)

    // Run program does something...
    // To deal with an array, we use a loop!
    // for loop contains: 1) counter, 2) condition, 3) iterator
    // Old school loop
    for(let count = 0; count < jokeData.length; count++) {

      // How would you get a bunch of list items on the page?????
      // 1 - create an element (.createElement method, feed a string into the method)
      // 2 - add content to that element (.innerText property) + concatenation
      // 3 - put that element back into the DOM (.appendChild() method wants an object)

      // How do we get rid of the old values?
      // Loop through old result li, ???
      
      const newEl = document.createElement("li")
      newEl.innerText = "Joke setup: " + jokeData[count].setup + " Joke punchline: " + jokeData[count].punchline
      document.getElementById('joke-response').appendChild(newEl)

    }
  }

  // Error handling
  else {
    const newError = document.createElement("li")
    newError.innerText = "This API is lame - you must literally write 'ten'"
    document.getElementById('joke-response').appendChild(newError)
  }
})





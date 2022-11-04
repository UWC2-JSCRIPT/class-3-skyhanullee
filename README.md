[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9165828&assignment_repo_type=AssignmentRepo)

In-Class Exercises
Battle Game
1. Create attack function. This will take the following parameters:

attackingPlayer
defendingPlayer
baseDamage
variableDamage
2. Create player1 and player2 objects.  Each should have a name property of your choosing, and health property equal to 10.

3. Refactor attack function to an arrow function. Comment out function above.

Itemized Receipt
1. Create function logReceipt that accepts menu items (1 or many) as objects with these properties: {descr, price} (i.e. {descr: 'Coke', price: 1.99})

Function should log each item to the console, and log a total price.

Spaceships
1. Create a class function SpaceShip
 - should set two properties: name and topSpeed
 - should have a method accelerate that logs to the console `${name} moving to ${topSpeed}`

2. Construct two ships, and call accelerate on both of them.

Additional Homework Items
Get the phone number (functions, regular expressions, arrays, objects)
You are given a phone number, with one of the following formats (but you don't know which one!)

'(206) 333-4444'
'206-333-4444'
'206 333 4444'
Create a function testPhoneNumber that takes in a phoneNumber string in one of the above formats.  Test the phone number using the regex testLinks to an external site. method to determine if it is a valid format.
Return the result of the test method (true if it is a valid phone number, false if not)
Create a function parsePhoneNumber that takes in a phoneNumber string in one of the above formats.  Use a regular expression method (try execLinks to an external site.) with capturing groups to extract the area code and remaining 7 digit phone number as strings.
This function will return an object in the format { areaCode: '206', phoneNumber: '2223333' }
Hints:

Regex exec function will return an array.  The first item in the array will be the full match, the remaining items will be the matching groups
Soccer Standings (functions, strings, arrays, objects)
Create a function getTotalPoints that accepts a results string with ‘w’ for a win, ‘l’ for a loss, ‘d’ for a draw.  i.e. this could be passed in for the Sounders July results: “wddwww”
This function will calculate the total number of points for a team (add 3 for each win, 1 for each tie, 0 for each loss).  I have provided a getPointsFromResult function to help you with this, you can call this method for each result.
Complete orderResults function.  This accepts unlimited team objects { name, results }, and logs the team name & points
Wrap everything in an IIFE to keep the variables out of the global scope
Sample output from 

Hints:

Use string.split to convert a string to an array (use an empty string to separate every single character).  So 'wwld'.split('') will give you ['w', 'w', 'l', 'd']
Use array.forEach with a function to get the number of points from a result and add to the running total
Use arguments variable in orderResults function to get all of the arguments.
Use Array.from(arguments) to convert the arguments object to an array
Use forEach method to run a function on each item in the array

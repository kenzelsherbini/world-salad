// Prompt the user for their name and age
let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");
console.log(userName);
console.log(userAge);

// Display a greeting message
let myStory = `Hello ${userName}, How are you doing today? How does it feel to be ${userAge} years old?`;
console.log(myStory);

// Prompt the user to fill in the blanks for the story
let bestFriend = prompt("Who is your best friend?");
let country = prompt("Which country are you visiting?");
let stuffBought = prompt("What did you shop for?");
let dreamCar = prompt("What is your dream car?");
let bugScaredOf = prompt("What bug are you most scared of?");
let greeting = prompt("What greeting does the bellman give?");
let viewBeautiful = prompt("What beautiful view do you see?");
let typeOfFlip = prompt("What type of flip is the bellman doing?");
let defenseItem = prompt("What item do you grab for defense?");
let bugBodyPart = prompt("What body part of the bug is moving?");
let crazyPeopleSaying = prompt("What do you say to crazy people?");
let dreamCountry = prompt("What is your dream country?");

// Create the story with user inputs
let story = `
The wait was finally over! You're going on your long-awaited vacation with ${bestFriend}. 
You're about to board your flight to ${country}. The day before, you went shopping for ${stuffBought}, 
and you were too excited to go with your best friend. When you finally arrive in ${country}, 
you have to take a trip in ${dreamCar} to the hotel. Upon arriving there, the bellman greets you, 
but you notice there's something off with his face. You realize he's half ${bugScaredOf}! 
You tell your friend but they ignore it. The bellman acts completely normal, greeting you with "${greeting}." 
You keep telling your friend, but they insist it's jet lag. As the night goes on, and the bellman drops your suitcases 
in your room, you go to look out at the ${viewBeautiful} but notice something. The bellman is doing a ${typeOfFlip} 
on the balcony next to you! You go to get a ${defenseItem} to protect yourself and your friend who is sleeping, 
and he waves his ${bugBodyPart} at you, smiling. Terrified, you throw the ${defenseItem} across the balcony but hit the wall. 
Your friend jolts awake and asks what happened. You point outside, shaking: 
"The bellman—he was flipping, smiling, and... he's part bug!" 
Your friend sighs, clearly doubting you, and says "${crazyPeopleSaying}." 
You nod, but deep down, you know you’ll never sleep peacefully in ${dreamCountry} again.
`;

// Output the story
console.log(story);

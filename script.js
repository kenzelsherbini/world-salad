// Prompt the user for various inputs related to the story
let bestFriend = prompt("Who is your best friend?"); // Get the user's best friend's name
let country = prompt("What is your dream vacation counry?"); // Get the dream vacation country
let stuffBought = prompt("What do you shop for when going on vacation?"); // Ask what the user shops for
let dreamCar = prompt("What is your dream car?"); // Get the user's dream car
let bugScaredOf = prompt("What bug are you most scared of?"); // Ask for a bug the user fears
let greeting = prompt("What greeting does a bellman at a hotel give?"); // Get a typical hotel greeting
let viewBeautiful = prompt("What beautiful view do you see at your hotel?"); // Ask about a scenic view
let typeOfFlip = prompt("What is a type of flip?"); // Ask for a flip type (e.g., cartwheel, backflip)
let defenseItem = prompt("What item do you grab for defense?"); // Ask for an item used for defense
let bugBodyPart = prompt("What is a body part of a bug?"); // Ask for a bug-specific body part
let crazyPeopleSaying = prompt("What do you say to crazy people?"); // Get a phrase typically said to crazy people

// Create the first part of the story using the inputs
let storyOne = `The wait was finally over! You're going on your long-awaited vacation with ${bestFriend}. You're about to board your flight to ${country}. The day before, you went shopping for ${stuffBought}, and you were too excited to go with your best friend. When you finally arrive in ${country}, you have to take a trip in ${dreamCar} to the hotel. Upon arriving there, the bellman greets you, but you notice there's something off with his face. You realize he's half ${bugScaredOf}!`;

// Display the first part of the story in the webpage element with the ID "storyone"
document.getElementById("storyone").textContent = storyOne;

// Create the second part of the story using additional inputs
let storyTwo = `You tell your friend but they ignore it. The bellman acts completely normal, greeting you with "${greeting}." You keep telling your friend, but they insist it's jet lag. As the night goes on, and the bellman drops your suitcases in your room, you go to look out at the ${viewBeautiful} but notice something. The bellman is doing a ${typeOfFlip} on the balcony next to you! You go to get a ${defenseItem} to protect yourself and your friend who is sleeping, and he waves his ${bugBodyPart} at you, smiling.`;

// Display the second part of the story in the webpage element with the ID "storytwo"
document.getElementById("storytwo").textContent = storyTwo;

// Create the third and final part of the story using remaining inputs
let storyThree = `Terrified, you throw the ${defenseItem} across the balcony but hit the wall. Your friend jolts awake and asks what happened. You point outside, shaking: "The bellman—he was flipping, smiling, and he's part bug!" Your friend sighs, clearly doubting you, and says "${crazyPeopleSaying}." You nod, but deep down, you know you’ll never sleep peacefully in ${country} again.`;

// Display the final part of the story in the webpage element with the ID "storythree"
document.getElementById("storythree").textContent = storyThree;

// Log each part of the story to the console for debugging or review
console.log(storyOne); // Log the first story to the console
console.log(storyTwo); // Log the second story to the console
console.log(storyThree); // Log the third story to the console

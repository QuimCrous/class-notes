const age = parseInt(prompt("Enter your age?"));

if (age <= 5) {
    console.log("Free!");
} else if (age > 5 && age < 15) {
    console.log("20% free");
} else if (age >= 15 && age <=60) {
    console.log("regular price");
} else if (age > 60) {
    console.log("40% free");
} else {
    console.log("Incorrect age");
}


const userName = prompt("Enter your name:");
const action = prompt("Enter a action:");

switch (action) {
    case "greet":
        console.log(`Hello ${userName}!`);
        break;
    case "say bye":
        console.log(`Bye bye, ${userName}!`);
        break;
    case "ask":
        console.log(`How are you today, ${userName}?`);
        break;
    case "scream":
        console.log(`AHHHHHHHH!!!!!!!`);
        break;
    case "rest":
        console.log(`I'm signing off now.`);
        break;
    default:
        console.log("I don't know how to do that yet, I'm just a little program :(");
        break;
}
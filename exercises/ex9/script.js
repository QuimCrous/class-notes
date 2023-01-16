const age = parseInt(prompt("Enter your age?"));

if (age <= 5) {
    console.log("Free!");
} else if (age < 15) {
    console.log("20% free");
} else if (age >= 15 && age <=60) {
    console.log("regular price");
} else if (age > 60) {
    console.log("40% free");
} else {
    console.log("Icorrect age");
}


const name = prompt("Enter your name:");
const action = prompt("Enter a action:");

switch (action) {
    case "greet":
        console.log(`Hello ${name}!`);
        break;
    case "say bye":
        console.log(`Bye bye, ${name}!`);
        break;
    case "ask":
        console.log(`How are you today, ${name}?`);
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
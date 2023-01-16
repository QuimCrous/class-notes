console.log("I'm ready!");

let hackerOne = "Pepote";
console.log(`The driver's name is ${hackerOne}`);
let hackerTwo = "Pepote";
console.log(`The navigator's name is ${hackerTwo}`);

console.log("===");

if (hackerOne.length > hackerTwo.length) {
  console.log(`The driver has the longest name, it has ${hackerOne.length} characters.`);
} else if (hackerOne.length < hackerTwo.length){
  console.log(`It seems that the navigator has the longest name, it has ${hackerTwo.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hackerOne.length}`);
};

console.log("===");

let hacker_capital = "";
let hackerTwo_reverse = "";

for (let i=0; i< hackerOne.length; i++) {
  hacker_capital += hackerOne[i].toUpperCase() + " ";
};

console.log(hacker_capital);

for (let i=0; i< hackerTwo.length; i++) {
  hackerTwo_reverse += hackerTwo[hackerTwo.length-1-i] + " ";
};

console.log(hackerTwo_reverse);

console.log("===");

if (hackerOne.localeCompare(hackerTwo) < 0) {
  console.log("The driver's name goes first.");
} else if (hackerOne.localeCompare(hackerTwo) > 0) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?");
};

console.log("===");

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra egestas libero ac sodales. Integer facilisis auctor tincidunt. Nunc nisl tortor, tincidunt vitae turpis nec, vulputate faucibus nunc. Nulla egestas egestas risus sed eleifend. Nulla et nibh turpis. Nullam consequat quis arcu eu maximus. Sed nec lobortis purus, at blandit erat. In rhoncus massa sapien. Vestibulum ultrices erat at sapien condimentum consectetur. Vestibulum cursus arcu a metus elementum, sed tristique quam imperdiet. Praesent pharetra libero in nulla malesuada pharetra. Sed ut consequat risus, vitae sollicitudin nisl. Nam fermentum, neque vitae porta semper, turpis lacus lobortis ante, et maximus magna justo vel enim. Vivamus tempor eros arcu, sed convallis lectus accumsan et. In id metus pharetra, sollicitudin ante id, efficitur felis. Morbi vitae nulla eleifend nibh ultricies condimentum nec eget felis. Maecenas ultricies efficitur gravida. Sed maximus a ligula placerat venenatis. Sed ac porta est, porttitor ultrices nibh. Nam sollicitudin laoreet tempus. Vivamus dictum ac ex ac dictum. Suspendisse id enim magna. Aenean massa metus, egestas sit amet dapibus id, bibendum a leo. Nulla facilisi. Praesent volutpat nibh varius neque sagittis faucibus. Vestibulum suscipit dapibus tempor. Sed risus tortor, facilisis eleifend odio at, semper blandit velit. Ut dolor eros, dignissim in lacinia ac, pellentesque quis libero. Sed et ultrices lacus. Pellentesque a cursus lorem. Nulla maximus nunc et ultricies semper. Donec interdum molestie purus, vel consequat nulla sodales lacinia. Ut a rhoncus augue, et eleifend dui. Etiam vitae erat odio.";

let count = longText.trim().split(/\s+/).length;
console.log(count);

let count2 = (longText.match(/et/g)||[]).length;
console.log(count2);

let frase1 = "patata atatap";
let frase2 = "";

for (let i=0; i<frase1.length;i++){
  frase2 += frase1[frase1.length-1-i];
}

if (frase1.toLowerCase()===frase2.toLowerCase()){
  console.log("It's a Palindrome!");
} else {
  console.log("It's not a palindrom.");
}
//1

let oldDiv = document.querySelector("div");
let newP = document.createElement("p");
newP.setAttribute("id","new-p");
oldDiv.appendChild(newP)

//2-3
let newDiv = document.createElement("div");
newDiv.setAttribute("id","nested");
let parentElement = document.querySelector("body").appendChild(newDiv);

let reP = document.createElement("p");
reP.setAttribute("id","putanofunciona")
reP.innerHTML = "Programming is my great"
newDiv.appendChild(reP);

//4
const newFunction = (str) => {
    document.querySelector("#putanofunciona").innerText = str;
}


const changeContentButton = document.querySelector("#change-text");

//changeContentButton.addEventListener("click", function(){newFunction("hola")});
changeContentButton.addEventListener("click", () => {newFunction("hola")});

//block2
//1-2
const toggleFunction = () => {
    document.querySelector(".green-box").classList.toggle("class2")
};

const buttonOne = document.querySelector("#master");

buttonOne.addEventListener("click", toggleFunction);

//3
const removeClassButton = document.querySelector("#remove-div");
const removeClassFunction = () => {
    document.querySelector(".remove-class").classList.remove("remove-class");
}

removeClassButton.addEventListener("click", removeClassFunction);

//4
const insertP = document.createElement("p");
insertP.innerText = "Texto insertado";
const insertPButton = document.querySelector("#insert-paragraf");

const insertPFunction = () => {
    document.querySelector("body").appendChild(insertP);
}

insertPButton.addEventListener("click", insertPFunction);

//5
const insertTableButton = document.querySelector("#insert-table");
const table = document.createElement("table");

let rOne = table.insertRow();
let rTwo = table.insertRow();
let rThree = table.insertRow();

rOne.insertCell();
rOne.insertCell();
rOne.insertCell();

rTwo.insertCell();
rTwo.insertCell();
rTwo.insertCell();

rThree.insertCell();
rThree.insertCell();
rThree.insertCell();

const insertTableFunction = () => {
    document.querySelector("body").appendChild(table);
}

insertTableButton.addEventListener("click", insertTableFunction);

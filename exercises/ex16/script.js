/*
Ejercicio 1:
Muestra por consola toda la información de tu pokemon favorito usando la API https://pokeapi.co*/

let blastoiser = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/9").then((response) => response.json()).then((res) => console.log(res)).catch((err) => console.log(err))
}

blastoiser()

/*
Ejercicio 2:
Permite al usuario introducir un número entre el 0 y el 151, que son los únicos pokemon que merecen la pena. Devuélvele la info del pokemon con la id correspondiente.
*/
let title = document.createElement("p");
document.querySelector("body").appendChild(title);

let searchById = () => {
    let pokemon = document.querySelector("body input").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => res.json().then((res) => {
        console.log(res);
        let pokemonName = res.species.name;
        console.log(pokemonName);
        title.innerText = pokemonName;
        
    }).catch((error) => console.log(error)))
}


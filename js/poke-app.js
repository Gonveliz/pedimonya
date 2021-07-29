const botoncito = document.getElementById("buttom-poke-app");
const pokemon = document.getElementById("pokemon");

botoncito.addEventListener("click", traerPokemon);



// fetcheo data de la api
async function traerPokemon () {
    var numAleatorio = Math.floor((Math.random() * (700 - 0 + 1)) + 0);
    try{

        const infoDeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${numAleatorio}`)
        const datosPokemon = await infoDeApi.json()

        // datosPokemon.sprites.front_default, datosPokemon.forms[0].name
        pintarPokemon(datosPokemon, numAleatorio);


    } catch (err) {
        console.log("Se rompio", err)
    }
}

// pintador front_default

function pintarPokemon (datosPokemon, numAleatorio) {
    
    // const imagen = datosPokemon.sprites.front_default
    // const imagen = datosPokemon.sprites.front_default
    const nombre = datosPokemon.forms[0].name.toUpperCase()
    const clase1 = datosPokemon.types[0].type.name.toUpperCase()

    const codigoHtml = 
                    `<img src="https://pokeres.bastionbot.org/images/pokemon/${numAleatorio}.png"> 
                        <ul>
                            <li><p>${nombre}</p></li>
                            <li><p>${clase1}</p></li>
                        </ul>`
    pokemon.innerHTML= codigoHtml;
}
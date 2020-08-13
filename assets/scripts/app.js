const listContainer = document.querySelector('#listContainer')

// uso de script
const getPokemon = (callback) => {
    fetch( "https://pokeapi.co/api/v2/pokemon?limit=100")
    .then( tipoDeDato => tipoDeDato.json())
    .then( (data) => callback (data) );
}

//Data = {} esto es cuando no se me envia nada entonces que tome un valor vacio
const renderPoketList = (data)  => {
    const results = data.results;
    console.log(results);

    results.forEach(pokemon => {
         const listItem = document.createElement('li'); // aqui estamos adicionando una etiqueta en html
         /*listItem.innerHTML = pokemon.name;
         listContainer.appendChild(listItem); */// aqui estamos llenando la etiqueta

        fetch(pokemon.url)
        .then( tipoDeDato => tipoDeDato.json())
        .then( (pokeInfo) => {
            console.log(pokeInfo);
            listItem.innerHTML = "<img src="+pokeInfo.sprites.front_default+" /> <span>"+pokeInfo.order+"<span>   </span>" +pokemon.name+"</span>";
            listContainer.appendChild(listItem); // aqui estamos llenando la etiqueta
        });
    });
}

getPokemon(renderPoketList);
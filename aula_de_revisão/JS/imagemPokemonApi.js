const getImagemPokemon = async (nomePokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`);
    const dados = await response.json();

    console.log(dados);
    
    

    return dados;
}
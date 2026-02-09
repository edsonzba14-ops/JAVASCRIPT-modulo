const postPokemon = async (
  idPokemon,
  nomePokemon,
  tipoPokemon,
  nivelPokemon,
  regiaoPokemon
) => {
  fetch(`http://localhost:3000/pokemons`, {
    method: "POST",
    body: JSON.stringify({
      id: idPokemon,
      nome: nomePokemon,
      tipo: tipoPokemon,
      nivel: nivelPokemon,
      regiao: regiaoPokemon,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const getPokemon = async () => {
  const response = await fetch(`http://localhost:3000/pokemons`);
  const dados = await response.json();

  return dados;
};

const putPokemon = async (
  idPokemon,
  nomePokemon,
  tipoPokemon,
  nivelPokemon,
  regiaoPokemon
) => {
  fetch(`http://localhost:3000/pokemons/${idPokemon}`, {
    method: "PUT",
    body: JSON.stringify({
      id: idPokemon,
      nome: nomePokemon,
      tipo: tipoPokemon,
      nivel: nivelPokemon,
      regiao: regiaoPokemon,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const deletePokemon = async (idPokemon) => {
    console.log(idPokemon);
        
  fetch(`http://localhost:3000/pokemons/${idPokemon}`, {
    method: "DELETE",
  });
};

export { postPokemon, getPokemon, putPokemon, deletePokemon };
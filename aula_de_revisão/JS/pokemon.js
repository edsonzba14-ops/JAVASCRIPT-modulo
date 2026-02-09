import { getPokemon, postPokemon, putPokemon, deletePokemon } from "../JS/crudPokemon.js";

const listarpokemon = async () => {
  let listaPokemon = await getPokemon();
  let ul = document.getElementById("listarPokemon");

  ul.innerHTML = "";

  for (let i = 0; i < listaPokemon.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `
    ID: ${listaPokemon[i].id} <br>
    Nome: ${listaPokemon[i].nome} <br>
    Tipo: ${listaPokemon[i].tipo} <br>
    Nível: ${listaPokemon[i].nivel} <br>
    Região: ${listaPokemon[i].regiao}`;

    /* listarPOkemon.forEach( (pokemon) => {
        let li = document.createElement("li");
        li.innerText = `ID: ${pokemon.id} - Nome: ${pokemon.nome} - Tipo: ${pokemon.tipo} - Nível: ${pokemon.nivel} - Região: ${pokemon.regiao}`;
        ul.appendChild(li);
    } );
 */
    ul.appendChild(li);
  }

  console.log(listaPokemon);
};

const criarCadastro = () => {
    let idImput = document.getElementById("id").value;
    let nomeImput = document.getElementById("nome").value;
    let tipoImput = document.getElementById("tipo").value;
    let nivelImput = document.getElementById("nivel").value;
    let regiaoImput = document.getElementById("regiao").value;
    postPokemon(idImput, nomeImput, tipoImput, nivelImput, regiaoImput);


}

const editarCadastro = () => {
    let idImput = document.getElementById("id").value;
    let nomeImput = document.getElementById("nome").value;
    let tipoImput = document.getElementById("tipo").value;
    let nivelImput = document.getElementById("nivel").value;
    let regiaoImput = document.getElementById("regiao").value;
    putPokemon(idImput, nomeImput, tipoImput, nivelImput, regiaoImput);
}

const deletarPokemon = () => {
    let idImput = document.getElementById("idPokemon").value;
    deletePokemon (idImput);
}


document.getElementById("getPokemon").addEventListener("click", listarpokemon);
document.getElementById("enviar").addEventListener("click", criarCadastro);
document.getElementById("editar").addEventListener("click", editarCadastro);
document.getElementById("deletarPokemon").addEventListener("click", deletarPokemon);
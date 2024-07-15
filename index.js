async function fetchPokemon() {

  try {
    const pokemonNameInput = document.querySelector(".pokemonNameInput").value.trim().toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameInput}`);

    if(!response.ok) {
      throw new Error("Error: failed to fetch data from server");
    }

    const data = await response.json();
    const pokemonImage = document.querySelector(".pokemonImage");
    pokemonImage.src = data.sprites.front_default;
    pokemonImage.style.display = "block";

    const pokemonNameDisplay = document.querySelector(".pokemonNameDisplay");
    pokemonNameDisplay.textContent = `Pokemon: ${data.name}`;
  }
  catch(error) {
    console.error(error);
  }
}


//test case: if user input other than aplhabets






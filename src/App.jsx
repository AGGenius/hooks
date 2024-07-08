import './App.css';
import useApi from './hooks/useFecthCharacters.js';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  const apiPoke = useApi(urlPokemon);
  const apiRick = useApi(urlRick);

  if (apiPoke.apiLoad || apiRick.apiLoad) {
    return <div>Cargando...</div>;
  }

  if (apiPoke.apiError || apiRick.apiError) {
    return <div>Error {apiErrorPoke.message}{apiErrorRick.message}</div>;
  }

  return (
    <>
      <h2>Personaje Pokemon</h2>
      <p>{apiPoke.apiData.name}</p>
      <img src={apiPoke.apiData.sprites.other.home.front_default} />
      
      <h2>Personaje Rick and Morty</h2>
      <p>{apiRick.apiData.name}</p>
      <img src={apiRick.apiData.image} />
    </>
  );
}

export default App;

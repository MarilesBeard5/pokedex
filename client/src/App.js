import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Navbar } from 'react-bootstrap';
import './App.css';
import pokemonLogo from './components/assets/logo.png';
import PokemonList from './components/PokemonList';

import { getAllPokemon, getPokemonData } from './extensions/pokemonExt';

function App() {
  const baseURL = 'https://pokeapi.co/api/v2/pokemon';
  const [pokemonList, setPokemonList] = useState([]);
  const [nextURL, setNextURL] = useState('');
  const [prevURL, setPrevURL] = useState('');
  useEffect(() => {
    async function fetchPokemons() {
      let response = await getAllPokemon(baseURL);
      setNextURL(stripTrailingSlash(response.next));
      setPrevURL(response.previous);
      await loadPokemonData(response.results);
    }
    fetchPokemons();
  }, []) //just once

  const next = async () => {
    var data = await getAllPokemon(nextURL);
    await loadPokemonData(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
  }

  const prev = async () => {
    if (!prevURL) return;
    var data = await getAllPokemon(prevURL);
    await loadPokemonData(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
  }

  /**
   * Loads each pokemon's particular data from the current pokemon list, updating the 
   * pokemonList's state
   * @param {Object} data -> The JSON data from the current pokemon list
   */
  const loadPokemonData = async (data) => {
    let pokemonDataRequest = await Promise.all(data.map(async pokemon => {
      //In some cases the API does not respond properly to URLs
      //so the @function -> stripTrailingSlash() method can help with the 
      //pokemon data URLs
      //UPDATE: some other cases require the trailing slash, will check for the issue in the latter development
      let url = stripTrailingSlash(pokemon.url);
      let pokemonResult = await getPokemonData(url);
      return pokemonResult
    }))
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setPokemonList(pokemonDataRequest);
  }

  function stripTrailingSlash(url) {
    if (url.substr(-1) === '/') {
      return url.substr(0, url.length - 1);
    }
    return url;
  }

  return (
    <Container style={{
      'marginLeft': 'auto', 'marginRight': 'auto'
    }}>
      <Navbar
        className='navbar navbar-expand-md fixed-top'>
        <Navbar.Brand>
          <img className='poke-logo' alt='Pokemon Logo' src={pokemonLogo}></img>
        </Navbar.Brand>
      </Navbar>
      <Row>
        <Col style={{ 'marginLeft': '120px' }}>
          <PokemonList items={pokemonList}>
          </PokemonList>
          <div className="button-container mb-4" role="group">
            <button
              className='btn btn-primary'
              onClick={prev}> Previous Results
              </button>
            <button
              className='btn btn-primary'
              onClick={next}> Next Results
              </button>
          </div>
        </Col>
      </Row>
    </Container >
  );
}

export default App;

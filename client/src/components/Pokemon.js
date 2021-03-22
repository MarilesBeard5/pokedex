import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';

import styled from 'styled-components';
import spinner from './assets/spinner.gif';

import TypeList from './TypeList';
import PokePanel from './PokemonPanel/PokePanel';

const Sprite = styled.img`
    width: 5em;
    weight: 5em;
`;

const Pokemon = ({ pokemon }) => {
    const [imageURL, setImageURL] = useState('');
    const [imageLoading, setImageLoading] = useState(true);
    const [tooManyRequests, setTooManyRequests] = useState(false);

    useEffect(() => {
        const url = pokemon.sprites.front_default;
        setImageURL(url);
    }, [pokemon])

    return (
        <Card style={{ width: '15rem' }}>
            {imageLoading ? (
                <img
                    alt=''
                    src={spinner}
                    style={{ width: '3em', height: '3em' }}
                    className="card-img-top rounded mx-auto d-block mt-2"
                />
            ) : null}
            <Sprite
                className='card-img-top rounded mx-auto d-block mt-2'
                src={imageURL}
                onLoad={() => setImageLoading(false)}
                onError={() => setTooManyRequests(true)}
                style={
                    tooManyRequests ?
                        { display: 'none' }
                        : imageLoading ?
                            null
                            : { display: 'block' }
                }>
            </Sprite>
            {tooManyRequests ? (
                <h6 className="mx-auto">
                    <span className="badge badge-danger mt-2">
                        Too Many Requests
                    </span>
                </h6>
            ) : null}
            <PokePanel
                pokemon={pokemon}>
            </PokePanel>
            <Card.Footer>
                <Card.Subtitle>
                    Types:
                </Card.Subtitle>
                <TypeList
                    types={pokemon.types}
                >
                </TypeList>
            </Card.Footer>
        </Card >

    )
}

export default Pokemon

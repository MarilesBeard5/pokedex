import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import TypeList from './TypeList';

import spinner from './assets/spinner.gif'
import Row from 'react-bootstrap/Row';

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
        <Card className='cusCard' style={{ width: '15rem' }}>
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
                    tooManyRequests
                        ? { display: 'none' }
                        : imageLoading
                            ? null
                            : { display: 'block' }
                } />
            {tooManyRequests ? (
                <h6 className="mx-auto">
                    <span className="badge badge-danger mt-2">
                        Too Many Requests
                </span>
                </h6>
            ) : null}
            <Card.Body className='row pokeBody'>
                <div className='col'>
                    <Card.Subtitle> Name: </Card.Subtitle>
                    <p>
                        <em>
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </em>
                    </p>

                    <Card.Subtitle> Base Experience: </Card.Subtitle>
                    <p>
                        <em>
                            {pokemon.base_experience}
                        </em>
                    </p>
                </div>
                <div className='col'>

                    <Card.Subtitle> Height: </Card.Subtitle>
                    <p>
                        <em>
                            {pokemon.height}
                        </em>
                    </p>

                    <Card.Subtitle> Weight: </Card.Subtitle>
                    <p>
                        <em>
                            {pokemon.weight}
                        </em>
                    </p>
                </div>
            </Card.Body>
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

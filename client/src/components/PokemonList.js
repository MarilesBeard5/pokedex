import { Col } from 'react-bootstrap';
import Pokemon from './Pokemon';
const Pokemons = ({ items }) => {
    return (
        <div className='grid-container'>
            {items.map((pokemon, index) => {
                return (
                    <Col key={"page-" + index}>
                        <Pokemon key={"pokemon-" + index} pokemon={pokemon}>
                        </Pokemon>
                        <br />
                    </Col>
                )
            })}
        </div>
    )
}

export default Pokemons

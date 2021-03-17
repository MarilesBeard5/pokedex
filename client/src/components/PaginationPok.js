import Pagination from 'react-bootstrap/Pagination'
import { useState, useEffect } from 'react';

const PaginationPok = ({ currentPokemonList, limit }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        var active = 0;
        var items = [];
        items.push(0);
        for (let i = 0; i < Math.ceil(currentPokemonList.count / limit); i++) {
            items.push(
                <Pagination.Item
                    key={currentPokemonList.next + i}
                    active={i === active}
                    href={currentPokemonList.next}
                >
                    {i}
                </Pagination.Item>
            );
        }
        setItems(items);
    }, [currentPokemonList, limit])

    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )
}

export default PaginationPok
import { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge'

const SingleType = ({ type }) => {
    const [className, setClassName] = useState('');
    useEffect(() => {
        const allTypesArray = ['normal', 'fire', 'water', 'electric',
            'grass', 'ice', 'fighting', 'poison',
            'ground', 'flying', 'psychic', 'bug',
            'rock', 'ghost', 'dragon', 'dark',
            'steel', 'fairy', 'unknown', 'shadow'];
        let result = allTypesArray.find(t => t === type.type.name);
        let completeClass = 'badge badge-pill badge-' + result;
        setClassName(completeClass);
    }, [type])

    return (
        <div>
            <Badge className={'badge-type ' + className}>
                {type.type.name}
            </Badge>
            <br />
        </div>
    )
}

export default SingleType

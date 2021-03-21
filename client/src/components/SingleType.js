import { useState, useEffect } from 'react';
import { allTypesArray } from '../extensions/pokemonExt';
import Badge from 'react-bootstrap/Badge'

const SingleType = ({ type }) => {
    const [className, setClassName] = useState('');
    useEffect(() => {
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

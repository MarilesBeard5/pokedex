import './salutations.css';
import React, { useEffect, useState } from 'react'; //for state implementation

function Salutations() {
    const [
        salutations,
        setSalutations
    ] = useState([]); //initial state

    useEffect(() => { //component lifecycle
        async function fetchSalutations() { //async function
            const response = await fetch('/api/salutations')
            const salutations = await response.json();
            setSalutations(salutations);
            console.log('Salutations fetched: ', salutations);
        }
        fetchSalutations();
    }, []); //this will render only once (equivalent to componentDidMount() function)

    return (
        <div className='container'>
            <h2> Salutations </h2>
            <ul>
                {salutations.map((salute) => (
                    <li>
                        <h6>
                            {salute}
                        </h6>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Salutations;

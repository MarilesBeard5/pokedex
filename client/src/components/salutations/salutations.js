import './salutations.css';
import React, { useEffect, useState } from 'react'; //uso de estados para componentes tipo función

function Salutations() {
    //const baseEndpoint = 'https://pokeapi.co/api/v2/pokemon/';
    const [
        salutations,
        setSalutations
    ] = useState([]); //estado inicial

    useEffect(() => { //representa el ciclo de vida del componente
        async function fetchSalutations() {
            const response = await fetch('/api/salutations')
            const salutations = await response.json();
            setSalutations(salutations);
            console.log('Salutations fetched: ', salutations);
        }
        fetchSalutations();
    }, []);

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

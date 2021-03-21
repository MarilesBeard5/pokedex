export function getPokemonData(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

export const allTypesArray = [
    'normal', 'fire', 'water', 'electric',
    'grass', 'ice', 'fighting', 'poison',
    'ground', 'flying', 'psychic', 'bug',
    'rock', 'ghost', 'dragon', 'dark',
    'steel', 'fairy', 'unknown', 'shadow'
];
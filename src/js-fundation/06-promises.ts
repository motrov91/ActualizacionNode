import { httpClient } from '../pluggins'


export const getPokemonById = async( id: number|string ):Promise<string> => {
    
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${ id }`
        //* await es un codigo bloqueante, no continua las siguientes lineas
        //* hasta que se resuelva el await
        const pokemon = await httpClient.get( url )
        //throw new Error ('Pokemon no encontrado')
        return pokemon.name
        
    } catch (error) {
        throw `Pokemon not found with id ${ id }`
    }
}

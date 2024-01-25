import { getPokemonById } from "../../src/js-fundation/06-promises"

describe('js-fundation/06-promises.ts', ()=>{

    it('getPokemonById', async() => {

        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);

        expect(pokemonName).toBe('bulbasaur')
    })

    it('Should return an error if pokemon does not exist', async () => {

        const pokemonId = 1000000000;

        try {
            await getPokemonById( pokemonId )
            expect(true).toBeFalsy();
            
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
        }

    })
})
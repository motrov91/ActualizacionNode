import { characters } from '../../src/js-fundation/02-destructuring'


describe('js-fundation/02-destructuring.ts', () => {
    it('Characters should containt Flash, Superman', () => {

        expect( characters ).toContain('Flash');
        expect( characters ).toContain('Superman');
    })

    it('First element should be Flash and second Superman', () => {
        
        const [flash, superman] = characters;
        expect( flash ).toBe('Flash');
        expect( superman ).toBe('Superman');
    })
})
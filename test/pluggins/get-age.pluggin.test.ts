import { getAge } from '../../src/pluggins/get-age.pluggin'


describe('pluggins/get-age.pluggins.ts', () => {

    it('getAge( should return the age of a person', () => {

        const birthdate = '1991-04-01'
        const age = getAge(birthdate);

        expect(typeof age).toBe('number')
    });

    it('getAge should return current age', () => {

        const birthdate = '1991-04-01'
        const age = getAge(birthdate);

        const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculateAge)
    });

    it('getAge should return 0 year', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

        const birthdate = '1996-10-21'
        const age = getAge(birthdate);

        console.log({ age })
    })
})
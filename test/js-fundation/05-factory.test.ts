import { buildMakePerson } from '../../src/js-fundation/05-factory'

describe('js-fundation/05-factory.ts', () => {

    const getUUID = () => '1234';
        const getAge = () => 32;

    it('buildMakePerson should return a function', () => {

        const makePerson = buildMakePerson({getUUID, getAge});
    });

    it('bulidMakePerson should return a person', () => {
        
        const makePerson = buildMakePerson({getUUID, getAge});
        const johnDoe = makePerson({
            name: 'John Doe',
            birthdate: '1991-04-14'
        }); 

        //En caso de no saber que retorna usemos un console.log
        //console.log(johnDoe)

        expect(johnDoe).toEqual({
            id:'1234',
            name: 'John Doe',
            birthdate: '1991-04-14',
            age: 32
        })
    });
})
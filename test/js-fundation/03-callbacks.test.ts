import { error } from 'console';
import { getUserById } from '../../src/js-fundation/03-callbacks'

describe('js-fundation/03-callbacks.js', () => {
    it('getUserById should be return an error if user not exist', (done) => {

        const id = 10;

        getUserById( id, (err, user) => {

            expect( err ).toBe(`User not found with id ${id}`);
            expect( user ).toBeUndefined();

            done()

        })
 
    });

    it('getUSerById should be return the user John Doe', (done) => {
        const id = 1;

        getUserById(id, (err, user) => {
            expect( err ).toBeUndefined();

            /*
            * No se puede usar toBe porque no se un valor primitivo
            */
            expect( user ).toEqual({
                id: 1,
                name: 'John Doe'
            })

             /*
            * Si queremos usar toBe tendriamos que hacer una destructuración.
            */
            // const {id, name} = user!;
            // expect(id).toBe(1);
            // expect(name).toBe('John Doe');
            
            done()
        })
    });
});
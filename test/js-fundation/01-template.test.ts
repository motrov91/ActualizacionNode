import { emailTemplate } from "../../src/js-fundation/01-template"

describe('js-foundation/01-template.ts', () => {
    //primero el mensaje de la prueba
    //Despues de la coma la funcion que se va a ejecutar
    it('emailTemplate should contain a greeting', () => {

        expect( emailTemplate ).toContain('Hi, ');

    })

    it('emailTemplate should contain {{name}} and {{ordeId}}', () =>{
        expect( emailTemplate ).toMatch(/{{name}}/);
        expect( emailTemplate ).toMatch(/{{orderId}}/);
    });
})
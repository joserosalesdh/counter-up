import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string'


describe('Prueba en 02-template-string.js', () => {

    test('getSaludo debe de retornar Hola Fernando', () => {

        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);
        // console.log(saludo);

        expect(saludo).toBe('Hola ' + nombre);

    })

    // getSaludo debe de retornar Hola Jose si no hay argumento en el nombre 
    test('getSaludo debe de retornar Hola Jose si no hay argumento en el nombre', () => {

        const saludo = getSaludo();
        console.log(saludo)

        expect(saludo).toBe('Hola Jose');

    })




})

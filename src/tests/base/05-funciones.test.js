import { getUser, getUsuarioActivo } from "../../base/05-funciones"


describe('Pruebas en 05-funciones.js', () => {

    test('getUser debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest) //Cuando queres compara que dos objetos tengan las mismas propiedades se usa toEqual

    })

    //getUserActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto', () => {

        const nombre = 'Jose'

        const userTest2 = {
            uid: 'ABC567',
            username: nombre
        }

        const user2 = getUsuarioActivo(nombre)

        expect(user2).toEqual(userTest2)

    })




})

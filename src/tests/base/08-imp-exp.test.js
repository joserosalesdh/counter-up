import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes'

describe('Pruebas en funciones de Héroes', () => {

    test('debe retornar un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id)

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData); // Como comparo objetos pongo toEqual

    })

    test('debe retornar undefined si Héroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id)

        expect(heroe).toBe(undefined); // Como el undefined es un primitivo puedo poner toBe

    })

    //debe de retonrar un arreglo con los héroes de DC
    //owner
    //toEqual al arreglo filtrado
    test('debe de retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner)

        expect(heroes).toEqual(heroeData);

    })


    //debe de retornar un arreglo con los héroes de Marvel
    //length = 2 //toBe de dos
    test('debe de retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        // const heroeData = heroes.filter(h => h.owner === owner)

        expect(heroes.length).toBe(2);

    })

})

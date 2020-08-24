import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';



describe('Pruebas en <PrimeraApp />', () => {

    test('debe de mostrar el mensaje "Hola, soy Goku"', () => {

        const saludo = "Hola, soy Goku"; // Este es el mensaje que yo necesito evaluar

        const { getByText } = render(<PrimeraApp saludo={saludo} />)
        // En teoria es el producto renderizado de lo qye yo quiero mostrar. Render es una funcion que recibo lo que nosotros queremos renderizar, en ese caso <PrimeraApp />

        expect(getByText(saludo)).toBeInTheDocument()
    })


})

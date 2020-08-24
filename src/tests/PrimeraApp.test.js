import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';



describe('Pruebas en <PrimeraApp />', () => {

    // test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
    //     const saludo = "Hola, soy Goku"; // Este es el mensaje que yo necesito evaluar
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />)
    //     // En teoria es el producto renderizado de lo que yo quiero mostrar. Render es una funcion que recibo lo que nosotros queremos renderizar, en ese caso <PrimeraApp />
    //     expect(getByText(saludo)).toBeInTheDocument()
    // })
    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Goku'
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)
        // shallow es parecido al render pero nos da opciones mas interesantes, como simular clicks

        expect(wrapper).toMatchSnapshot();
        // El Snapshot es 

    })

    test('debe de mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola, soy Goku'
        const subTitulo = 'Soy un subtitulo'

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subTitulo}
            />
        )

        const textoParrafo = wrapper.find('p').text()
        // Ese find con wrapper funciona igual que el document.querySelector();
        expect(textoParrafo).toBe(subTitulo);

    })



})

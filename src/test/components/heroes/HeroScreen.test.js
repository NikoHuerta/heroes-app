import {
    Routes,
    Route,
    MemoryRouter
  } from 'react-router-dom';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ 
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en el <HeroScreen />', () => {

    test('No debe mostrar el HeroScreen si no hay un heroe en el URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path='/hero' element={<HeroScreen />} />
                    <Route path='/' element={<h1> No Hero Page</h1>} />
                </Routes>
            </MemoryRouter>);

        //console.log(wrapper.html());
        expect(wrapper.find('h1').text().trim()).toBe('No Hero Page');
    });

    test('Debe de mostrar el HeroScreen si hay heroe en el URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen />} />
                    <Route path='/' element={<h1> No Hero Page</h1>} />
                </Routes>
            </MemoryRouter>);

        expect(wrapper.find('.row','.mt-5').exists()).toBe(true);
    });
    
    test('Debe de regresar a la pantalla anterior', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>);

    wrapper.find('button').simulate('click');
    //wrapper.find('button').prop('onClick')();
    expect(mockNavigate).toHaveBeenCalledWith(-1);
    });


    test('Debe de mostrar el No Hero Page si tenemos un heroe incorrecto', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider12312321321312312312']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen />} />
                    <Route path='/' element={<h1>No Hero Page</h1>} />
                </Routes>
            </MemoryRouter>);

        expect(wrapper.text()).toBe('No Hero Page')
    });

});

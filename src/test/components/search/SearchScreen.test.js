import { mount } from "enzyme";
import { SearchScreen } from "../../../components/search/SearchScreen";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas en <SearchScreen />', () => {

    test('Debe de mostrarse correctamente con valores por defecto', () => {
        
        const wrapper = mount(<MemoryRouter initialEntries={ ['/search'] }>
                                <SearchScreen />
                            </MemoryRouter>);
        expect(wrapper).toMatchSnapshot();
        //expect(wrapper.find('h1').text().trim()).toBe('Search Screen');
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a Hero');
    });

    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
        
        const wrapper = mount(<MemoryRouter initialEntries={ ['/search?q=batman'] }>
                                <SearchScreen />
                            </MemoryRouter>);
        
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar un error si no se encuentra un heroe', () => {
       
        const searchText = 'batmanError123';
        const wrapper = mount(<MemoryRouter initialEntries={ [`/search?q=${ searchText }`] }>
                                <SearchScreen />
                            </MemoryRouter>);
        
        expect(wrapper.find('.alert-danger').text().trim()).toBe(`There is no hero with '${ searchText }'`);
        expect(wrapper).toMatchSnapshot();

    });


    test('Debe de llamar el navigate al nuevo URL', () => {

        const wrapper = mount(<MemoryRouter initialEntries={ ['/search'] }>
                                <SearchScreen />
                            </MemoryRouter>);
        
        wrapper.find('input').simulate('change', { 
            target: {
                name: 'searchString',
                value: 'batman'
            }
         });  //solo cambia el valor, escribe batman en el input sin disparar el formulario
        
        wrapper.find('form').prop('onSubmit')({
            preventDefault: () => {}
        });

        expect(mockNavigate).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith('?q=batman');



    });
    
    
    

    
    
});

import { mount } from "enzyme";
import { Navbar } from "../../../components/ui/Navbar";
import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types/types";

import {
    Routes,
    Route,
    MemoryRouter
  } from 'react-router-dom';



const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));



describe('Pruebas en <Navbar />', () => {
   
    const contextValue = {
        user:{
            logged: true,
            name: 'Nicolas',
            email: 'nico@las.h'
        },
        dispatch: jest.fn()
    };

    // const wrapper = mount(
    //     <AuthContext.Provider value={ contextValue }>
    //         <MemoryRouter initialEntries={ ['/'] }>
    //                 <Navbar />
    //         </MemoryRouter>
    //     </AuthContext.Provider>
    // );

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<Navbar />} />
                </Routes>
            </MemoryRouter>    
        </AuthContext.Provider>
    );


    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Nicolas');
    });


    test('Debe de llamar el logout, llamar el navigate y el dispatch con los argumentos', () => {
        wrapper.find('button').simulate('click');
        //wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.logout});
        expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
        



    });
    

    

});

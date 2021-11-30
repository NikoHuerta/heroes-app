import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Pruebas en <AppRouter />', () => {
   
    const contextValue = {
        user:{
            logged: false
        }
    };
    
    
    test('Debe de mostrar el Login si no esta autenticado', () => {
        
        const contextValue = {
            user:{
                logged: false
            }
        };
       
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login Screen');
    });
    
    test('Debe de mostrar el componente SearchScreen si esta autenticado', () => {
        
        const contextValue = {
            user:{
                logged: true,
                name: 'Nicolas',
                email: 'nico@las.h'
            }
        };
       
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);
    });


});

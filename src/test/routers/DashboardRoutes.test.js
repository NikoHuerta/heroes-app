import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";



describe('Pruebas en <DashboardRoutes />', () => {

    const contextValue = {
        user:{
            logged: true,
            name: 'Pepe',
            email: 'pepe@pepe.pepe'
        }
    };
    
    
    test('Debe de mostrarse correctamente', () => {
    
    const wrapper = mount(<AuthContext.Provider value={ contextValue }>
                            <MemoryRouter initialEntries={ ['/'] }>
                                <DashboardRoutes />
                            </MemoryRouter>
                        </AuthContext.Provider>);

    expect(wrapper).toMatchSnapshot();    
    expect(wrapper.find('.text-info').text().trim()).toBe('Pepe');

    });

    test('Debe de mostrarse correctamente DC', () => {
    
        const wrapper = mount(<AuthContext.Provider value={ contextValue }>
                                <MemoryRouter initialEntries={ ['/dc'] }>
                                    <DashboardRoutes />
                                </MemoryRouter>
                            </AuthContext.Provider>);
    
        expect(wrapper).toMatchSnapshot();    
        expect(wrapper.find('.text-info').text().trim()).toBe('Pepe');
        expect(wrapper.find('h1').text().trim()).toBe('DC Screen');

    
    });

    test('Debe de mostrarse correctamente Marvel', () => {
    
        const wrapper = mount(<AuthContext.Provider value={ contextValue }>
                                <MemoryRouter initialEntries={ ['/marvel'] }>
                                    <DashboardRoutes />
                                </MemoryRouter>
                            </AuthContext.Provider>);
    
        expect(wrapper).toMatchSnapshot();    
        expect(wrapper.find('.text-info').text().trim()).toBe('Pepe');
        expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen');
    
    });

    test('Debe de mostrarse correctamente About', () => {
    
        const wrapper = mount(<AuthContext.Provider value={ contextValue }>
                                <MemoryRouter initialEntries={ ['/about'] }>
                                    <DashboardRoutes />
                                </MemoryRouter>
                            </AuthContext.Provider>);
    
        expect(wrapper).toMatchSnapshot();    
        expect(wrapper.find('.text-info').text().trim()).toBe('Pepe');
        expect(wrapper.find('h1').text().trim()).toBe('About Screen');
    
    });

    test('Debe de mostrarse correctamente Search', () => {
    
        const wrapper = mount(<AuthContext.Provider value={ contextValue }>
                                <MemoryRouter initialEntries={ ['/search'] }>
                                    <DashboardRoutes />
                                </MemoryRouter>
                            </AuthContext.Provider>);
    
        expect(wrapper).toMatchSnapshot();    
        expect(wrapper.find('.text-info').text().trim()).toBe('Pepe');
        expect(wrapper.find('h1').text().trim()).toBe('Search Screen');
    });
    
    
});

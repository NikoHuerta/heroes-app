import { AuthContext } from '../../../auth/authContext';
import {
    Routes,
    Route,
    MemoryRouter
  } from 'react-router-dom';

import { mount } from 'enzyme';
import { types } from '../../../types/types';
import { LoginScreen } from '../../../components/login/LoginScreen';

import { AppRouter } from '../../../routers/AppRouter';
import { PublicRoute } from '../../../routers/PublicRoute';
import { PrivateRoute } from '../../../routers/PrivateRoute';
import { DashboardRoutes } from '../../../routers/DashboardRoutes';


const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ 
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en <LoginScreen />', () => {
    
    const contextValue = {
        user:{
            logged: false,
        },
        dispatch: jest.fn()
    };

    // const wrapper = mount(<AuthContext.Provider value={ contextValue }>
    //                         <MemoryRouter initialEntries={ ['/'] } />
    //                             <BrowserRouter>
    //                             <div>
    //                                 <Routes>
    //                                 <Route path="/login" element={ 
    //                                             <PublicRoute>
    //                                             <LoginScreen />
    //                                             </PublicRoute> 
    //                                     }/>
    //                                 <Route path="/*" element={ 
    //                                             <PrivateRoute>
    //                                             <DashboardRoutes />  
    //                                             </PrivateRoute>
    //                                     }/>
    //                                 </Routes>
    //                             </div>
    //                             </BrowserRouter>
    //                     </AuthContext.Provider>);
    const wrapper = mount(<AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/login']}>
            <Routes>
                <Route path='/login' element={<LoginScreen />} />
            </Routes>
        </MemoryRouter>    
    </AuthContext.Provider>

    );

    test('Debe de mostrarse correctamente', () => {
       expect(wrapper).toMatchSnapshot();
    });
   

    test('Debe de realizar el dispatch y la navegacion', () => {
        wrapper.find('input').simulate('change', {
            target: {
               name: 'nameLogin',
               value: 'testNameGenerated' 
            }
        });
        // wrapper.find('form').prop('onSubmit')({
        //     preventDefault(){}
        // });
        const handleClick = () => {
            wrapper.find('form').prop('onSubmit')({
                preventDefault(){}
            });    
        }
        
        handleClick();

        const action = {
            type: types.login,
            payload: {
                name: 'testNameGenerated',
                email: 'test@mail.testdom'
            }
        }

        expect(contextValue.dispatch).toHaveBeenCalledWith(action);
        expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });

        localStorage.setItem('lastPath', '/marvel');
        handleClick();
        expect(mockNavigate).toHaveBeenCalledWith('/marvel', { replace: true });

    });
    
});

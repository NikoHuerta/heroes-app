
// const state = {
//     name: 'Nicolas',
//     logged: true
// }

// const loginAction = {
//     type: types.login,
//     payload:{
//         name: 'Nicolas',
//         email: 'asdsadsadasd@asdas.asd'
//     }
// }

import { types } from "../types/types";

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return{
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }

}
// import {type} from "os"

import { combineReducers } from 'redux'

import thietBiReducer from './thietBi';
import dichVuReducer from './dichVu';




const reducer = combineReducers({
    thietBi: thietBiReducer,
    dichVu : dichVuReducer,
 
})

export default reducer
export type State = ReturnType<typeof reducer>
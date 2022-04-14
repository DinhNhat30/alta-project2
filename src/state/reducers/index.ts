import {type} from "os"
import { combineReducers } from "redux"
import productReducer from './thietBi';


const reducer = combineReducers({
    thietBi: productReducer
})

export default reducer
export type State = ReturnType<typeof reducer>
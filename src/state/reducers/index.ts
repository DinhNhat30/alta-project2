import {type} from "os"
import { combineReducers } from "redux"
import productReducer from './product';


const reducer = combineReducers({
    products: productReducer
})

export default reducer
export type State = ReturnType<typeof reducer>
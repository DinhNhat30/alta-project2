
import {Action} from "../actions"
import { ActtionType } from "../constants/ActionsTypes"
var initialState = {
    thietBi: [
        {
            maTB: '1',
            tenTB: 'John Brown',
            address: 'New York No. 1 Lake ',
            trangThaiHD: 'Hoạt động',
            trangThaiKN: 'Mất kết nối',
            dichVu: 'sadsa'
        }
    ],
}

const productReducer = (state = initialState , action: Action ) =>{
    switch(action.type) {
        case ActtionType.ALL_THIETBI:
            return {...state, thietBi: action.thietBi};
        default:
            return state;
    }
}

export default productReducer;
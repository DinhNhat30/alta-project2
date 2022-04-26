
import { Action, All_ThietBi, ThietBiList } from "../actions/thietBiActions"
import { ActtionType } from "../constants/ActionsTypes"
var initialState: ThietBiList = {
    thietBiList: [], // có 1 key thì a lấy kiểu hồi nảy dc 
    // còn nhiều key thì a lấy như hồi nảy là bị lỗi, phải dùng rest để lấy
}
const thietBiReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActtionType.ALL_THIETBI:

            return { ...state, thietBiList: action.payload };
        default:
            return state;
    }
}

export default thietBiReducer;
import { Dispatch } from "react";
import { Action, ThietBi,  } from "../actions";
import { ActtionType } from "../constants/ActionsTypes";



export const setAllThietBi = (thietBi: ThietBi[]) =>{
    return (dispatch : Dispatch<Action>) =>{
        dispatch({
            type : ActtionType.ALL_THIETBI,
            thietBi: thietBi
        })
    }
}
import { Dispatch } from "react";
import { Action, IProduct } from "../actions";
import { ActtionType } from "../constants/ActionsTypes";



export const setAllProduct = (products: IProduct[]) =>{
    return (dispatch : Dispatch<Action>) =>{
        dispatch({
            type : ActtionType.ALL_PRODUCTS,
            products: products
        })
    }
}
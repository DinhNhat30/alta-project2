import { ActtionType } from "../constants/ActionsTypes"
import {type} from "os"

export interface IProduct {
    id?:string
    price?: string,
    title?: string
}

export interface All_Products {
    type: ActtionType.ALL_PRODUCTS
    products ?: IProduct[];
}

export interface ICollection{
    id?:string
    price?:string,
    title?: string
}

export type Action = All_Products
import { ActtionType } from "../constants/ActionsTypes"
import {type} from "os"

export interface ThietBi {
    maTB?:string,
    tenTB?: string,
    address?: string,
    trangThaiHD?: string,
    trangThaiKN?: string,
    dichVu?: string,
}

export interface All_ThietBi {
    type: ActtionType.ALL_THIETBI
    thietBi ?: ThietBi[];
}

export interface ICollection{
    maTB?:string,
    tenTB?: string,
    address?: string,
    trangThaiHD?: string,
    trangThaiKN?: string,
    dichVu?: string,
}

export type Action = All_ThietBi
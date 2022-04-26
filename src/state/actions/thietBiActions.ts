import { ActtionType } from "../constants/ActionsTypes"
// import {type} from "os"

export interface ThietBi {
    maTB?:string,
    tenTB?: string,
    address?: string,
    trangThaiHD?: string,
    trangThaiKN?: string,
    dichVu?: string,
}
export interface ThietBiList {
    thietBiList: Array<ThietBi>
}
export interface All_ThietBi {
    type: typeof ActtionType.ALL_THIETBI,
    payload: ThietBi[] ,
}

export type Action = All_ThietBi
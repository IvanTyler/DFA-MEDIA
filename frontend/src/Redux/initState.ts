import { IFetchData } from "../Interfaces/interface"


export interface IGetData {
    data: IFetchData,
    error: null | string;
}

export const initState: IGetData = {
    data: {
        navigation: [],
        posts: []
    },
    error: '',
}
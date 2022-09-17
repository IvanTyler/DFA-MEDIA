import { INavigation, IPost } from "../Interfaces/interface"


export interface IGetData {
    posts: IPost[],
    error: null | string;
    getNavigationMenu: INavigation[]
}

export const initState: IGetData = {
    posts: [],
    getNavigationMenu: [],
    error: '',
}
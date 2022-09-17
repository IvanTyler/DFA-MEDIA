import { IGetData, initState } from "../initState";
import { getDataActionType, GetDataActionTypesEnum } from "../types/getDataTypes";


export const getDataReucer = (state = initState, action: getDataActionType): IGetData => {
    switch (action.type) {
        case GetDataActionTypesEnum.GET_DATA_POSTS:
            return { ...state, posts: action.payload }
        case GetDataActionTypesEnum.GET_DATA_ERROR:
            return { ...state, error: action.payload }
        case GetDataActionTypesEnum.GET_DATA_NAVIGATION:
            return { ...state, getNavigationMenu: action.payload }
        case GetDataActionTypesEnum.GET_DATA_STATUS_ITEM:
            return {
                ...state, getNavigationMenu: state.getNavigationMenu.map((el: any) => {
                    if (el.id === action.active) {
                        return {
                            ...el,
                            active: true,
                        }
                    } else if (el.id !== action.active) {
                        return {
                            ...el,
                            active: false,
                        }
                    }
                    return el
                })
            }
        default:
            return state
    }
}
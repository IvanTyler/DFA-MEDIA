import axios from "axios"
import { Dispatch } from "react"
import { BACKEND_HOST } from "../../Constants/constants"
import { getDataActionType, GetDataActionTypesEnum, GetDataActiveItemAction } from "../types/getDataTypes"

export const getDataFetch = () => {
    return async (dispath: Dispatch<getDataActionType>) => {
        const response = await axios.get<any>(`${BACKEND_HOST}`)
        try {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_POSTS,
                payload: response.data.posts
            })
        } catch (e) {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_ERROR,
                payload: 'Ошибка, данных нет'
            })
        }
    }
}

export const getDataFetchNavigation = () => {
    return async (dispath: Dispatch<getDataActionType>) => {
        const response = await axios.get<any>(`${BACKEND_HOST}`)
        try {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_NAVIGATION,
                payload: response.data.navigation
            })
        } catch (e) {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_ERROR,
                payload: 'Ошибка, данных нет'
            })
        }
    }
}


export const getNavigationItemId = (id: string) => {
    console.log(id);
    return {
        type: GetDataActionTypesEnum.GET_DATA_STATUS_ITEM,
        active: id,
    }
}
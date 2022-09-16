import axios from "axios"
import { Dispatch } from "react"
import { IFetchData } from "../../Interfaces/interface"
import { getDataActionType, GetDataActionTypesEnum } from "../types/getDataTypes"


export const getDataFetch = () => {
    return async (dispath: Dispatch<getDataActionType>) => {
        const response = await axios.get<IFetchData>('http://localhost:3001')
        try {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA,
                payload: response.data
            })
        } catch (e) {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_ERROR,
                payload: 'Ошибка, данных нет'
            })
        }
    }
}
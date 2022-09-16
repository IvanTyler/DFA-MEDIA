import { useDispatch } from "react-redux"
import { getDataFetch } from "../Redux/action/dataAction"
import { useTypeSelector } from "./useTypeSelector"
import { useEffect } from 'react';

export const useGetData = () => {
    const dispath = useDispatch<any>()

    useEffect(() => {
        dispath(getDataFetch())
    }, [])

    const { navigation, posts } = useTypeSelector(state => state.data.data)
    return { navigation, posts }
}
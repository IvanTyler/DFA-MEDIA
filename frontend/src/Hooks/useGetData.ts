import { useDispatch } from "react-redux"
import { getDataFetch, getDataFetchNavigation } from "../Redux/action/dataAction"
import { useTypeSelector } from "./useTypeSelector"
import { useEffect } from 'react';

export const useGetData = () => {
    const dispath = useDispatch<any>()

    useEffect(() => {
        dispath(getDataFetch())
        dispath(getDataFetchNavigation())
    }, [])

    const { posts, getNavigationMenu } = useTypeSelector(state => state.data)

    return { getNavigationMenu, posts }
}
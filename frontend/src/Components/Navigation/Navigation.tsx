import React from "react";
import { useGetData } from "../../Hooks/useGetData";
import { INavigation } from "../../Interfaces/interface";
import List from "../List/List";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import style from './Navigation.module.scss'


export const Navigation: React.FC = () => {
    const { getNavigationMenu } = useGetData()

    return (
        <section className={style.sectionNavigation}>
            <ul className={style.sectionNavigationList}>
                <List
                    items={getNavigationMenu}
                    renderItem={(item: INavigation) => <NavigationItem item={item} key={item.id} />}
                />
            </ul>
        </section>
    )
}
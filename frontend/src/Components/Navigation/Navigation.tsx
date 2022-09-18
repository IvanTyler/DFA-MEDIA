import React from "react";
import { useGetData } from "../../Hooks/useGetData";
import { INavigation } from "../../Interfaces/interface";
import List from "../List/List";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import { Sandwitch } from "../Sandwich/Sandwich";
import style from './Navigation.module.scss'
import { useState } from 'react';

export const Navigation: React.FC = () => {
    const { getNavigationMenu } = useGetData()
    const [showMenuNavigation, setShowMenuNavigation] = useState(false)

    return (
        <section className={style.sectionNavigation}>
            <div onClick={() => setShowMenuNavigation(prev => !prev)} className={style.sectionNavigation__wrapperSandwitch}>
                <Sandwitch />
            </div>

            <ul className={showMenuNavigation ?
                style.sectionNavigationList + ' ' + style.show :
                style.sectionNavigationList}>
                <List
                    items={getNavigationMenu}
                    renderItem={(item: INavigation) => <NavigationItem item={item} key={item.id} />}
                />
            </ul>
        </section>
    )
}
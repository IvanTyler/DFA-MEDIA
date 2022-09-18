import React from "react";
import style from './Sandwich.module.scss'
import { useRef, useState } from 'react';

export const Sandwitch: React.FC = () => {

    const [sandwich, setSandwich] = useState(false)

    const sandwitch = useRef(null)

    const sandwitch_1 = useRef(null)
    const sandwitch_2 = useRef(null)
    const sandwitch_3 = useRef(null)

    const showSandwich = () => sandwich ?
        setSandwich(prev => !prev) :
        setSandwich(prev => !prev)

    return (
        <ul ref={sandwitch} onClick={() => showSandwich()}
            className={style.sandwichList}>
            <li ref={sandwitch_1} className={sandwich ?
                style.sandwichList__item + ' ' + style.swTopper + ' ' + style.active :
                style.sandwichList__item + ' ' + style.swTopper}>
            </li>
            <li ref={sandwitch_2} className={sandwich ?
                style.sandwichList__item + ' ' + style.swBottom + ' ' + style.active :
                style.sandwichList__item + ' ' + style.swBottom}>
            </li>
            <li ref={sandwitch_3} className={sandwich ?
                style.sandwichList__item + ' ' + style.swFooter + ' ' + style.active :
                style.sandwichList__item + ' ' + style.swFooter}>
            </li>
        </ul>
    )
}
import React from "react";
import style from './WrapperContent.module.scss'

interface WrapperContentProps {
    children: React.ReactNode
}

export const WrapperContent: React.FC<WrapperContentProps> = ({ children }) => {
    return (
        <div className={style.wrapperContent}>
            {children}
        </div>
    )
}
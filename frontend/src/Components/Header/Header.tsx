import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import style from './Header.module.scss'

export const Header: React.FC = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <header className={style.header}>
            <h1 className={style.header__title}>Мероприятия</h1>
            <button className={style.header__openModalWindow} onClick={() => setOpenModal(prev => !prev)}>Открыть модальное окно</button>
            {openModal && <Modal setOpenModal={setOpenModal}/>}
        </header>
    )
}
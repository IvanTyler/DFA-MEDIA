import React from "react";
import style from './Modal.module.scss'

interface ModalProps {
    setOpenModal: any;
}

export const Modal: React.FC<ModalProps> = ({ setOpenModal }) => {
    return (
        <div className={style.modal}>
            <div className={style.modal__content}>
                <input className={style.modal__input} type="text" placeholder="input_1" />
                <input className={style.modal__input} type="text" placeholder="input_2" />
                <button className={style.modal__button} type="submit">Кнопка</button>
                <img className={style.modal__closeModelIcon} src={'https://lowcost.fix.travel/img/close-white.png'}
                    onClick={() => setOpenModal((prev: boolean) => !prev)}
                    alt="Закрыть окно"
                />
            </div>
        </div>
    )
}
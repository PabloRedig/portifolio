import React from 'react'
import { Link } from "react-router-dom";
import style from './Card.module.css'

export default function Card({titulo, descricao,FtProjeto}) {
    return (
        <div>
            <div className={style.Card}>
                <div className={style.CardImg}>
                    <img src={FtProjeto} alt="ImgProjeto" />
                </div>
                <div className={style.CardInfo}>
                    <h2>{titulo}</h2>
                    <span>{descricao}</span>
                    <div className={style.CardLinks}>
                        <Link to="">Github</Link>
                        <Link to="">Site</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

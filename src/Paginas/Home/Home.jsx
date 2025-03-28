import React from 'react'
import style from "./Home.module.css"
import Cabecalho from '../../Modulos/Cabecalho/Cabecalho';
import Rodape from '../../Modulos/Rodape/Rodape';
import FtPerfil from '../../Img/FtPerfil.png'

export default function Home() {
  return (
    <div>
      <Cabecalho />
      <div className={style.Container}>
        <div className={style.ImgPerfil}>
          <img src={FtPerfil} alt="Ft Perfil" />
        </div>

        <div className={style.TextoSobre}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquid modi deserunt ratione repellat eos praesentium quasi 
            nulla repellendus nisi laudantium dolore, possimus officia nam 
            tempora quis quos explicabo. Ratione, error.
          </p>
        </div>
      </div>
      <Rodape />
    </div>
  )
}

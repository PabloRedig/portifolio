import React from 'react'
import style from "./Cabecalho.module.css"
import { Link } from "react-router-dom";
import Logo from '../../Img/Logo.png'

export default function Cabecalho() {
  return (
    <nav className={style.Nav}>
      <div>
        <Link to="/"><img src={Logo} alt="Logo " /></Link>
      </div> 
      <div className={style.Menu}>
        <Link to="/formacoes">Formacoes</Link>
        <Link to="/projetos">Projetos</Link>
      </div>
    </nav>
  )
}

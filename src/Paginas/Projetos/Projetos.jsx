import React from 'react'
import style from "./Projetos.module.css"
import Cabecalho from '../../Modulos/Cabecalho/Cabecalho';
import Titulo from '../../Modulos/Titulo/Titulo';
import Rodape from '../../Modulos/Rodape/Rodape';
import Card from '../../Modulos/Card/Card';
import FtProjeto from "../../Img/FtProjeto.png"

export default function Projetos() {
  return (
    <div>
      <Cabecalho />
      <div className={style.Container}>
        <Titulo titulo='Projetos' />
        <div className={style.BlockCards}>
          <Card
            titulo='Projeto X'
            descricao='Projeto destinado a Ampliar meu conhecimento, foi utilizado a linguagem REACT para o desenvolvimento do projeto'
            FtProjeto={FtProjeto}
          />
          <Card
            titulo='Projeto X'
            descricao='Projeto destinado a Ampliar meu conhecimento, foi utilizado a linguagem REACT para o desenvolvimento do projeto'
            FtProjeto={FtProjeto}
          />
          <Card
            titulo='Projeto X'
            descricao='Projeto destinado a Ampliar meu conhecimento, foi utilizado a linguagem REACT para o desenvolvimento do projeto'
            FtProjeto={FtProjeto}
          />
          <Card
            titulo='Projeto X'
            descricao='Projeto destinado a Ampliar meu conhecimento, foi utilizado a linguagem REACT para o desenvolvimento do projeto'
            FtProjeto={FtProjeto}
          />
        </div>
      </div>
      <Rodape />

    </div>

  )
}

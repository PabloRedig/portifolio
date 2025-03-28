import React from 'react'
import style from "./Formacoes.module.css"
import { Link } from "react-router-dom";
import Cabecalho from '../../Modulos/Cabecalho/Cabecalho';
import Rodape from '../../Modulos/Rodape/Rodape';
import Titulo from '../../Modulos/Titulo/Titulo';
import CardFormacoes from '../../Modulos/CardFormacoes/CardFormacoes';

export default function Formacoes() {
  return (
    <div>
      <Cabecalho />
      <div className={style.Container}>

        <Titulo titulo='Formações' />

        <div className={style.BlocoFormacoes}>
          <CardFormacoes
            Formacao={"Bacharelado em Sistemas de Informação"}
            LocalEnsino={"Universidade Estacio de Sá - Polo Cabo Frio - Concluído em 2022"}
            Descricao={"Principais disciplinas: Desenvolvimento Web, Banco de Dados, Engenharia de Software"}
          />

          <CardFormacoes
            Formacao={"Formação React com JavaScrip"}
            LocalEnsino={"Alura - Concluido 24 de Outubro de 2023"}
            Descricao={"Aprenda a criar interfaces do usuário com React, um dos frameworks JavaScript mais utilizados, e desenvolva uma aplicação do zero ao deploy."}
          />

          <CardFormacoes
            Formacao={"Formação HTML e CSS para projetos WEB"}
            LocalEnsino={"Alura - Concluido 13 Fevereiro de 2023"}
            Descricao={"Adicionar"}
          />

          <CardFormacoes
            Formacao={"Tecnico em Manutenções e Reparo"}
            LocalEnsino={"Faetec - Polo Armação dos Búzios - Concluído em 2018"}
            Descricao={"Adicionar "}
          />

        </div>

      </div>
      <Rodape />
    </div>
  )
}
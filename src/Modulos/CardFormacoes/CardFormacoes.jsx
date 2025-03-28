import React from 'react'
import style from "./CardFormacoes.module.css"

export default function BlockFormacoes({ Formacao, LocalEnsino, Descricao }) {
  return (
    <div>
      <div className={style.Container}>
        <h3><strong>{Formacao}</strong></h3>
        <p>{LocalEnsino}</p>
        <p>{Descricao}</p>
      </div>
    </div>
  )
}


import React from 'react'
import style from "./NotFound.module.css"
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div> 
      ERRO 404 - NÃO ENCONTRADO
      <Link to="/">Voltar</Link> 
    </div>
  )
}

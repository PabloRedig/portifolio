import React from 'react'
import style from "./Titulo.module.css"
import { Link } from "react-router-dom";

export default function Titulo({titulo}) {
  return (
    <div className={style.Titulo}>
    <label>{titulo}</label>
    <span></span>
  </div>
  )
}

import React from 'react'
import { BsSearch } from "react-icons/bs";
export default function Buscador() {
  return (
    <div className="cont-bws">
      <BsSearch className='cont-bws__icono'/>
        <input className='cont-bws__input' type="search" placeholder='Search' />
    </div>
  )
}

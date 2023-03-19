import React from 'react'
import './Catalog.css'
import Data from "./Catalog.json"

export default function Catalog() {
  return (
    <div className='container'>
        <span className='h1 text-light jalka'>Bizning afzalliklarimiz</span>
        <div className='catalogs-item'>
          {Data.map((item) => {
            return (
              <div className='map-item'>
                <img src={item.img} alt="" />
                <span className='h3'>{item.title}</span>
              </div>
            )
          })}
        </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar-style'>
        <nav className='container d-flex navbar'>
          <div className='logo'>
         <Link className='h3 link' to={"/"} >LOGO</Link>
          </div>
            <ul className='list-control'>
                <li className='list'><Link to={"/about-company"} className="link">O компании</Link></li>
                <li className='list'><Link to={"/portfolio"} className="link">Портфолио</Link></li>
                <li className='list'><Link to={"/servisec"} className="link">Услуги</Link></li>
                <li className='list'><Link to={"/contacts"} className="link">Контакты</Link></li>
            </ul>
            <div  className='more-info'>
              <div className='line'>
               <span className='d-block h5 text-light information-navbar'>+998 90 777-77-77</span>
               <span className='text-light information-navbar email'>sarvarismoilxojayev31@gmail.com</span>
              </div>
              <a href='tel:+998 90 777-77-77' className='tel-btn'>Заказать звонок </a>
            </div>
        </nav>
    </div>
  )
}

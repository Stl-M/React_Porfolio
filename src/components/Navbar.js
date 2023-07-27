import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as  FaIcons  from 'react-icons/fa'
import * as  AiIcons  from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'




function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{ color: 'black' }}>
        <div className='boxbar'>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <h1 className='name'>Stella Mungai</h1>
        </div>
        <div className={sidebar? 'nav-menu active' : 'nav-menu'} >
            <ul className='nav-menu-items'  onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span> {item.title} </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        </IconContext.Provider>
    </>
  )
}

export default Navbar

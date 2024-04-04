import React from 'react'
import { useGlobalContext } from '../Context/globalContext'
import { menu } from './icons'

const MenuIcon = () => {

    const { activeMenu, setActiveMenu } = useGlobalContext()

    const handleClick = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <span className='nav-menu-btn' onClick={handleClick}>{menu}</span>
    )
}

export default MenuIcon
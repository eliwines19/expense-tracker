import React from 'react'
import { useGlobalContext } from '../Context/globalContext'
import { menu } from './icons'
import styled from 'styled-components'

const MenuIcon = () => {

    const { activeMenu, setActiveMenu } = useGlobalContext()

    const handleClick = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <MenuIconStyled className='nav-menu-btn' onClick={handleClick}>{menu}</MenuIconStyled>
    )
}

const MenuIconStyled = styled.span`
    width: 3vw;
    i{
        font-size: 25px;
        padding: 1vw;
        border-radius: 40%;
        text-align: center;
        transition: 0.2s ease-in-out;
    }
    i:hover{
        font-size: 28px;
        background-color: #F3C6CA;
        cursor: pointer;
    }
`

export default MenuIcon
import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { menuItems } from '../../utils/menuItems.js'
import { exit } from '../../utils/icons.js'
import { useGlobalContext } from '../../Context/globalContext.js'

const Navigation = ({ active, setActive }) => {

    const { activeMenu, setActiveMenu } = useGlobalContext()

    const handleClick = () => {
        setActiveMenu(!activeMenu)
    }

  return (
    <NavStyled>
        <div className={`${activeMenu ? 'nav-con' : 'inactive'}`}>
            <div className='close-menu' onClick={handleClick}>
                {exit}
            </div>
            <div className='user-con'>
                <img src={avatar} alt=""/>
                <div className='text'>
                    <h2>Mike</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className='menu-items'>
                {menuItems.map((item) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={active === item.id ? 'active' : ''}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
    .inactive{
        display: none;
    }
    .nav-con{
        z-index: 10;
        position: absolute;
        box-shadow: 0 0 0 2000px rgba(0,0,0,0.3);
        padding: 2rem 1.5rem;
        width: 30vw;
        height: auto;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
    }
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #FCF6F9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06)
        }
        h2{
            color: rgba(34, 34, 96, 1)
        }
        p{
            color: rgba(34, 34, 96, 0.6)
        }
    }
    .close-menu{
        left: 23vw;
        width: 3vw;
        position: absolute;
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
    }
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-titems: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, 0.6)
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }
    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        span{
            text-decoration: underline;
        }
    }
`

export default Navigation
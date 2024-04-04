import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import { useGlobalContext } from '../../Context/globalContext'
import Chart from '../Chart/Chart'
import History from '../History/History'
import { dollar } from '../../utils/icons'
import MenuIcon from '../../utils/MenuIcon'

const Dashboard = () => {

    const { getIncomes, getExpenses, totalExpenses, totalIncome, totalBalance, incomes, expenses, activeMenu, setActiveMenu } = useGlobalContext()

    useEffect(() => {
      getExpenses()
      getIncomes()
    }, [])

    return (
      <DashboardStyled>
          <InnerLayout>
              <div className='header-con'>
                <MenuIcon />
                <h1>All Transactions</h1>
              </div>
              <div className='stats-con'>
                <div className='chart-con'>
                  <Chart />
                  <div className='amount-con'>
                    <div className='income'>
                      <h2>Income</h2>
                      <p>
                        {dollar}{totalIncome()}
                      </p>
                    </div>
                    <div className='expense'>
                      <h2>Expenses</h2>
                      <p>
                        {dollar}{totalExpenses()}
                      </p>
                    </div>
                    <div className='balance'>
                      <h2>Balance</h2>
                      <p style={{ color: totalBalance() > 0 ? 'var(--color-green)' : '#FF0000' }}>
                        {dollar}{totalBalance()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='history-con'>
                  <History />
                  <h2 className='salary-title'>Min<span>Income</span>Max</h2>
                  <div className='salary-item'>
                    <p>
                      {dollar}{Math.min(...incomes.map(item => item.amount))}
                    </p>
                    <p>
                      {dollar}{Math.max(...incomes.map(item => item.amount))}
                    </p>
                  </div>
                  <h2 className='salary-title'>Min<span>Expenses</span>Max</h2>
                  <div className='salary-item'>
                    <p>
                      {dollar}{Math.min(...expenses.map(item => item.amount))}
                    </p>
                    <p>
                      {dollar}{Math.max(...expenses.map(item => item.amount))}
                    </p>
                  </div>
                </div>
              </div>
          </InnerLayout>
      </DashboardStyled>
    )
  }

const DashboardStyled = styled.div`
  h1{
    text-align: center;
  }
  .nav-menu-btn{
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
  }
  .stats-con{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con{
      grid-column: 1 / 4;
      height: 50%;
      width: 100%;
      .amount-con{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income, .expense{
          grid-column: span 2;
        }
        .income, .expense, .balance{
          text-align: center;
          background: #FCF6F9;
          border: 2px solid #FFFFFF;
          box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
          border-radius: 20px;
          padding: 1rem;
          font-size: 1.5vw;
        }
        .income{
          p{
            color: var(--color-green);
          }
        }
        .expense{
          p{
            color: #FF0000;
          }
        }
        .balance{
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .history-con{
      grid-column: 4 / -1;
      h2{
        font-size: 2vw;
        margin: 2vw 0 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title{
        font-size: 1vw;
        span{
          font-size: 2vw;
        }
      }
      .salary-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
        padding: 0.8vw;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          font-weight: 600;
          font-size: 1.6vw;
        }
      }
    }
  }
`

export default Dashboard
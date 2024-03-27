import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import { useGlobalContext } from '../../Context/globalContext'
import Chart from '../Chart/Chart'
import { dollar } from '../../utils/icons'



const Dashboard = () => {

  const { getIncomes, getExpenses, totalExpenses, totalIncome, totalBalance } = useGlobalContext()

  useEffect(() => {
    getExpenses()
    getIncomes()
  }, [])

  return (
    <DashboardStyled>
        <InnerLayout>
            <h1>All Transactions</h1>
            <div className='stats-con'>
              <div className='chart-con'>
                <Chart />
                <div className='amount-con'>
                  <div className='income'>
                    <h2>Total Income</h2>
                    <p>
                      {dollar} {totalIncome()}
                    </p>
                  </div>
                </div>
                <div className='expense'>
                  <h2>Total Expenses</h2>
                  <p>
                    {dollar} {totalExpenses()}
                  </p>
                </div>
                <div className='balance'>
                  <h2>Balance</h2>
                  <p>
                    {dollar} {totalBalance()}
                  </p>
                </div>
              </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`

`

export default Dashboard
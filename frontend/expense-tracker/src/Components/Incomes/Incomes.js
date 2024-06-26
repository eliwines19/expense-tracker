import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import { useGlobalContext } from '../../Context/globalContext'
import IncomeForm from '../Forms/IncomeForm'
import Income from './Income'
import MenuIcon from '../../utils/MenuIcon'

const Incomes = () => {

  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext()

  const sortIncomes = (incomes) => {
    // default sorting will be newest on top
    return incomes.slice().reverse()
  }

  useEffect(() => {
    getIncomes()
  }, [])

  return (
    <IncomeStyled>
      <InnerLayout>
        <MenuIcon />
        <h1>Incomes</h1>
        <h2 className='total-income'>Total Income: <span>${totalIncome()}</span></h2>
        <div className='income-content'>
          <div className='form-container'>
            <IncomeForm />
          </div>
          <div className='incomes'>
            {
            sortIncomes(incomes).map((income) => {
              const { _id, title, amount, date, category, description } = income;
              return(
                <Income
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  indicatorColor='var(--color-green)'
                  deleteItem={deleteIncome}
                />
              )
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
  h1{
    text-align: center;
  }
  display: flex;
  overflow: auto;
  .total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content{
    display: flex;
    gap: 2rem;
    .incomes{
      flex: 1;
    }
  }
  @media (max-width: 600px){
    .income-content{
      display: grid;
    }
  }
`

export default Incomes
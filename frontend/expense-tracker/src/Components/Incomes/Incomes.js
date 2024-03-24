import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import { useGlobalContext } from '../../Context/globalContext'
import Form from '../Form/Form'
import Income from './Income'

const Incomes = () => {

  const { addIncome, incomes, getIncomes } = useGlobalContext()

  useEffect(() => {
    getIncomes()
  }, [incomes])

  return (
    <IncomeStyled>
      <InnerLayout>
        <h2>Incomes</h2>
        <div className='income-content'>
          <div className='form-container'>
            <Form />
          </div>
          <div className='incomes'>
            {incomes.map((income, index) => {
              const { id, title, amount, date, category, description } = income;
              return(
                <Income
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  indicatorColor='var(--color-green)'
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
  display: flex;
  overflow: auto;
  .income-content{
    display: flex;
    gap: 2rem;
    .incomes{
      flex: 1;
    }
  }
`

export default Incomes
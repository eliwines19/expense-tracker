import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../Context/globalContext'
import { InnerLayout } from '../../styles/layouts'
import ExpenseForm from '../Forms/ExpenseForm'
import Income from '../Incomes/Income'
import MenuIcon from '../../utils/MenuIcon'

const Expenses = () => {

  const { expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext()

  const sortExpenses = (expenses) => {
    // default sorting will be newest on top
    return expenses.slice().reverse()
  }

  useEffect(() => {
    getExpenses()
  }, [])

  return (
    <ExpensesStyled>
      <InnerLayout>
        <MenuIcon />
        <h1>Expenses</h1>
        <h2 className='total-expenses'>Total Expenses: <span>${totalExpenses()}</span></h2>
        <div className='expense-content'>
          <div className='form-container'>
            <ExpenseForm />
          </div>
          <div className='expenses'>
            {sortExpenses(expenses).map((expense) => {
              const { _id, title, amount, date, category, description, type } = expense
              return (
                <Income
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              )
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpensesStyled>
  )
}

const ExpensesStyled = styled.div`
  h1{
    text-align: center;
  }
  display: flex;
  overflow: auto;
  .total-expenses{
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
  .expense-content{
    display: flex;
    gap: 2rem;
    .expenses{
      flex: 1;
    }
  }
  @media (max-width: 600px){
    .expense-content{
      display: grid;
    }
  }
`

export default Expenses
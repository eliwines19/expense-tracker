import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import { useGlobalContext } from '../../Context/globalContext'

const Incomes = () => {

  const {addIncome} = useGlobalContext()

  return (
    <StyledIncomes>
      <InnerLayout>
        <h2>Incomes</h2>
        <div className='income-content'>
          <div className='form-container'>

          </div>
          <div className='incomes'>

          </div>
        </div>
      </InnerLayout>
    </StyledIncomes>
  )
}

const StyledIncomes = styled.div`

`

export default Incomes
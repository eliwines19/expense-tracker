import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import { useGlobalContext } from '../../Context/globalContext'
import Form from '../Form/Form'

const Incomes = () => {

  const {addIncome} = useGlobalContext()

  return (
    <StyledIncomes>
      <InnerLayout>
        <h2>Incomes</h2>
        <div className='income-content'>
          <div className='form-container'>
            <Form />
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
import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from '../../Context/globalContext' 
import Button from '../Button/Button'
import { plus } from '../../utils/icons'

const ExpenseForm = () => {

    const { addExpense, error, setError } = useGlobalContext()
    const [ inputState, setInputState ] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: ''
    })

    const { title, amount, date, category, description } = inputState

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: ''
        })
    }

    return (
        <ExpenseFormStyled onSubmit={handleSubmit}>
            <h2 className='new-expense-title'>Add New Expense</h2>
            {error && <p className='error'>{error}</p>}
            <div className='input-control'>
                <input
                    type="text"
                    value={title}
                    name={'title'}
                    placeholder='What is this for?'
                    onChange={handleInput('title')}
                />
            </div>
            <div className='input-control'>
                <input
                    value={amount}
                    type="text"
                    name={'amount'}
                    placeholder={'How Much?'}
                    onChange={handleInput('amount')}
                />
            </div>
            <div className='input-control'>
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat='dd/MM/yyyy'
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className='selects input-control'>
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Select Expense Category</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>  
                    <option value="traveling">Traveling</option>  
                    <option value="other">Other</option>
                </select>
            </div>
            <div className='input-control'>
                <textarea name="descripton" value={description} placeholder='Description' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className='submit-btn'>
                <Button
                    name={'Add Expense'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent)'}
                    color={'#FFF'}
                />
            </div>
        </ExpenseFormStyled>
    )
}

const ExpenseFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
        color: rgba(34, 34, 96, 0.4);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }
    .selects{
    display: flex;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
            color: rgba(34, 34, 96, 1);
            }
        }
    }
    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0,0,0,0.6);
            &:hover{
            background: var(--color-green) !important;
            }
        }
    }
    @media (max-width: 600px){
        gap: 1rem;
        .new-expense-title{
            text-align: center;
        }
        .submit-btn{
            display: flex;
            justify-content: center;
        }
    }
`

export default ExpenseForm
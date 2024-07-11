import React, { useContext, useState } from 'react'
import axios from 'axios'

const BASE_URL = 'https://expense-tracker-backend-2ug1.onrender.com/api/v1'

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(false)
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    // income methods
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}/add-income`, income)
            .catch((error) => {
                setError(error.response.data.message)
            })
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}/get-incomes`)
            .catch((error) => {
                setError(error.response.data.message)
            })
        setIncomes(response.data)
    }

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}/delete-income/${id}`)
            .catch((error) => {
                setError(error.response.data.message)
            })
        getIncomes()
    }

    const totalIncome = () => {
        let total = 0
        incomes.forEach((income) => {
            total += income.amount
        })
        return total
    }
    // income methods

    // expense methods
    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}/add-expense`, expense)
            .catch((error) => {
                setError(error.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}/get-expenses`)
        setExpenses(response.data)
    }

    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASE_URL}/delete-expense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let total = 0;
        expenses.forEach((expense) => {
            total += expense.amount
        })
        return total
    }
    // expense methods

    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        })
        return history.slice(0, 3)
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            expenses,
            totalBalance,
            transactionHistory,
            activeMenu,
            setActiveMenu,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
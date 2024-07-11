import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../Context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses} = useGlobalContext()

    const options = {
        plugins: {
            title: {
                display: true,
                text: "Transaction History"
            }
        },
        maintainAspectRatio: false
    }

    const combinedDates = () => {
        let combined = [];
        incomes.map((inc) => {
            const { date } = inc;
            combined.push(dateFormat(date));
        })
        expenses.map((exp) => {
            const { date } = exp;
            combined.push(dateFormat(date));
        })
        combined = [...new Set(combined)];
        combined.sort((a, b) => {
            let dateA = new Date(a);
            let dateB = new Date(b);
            return dateA - dateB;
        })
        return combined;
    }

    let dates = combinedDates();

    const incomeData = dates.map(date => {
        const totalIncome = incomes
            .filter(income => dateFormat(income.date) === date )
            .reduce((sum, income) => sum + income.amount, 0)
        return totalIncome || null;
    });

    const expenseData = dates.map(date => {
        const totalExpense = expenses
            .filter(expense => dateFormat(expense.date) === date )
            .reduce((sum, expense) => sum + expense.amount, 0)
        return totalExpense || null;
    });

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                backgroundColor: '#42AD00',
                tension: .2
            },
            {
                label: 'Expenses',
                data: expenseData,
                backgroundColor: '#FF0000',
                tension: .2
            }
        ]
    }

    return (
        <ChartStyled >
            <Line options={options} data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    canvas{
        width: 100%;
        height: 100%;
    }
    @media (max-width: 1000px){
        canvas{
            max-width: 80vw;
            min-height: 400px;
        }
    }
`;

export default Chart
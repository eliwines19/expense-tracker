const IncomeSchema = require("../models/incomeModel")

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        // validations
        if(!title || !category || !description || !date){
            return res.status(400).json({ message: "All fields required" })
        }
        if(amount <= 0 || !amount === 'number' ){
            return res.status(400).json({ message: "Amount must be a positive number" })
        }
        await income.save()
        res.status(200).json({ message: "Income Added" })
    } catch (error) {
        res.status(500).json({ message: "Server Error: ", error })
    }
}

exports.getIncomes = async (req, res) => {
    
    try {
        const incomes = await IncomeSchema.find().sort({ created_at: -1 })
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }

}

exports.deleteIncome = async (req, res) => {

    const { id } = req.params;
    console.log(req.params)
    
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            console.log('income deleted')
            res.status(200).json({ message: "Income Deleted" })
        })
        .catch((error) => {
            res.status(500).json({ message: "Server Error:", error })
        })
}
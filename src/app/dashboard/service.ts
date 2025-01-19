export const addExpense = async () => {
    const endpoint = 'http://localhost:3000/api/transaction'
    const res = await fetch(endpoint)
    console.log({ res })
}
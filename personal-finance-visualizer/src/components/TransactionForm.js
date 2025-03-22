import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount || !category) return;

        const newTransaction = {
            description,
            amount: parseFloat(amount),
            category,
            date: new Date().toISOString(),
        };

        onAddTransaction(newTransaction);
        setDescription('');
        setAmount('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />
            <button type="submit">Add Transaction✔️</button>
        </form>
    );
};

export default TransactionForm;
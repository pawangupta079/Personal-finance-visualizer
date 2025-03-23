// filepath: src/App.js
import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';

const App = () => {
    const [transactions, setTransactions] = useState([
        { id: 1, description: 'Groceries', amount: 50 },
        { id: 2, description: 'Rent', amount: 500 },
        { id: 3, description: 'Utilities', amount: 100 },
    ]);

    // Function to handle adding a new transaction
    const handleAddTransaction = (newTransaction) => {
        setTransactions((prevTransactions) => {
            const newId = prevTransactions.length > 0 
                ? Math.max(...prevTransactions.map(t => t.id)) + 1 
                : 1; // Generate a new unique ID
            return [...prevTransactions, { ...newTransaction, id: newId }];
        });
    };

    // Function to handle delete
    const handleDelete = (id) => {
        setTransactions((prevTransactions) =>
            prevTransactions.filter((transaction) => transaction.id !== id)
        );
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Personal Finance Viewer</h1>
            <TransactionForm onAddTransaction={handleAddTransaction} />
            <TransactionList transactions={transactions} onDelete={handleDelete} />
        </div>
    );
};

export default App;

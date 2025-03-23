import React, { useEffect, useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import BarChart from '../components/Charts/BarChart';
import PieChart from '../components/Charts/PieChart';

const Home = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await fetch('/api/transactions');
            const data = await response.json();
            setTransactions(data);
        };

        fetchTransactions();
    }, []);

    const addTransaction = async (transaction) => {
        const response = await fetch('/api/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transaction),
        });
        const newTransaction = await response.json();
        setTransactions([...transactions, newTransaction]);
    };

    const deleteTransaction = async (id) => {
        await fetch(`/api/transactions/${id}`, {
            method: 'DELETE',
        });
        setTransactions(transactions.filter(transaction => transaction._id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Personal Finance Visualizer</h1>
            <TransactionForm onAddTransaction={addTransaction} />
            <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} />
            <div className="charts mt-8">
                <BarChart transactions={transactions} />
                <PieChart transactions={transactions} />
            </div>
        </div>
    );
};


export default Home;

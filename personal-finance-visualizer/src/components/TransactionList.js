import React from 'react';

const TransactionList = ({ transactions, onDelete }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Transaction List</h2>
            <ul className="list-disc pl-5">
                {transactions.map((transaction) => (
                    <li key={transaction.id} className="flex justify-between items-center mb-2">
                        <span>{transaction.description}: ${transaction.amount}</span>
                        <button 
                            onClick={() => onDelete(transaction.id)} 
                            className="text-red-500 hover:text-red-700"
                        >
                            Delete Transaction❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TransactionList;
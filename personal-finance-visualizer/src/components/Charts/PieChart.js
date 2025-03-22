import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data = [] }) => {
    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

    const chartData = {
        labels: data.map(item => item.category || 'Unknown'),
        datasets: [
            {
                data: data.map(item => item.amount || 0),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                ],
            },
        ],
    };

    return (
        <div>
            <h2>Expenses by Category</h2>
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;

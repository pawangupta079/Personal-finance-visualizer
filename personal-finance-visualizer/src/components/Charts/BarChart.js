const BarChart = ({ data = [] }) => {
    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

    const chartData = {
        labels: data.map(item => item.month || 'Unknown'),
        datasets: [
            {
                label: 'Monthly Expenses',
                data: data.map(item => item.amount || 0),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Monthly Expenses</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;

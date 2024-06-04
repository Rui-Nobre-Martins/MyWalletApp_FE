import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import apiService from "../services/apiService"

function MyWalletChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const fetchTransactions = async () => {
            const user_id = localStorage.getItem("user_id");
            const result = await apiService.fetchData(`transactions/${user_id}`, "GET");

            const transactions = result.transactions && result.transactions.length > 0 ? result.transactions : [];

            const labels = transactions.map(transaction => transaction.created_at.substring(0, 10));
            const dataPoints = transactions.map(transaction => transaction.amount);

            const data = {
                labels: labels,
                datasets: [
                    {
                        label: 'My transactions',
                        data: dataPoints,
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--blue-500'),
                        tension: 0.4
                    },
                ]
            };
            setChartData(data);
        };

        fetchTransactions();

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
        setChartOptions(options);
    }, []);

    return (
        <>

            <div>
                {Object.keys(chartData).length > 0 ? (
                    <Chart type="line" data={chartData} options={chartOptions} />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}

export default MyWalletChart;


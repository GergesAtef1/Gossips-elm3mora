import React from 'react';
import { Line } from 'react-chartjs-2';

const TransactionChart = ({ transactions }) => {
  const data = {
    labels: transactions.map(t => t.date),
    datasets: [
      {
        label: 'Transaction Amount',
        data: transactions.map(t => t.amount),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return <Line data={data} />;
};

export default TransactionChart;
 
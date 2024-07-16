import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerTable from './CustomerTable';
import TransactionChart from './TransactionChart';
import './App.css';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const customerResponse = await axios.get('http://localhost:5000/customers');
      const transactionResponse = await axios.get('http://localhost:5000/transactions');
      setCustomers(customerResponse.data);
      setTransactions(transactionResponse.data);
    };

    fetchData();
  }, []);

  const handleCustomerSelect = (customerId) => {
    setSelectedCustomer(customerId);
  };

  return (
    <div className="container">
      <CustomerTable
        customers={customers}
        transactions={transactions}
        onCustomerSelect={handleCustomerSelect}
      />
      {selectedCustomer && (
        <div className="chart-container">
          <TransactionChart
            transactions={transactions.filter(t => t.customer_id === selectedCustomer)}
          />
        </div>
      )}
    </div>
  );
};

export default App;

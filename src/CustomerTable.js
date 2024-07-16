import React, { useState } from 'react';

const CustomerTable = ({ customers, transactions, onCustomerSelect }) => {
  const [filter, setFilter] = useState({ name: '', amount: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(filter.name.toLowerCase())
  );

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.amount.toString().includes(filter.amount)
  );

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Filter by name"
        value={filter.name}
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="amount"
        placeholder="Filter by amount"
        value={filter.amount}
        onChange={handleFilterChange}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id} onClick={() => onCustomerSelect(customer.id)}>
              <td>{customer.name}</td>
              <td>
                {filteredTransactions
                  .filter((t) => t.customer_id === customer.id)
                  .map((t) => (
                    <div key={t.id}>
                      Amount: {t.amount}, Date: {t.date}
                    </div>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;

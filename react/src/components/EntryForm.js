import React, { useState } from 'react';
import { addEntry, fetchEntries } from '../api';

const EntryForm = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEntry({ amount: parseFloat(amount), description });
      setMessage({ text: 'Record added successfully!', type: 'success' });
      setAmount('');
      setDescription('');
      fetchEntries(); // Refresh the list
    } catch (error) {
      setMessage({ text: 'Failed to add record. Please try again.', type: 'error' });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Entry</button>
      </form>
      {message.text && <p className={`message ${message.type}`}>{message.text}</p>}
    </div>
  );
};

export default EntryForm;

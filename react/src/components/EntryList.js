import React, { useEffect, useState } from 'react';
import { fetchEntries, deleteEntry } from '../api';

const EntryList = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const loadEntries = async () => {
    setLoading(true);
    try {
      const data = await fetchEntries();
      setEntries(data);
    } catch (error) {
      setMessage({ text: 'Failed to fetch entries. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this record?')) return;
    try {
      await deleteEntry(id);
      setMessage({ text: 'Record deleted successfully!', type: 'success' });
      loadEntries(); // Refresh the list
    } catch (error) {
      setMessage({ text: 'Failed to delete record. Please try again.', type: 'error' });
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <div>
      <h2>Entries</h2>
      {loading && <p>Loading...</p>}
      {message.text && <p className={`message ${message.type}`}>{message.text}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.length === 0 ? (
            <tr>
              <td colSpan="4">No entries available</td>
            </tr>
          ) : (
            entries.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.amount}</td>
                <td>{entry.description}</td>
                <td>
                  <button onClick={() => handleDelete(entry.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EntryList;
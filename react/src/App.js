import React from 'react';
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';

const App = () => {
  return (
    <div className="container">
      <h1>CRUD Application</h1>
      <EntryForm />
      <EntryList />
    </div>
  );
};

export default App;

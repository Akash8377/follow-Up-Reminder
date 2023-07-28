

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import FollowupForm from './components/FollowupForm';
import ReminderList from './components/ReminderList.js';

function App() {
  const [reminders, setReminders] = useState([]);

  const handleFormSubmit = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <FollowupForm onFormSubmit={handleFormSubmit} />
        <ReminderList reminders={reminders} />
      </div>
    </div>
  );
}

export default App;




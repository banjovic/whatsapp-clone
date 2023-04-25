import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import InitialChat from './components/InitialChat';
import AuthPage from './components/authPages/AuthPage';
import { State, useStateValue } from './api/StateProvider';

function App() {
  const { user } = useStateValue<State>();

  return (
    <div className="app">
      {!user ? (
        <AuthPage />
      ) : (
        <div className="app-body">
          <Router>
            <SideBar />
            <Routes>
              <Route path="/" element={<InitialChat />} />

              <Route path="/group/:groupId" element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

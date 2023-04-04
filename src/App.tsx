import { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="app">
      <div className="app-body">
        <SideBar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;

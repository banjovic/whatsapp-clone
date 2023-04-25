import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import InitialChat from './components/InitialChat';
import AuthPage from './components/authPages/AuthPage';
import { State, useStateValue } from './api/StateProvider';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

type loggedInUserType = {
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: string;
  photoURL: string;
  tenantId: string;
  uid: string;
};

function App() {
  // const { user } = useStateValue();

  const [loggedInUser, setLoggedInUser] = useState<loggedInUserType>({
    displayName: '',
    email: '',
    emailVerified: false,
    phoneNumber: '',
    tenantId: '',
    uid: '',
    photoURL: '',
    isAnonymous: false,
  });
  // console.log('first', loggedInUser);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedInUser({
        uid: user.uid as string,
        email: user.email as string,
        displayName: user.displayName as string,
        emailVerified: user.emailVerified as boolean,
        phoneNumber: user.phoneNumber as string,
        tenantId: user.tenantId as string,
        photoURL: user.photoURL as string,
        isAnonymous: user.isAnonymous as boolean,
      });
    } else {
      setLoggedInUser({
        displayName: '',
        email: '',
        emailVerified: false,
        phoneNumber: '',
        tenantId: '',
        uid: '',
        photoURL: '',
        isAnonymous: false,
      });
    }
  });

  return (
    <div className="app">
      {!loggedInUser ? (
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

import React, { useEffect, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase';

import styles from './SideBar.module.scss';
import Avatar from '../assets/placeholder.png';
import { Link } from 'react-router-dom';

type Props = {
  addNewChat?: boolean;
  name?: string;
};

const SideBarChat = ({ addNewChat, name }: Props) => {
  const [seed, setSeed] = useState<string | number>('');

  const createChat = async () => {
    const personName = prompt('Please enter name for chat');

    if (personName) {
      await addDoc(collection(db, 'group'), {
        name: personName,
      });
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <Link to={`/group/${name}`}>
      <div className={styles['side-bar-chatContainer']}>
        <img
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
          alt="avatar"
          className={styles['sidebar-chat-avatar']}
        />
        <div className={styles['chat-info-wrapper']}>
          <h3>{name}</h3>
          <p>Last Message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className={styles['side-bar-chatContainer']} onClick={createChat}>
      <h3>Add New Chat</h3>
    </div>
  );
};

export default SideBarChat;

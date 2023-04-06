import React, { useEffect, useState } from 'react';
import styles from './SideBar.module.scss';
import Avatar from '../assets/placeholder.png';

type Props = {
  addNewChat: boolean;
};

const SideBarChat = ({ addNewChat }: Props) => {
  const [seed, setSeed] = useState<string | number>('');

  const createChat = () => {
    const personName = prompt('Please enter name for chat');

    if (personName) {
      // do some clever database stuff
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <div className={styles['side-bar-chatContainer']}>
      <img
        src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        alt="avatar"
        className={styles['sidebar-chat-avatar']}
      />
      <div className={styles['chat-info-wrapper']}>
        <h3>Person Name</h3>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
    <div className={styles['side-bar-chatContainer']} onClick={createChat}>
      <h3>Add New Chat</h3>
    </div>
  );
};

export default SideBarChat;

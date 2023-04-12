import React from 'react';
import styles from './Chat.module.scss';
import EmptyChat from '../assets/msg-empty.png';

type Props = {};

const InitialChat = (props: Props) => {
  return (
    <div className={styles['no-chat-container']}>
      <img src={EmptyChat} alt="msg-empty" />
      <h3>No Chat/Group selected yet</h3>
    </div>
  );
};

export default InitialChat;

import React, { useEffect, useState } from 'react';
import styles from './Chat.module.scss';
import Avatar from '../assets/placeholder.png';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai';

type Props = {};

const Chat = (props: Props) => {
  const [seed, setSeed] = useState<string | number>('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className={styles['chat-container']}>
      <div className={styles['chat-header']}>
        <div className={styles['chat-personInfo-wrapper']}>
          <img
            src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            alt="avatar"
            className={styles['person-avatar']}
          />

          <div className={styles['chat-info-wrapper']}>
            <h3>Person Name</h3>
            <p>Last Seen at...</p>
          </div>
        </div>

        <div className={styles['chat-action-wrapper']}>
          <div className={styles['left-action-wrapper']}>
            <HiOutlineVideoCamera /> <IoCallOutline />
          </div>

          <div className={styles['right-action-wrapper']}>
            <AiOutlineSearch /> <AiOutlineDown />
          </div>
        </div>
      </div>

      <div className={styles['chat-body']}>
        <p className={styles['chat-message']}>
          {/* <span className={styles['chat-name']}>Elijah Obominuru</span> */}
          Hey Boss <span className={styles['chat-stamp']}>13:02pm</span>
        </p>
      </div>
      <div className={styles['chat-footer']}>Footer</div>
    </div>
  );
};

export default Chat;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import db from '../firebase';

import styles from './Chat.module.scss';
import Avatar from '../assets/placeholder.png';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai';
import { GrAttachment } from 'react-icons/gr';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { BsMic } from 'react-icons/bs';

type Props = {};

const Chat = (props: Props) => {
  const [input, setInput] = useState<string>('');
  const [seed, setSeed] = useState<string | number>('');
  const { groupId } = useParams();
  const [groupName, setGroupName] = useState<string>('');

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    console.log('You typed', input);

    setInput('');
  };

  useEffect(() => {
    if (groupId) {
      const functionName = async () => {
        const getCollections = collection(db, 'group');
        const querySnapshot = await getDocs(getCollections);

        querySnapshot.forEach((doc) => {
          if (doc.id === groupId) {
            setGroupName(doc.data().name);
          }
        });
      };
      functionName();
    }
  }, [groupId]);

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
            <h3>{groupName}</h3>
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

      <div className={styles['chat-footer']}>
        <div className={styles['action-icon-wrapper']}>
          <MdOutlineEmojiEmotions />
        </div>
        <div className={styles['action-icon-wrapper']}>
          <GrAttachment />
        </div>
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send
          </button>
        </form>
        <div className={styles['action-icon-wrapper']}>
          <BsMic />
        </div>
      </div>
    </div>
  );
};

export default Chat;

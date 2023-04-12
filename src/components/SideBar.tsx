import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, doc } from 'firebase/firestore';
import db from '../firebase';

import styles from './SideBar.module.scss';

import Avatar from '../assets/placeholder.png';
import { MdDonutLarge } from 'react-icons/md';
import { HiOutlinePencilAlt, HiOutlineUserGroup } from 'react-icons/hi';
// import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai';
import SideBarChat from './SideBarChat';

type Props = {};

type chatType = {
  name: string;
};

const SideBar = (props: Props) => {
  const [group, setGroup] = useState<chatType[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // setLoading(true);
    const getgroups = onSnapshot(collection(db, 'group'), (snapshot) => {
      const initgroup: chatType[] = [];
      snapshot.forEach((snap) => {
        initgroup.push(snap.data() as chatType);
      });

      setGroup(initgroup);
    });
    // setLoading(false);
    return () => {
      getgroups();
    };
  }, []);

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar-header']}>
        <img src={Avatar} alt="avatar" className={styles['sidebar-avatar']} />

        <div className={styles['sidebar-headerRight']}>
          <div className={styles['icon-button']}>
            <HiOutlineUserGroup />
          </div>
          <div className={styles['icon-button']}>
            <MdDonutLarge />
          </div>
          <div className={styles['icon-button']}>
            <HiOutlinePencilAlt />
          </div>
          <div className={styles['icon-button']}>
            <AiOutlineDown />
          </div>
        </div>
      </div>

      <div className={styles['sidebar-search']}>
        <span>
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          placeholder="Search or start new chat"
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
      </div>

      <div className={styles['sidebar-chats']}>
        <SideBarChat addNewChat />
        {group.map((single) => {
          return <SideBarChat name={single.name} key={single.name} />;
        })}
      </div>
    </div>
  );
};

export default SideBar;

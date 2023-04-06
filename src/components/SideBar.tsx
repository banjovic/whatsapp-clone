import React from 'react';
import styles from './SideBar.module.scss';

import Avatar from '../assets/placeholder.png';
import { MdDonutLarge } from 'react-icons/md';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import SideBarChat from './SideBarChat';

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar-header']}>
        <img src={Avatar} alt="avatar" className={styles['sidebar-avatar']} />

        <div className={styles['sidebar-headerRight']}>
          <div className={styles['icon-button']}>
            <MdDonutLarge />
          </div>
          <div className={styles['icon-button']}>
            <HiOutlinePencilAlt />
          </div>
          <div className={styles['icon-button']}>
            <BiDotsVerticalRounded />
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
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  );
};

export default SideBar;

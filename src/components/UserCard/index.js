import React from 'react';
import styles from './UserCard.module.css';
import Icon from '@mdi/react'
import { mdiCheck } from '@mdi/js';


function UserCard (props) {
  const {user} = props;
  return (
    <div className={styles.container}>
      <div className={styles.cardInfo}>
      <div className={styles.imageWrapper}>
      <img src={user.profilePicture} alt="user picture"/>
      </div>
      <div>
      <div className={styles.fullName}>{`${user.firstName} ${user.lastName}`}</div>
      <div className={styles.level}>{`${user.level}`}</div>
      </div>
      </div>
      <div className={styles.checkBox}>
        <Icon path={mdiCheck}
              size={1.2}
              color='white'
        />
      </div>
    </div>
  );
}

export default UserCard;


import React from 'react';
import style from './Profile.module.css';
import StatsItem from './StatsItem/Stats';
import PropTypes from 'prop-types';

const Profile = ({ user }) => (
  <div className={style.profile}>
    <div className={style.description}>
      <img
        src={user.avatar}
        alt="user avatar"
        className={style.avatar}
      />
      <p className={style.name}>{user.name}</p>
      <p className={style.tag}>@{user.tag}</p>
      <p className={style.location}>{user.location}</p>
    </div>
    <StatsItem arr={user.stats} />
  </div>
)

export default Profile;
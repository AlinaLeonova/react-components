import React from "react";
import './App.css';
import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friendsData from './data/friends.json';


function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title='UPLOAD STATS' stats={statisticalData} />
      <FriendList friends={friendsData}/>


    </>
  );
}

export default App;

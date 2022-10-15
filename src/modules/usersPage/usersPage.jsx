import { React, useState } from 'react';
import Header from './components/header/header';
import UserCard from './components/userCard/userCard';
import UserPopup from './components/userPopup/userPopup';
import './usersPageStyle.scss';

function UsersPage({ setShow }) {
  // const [show, setShow] = useState(false);

  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <Header />
          <UserCard />
          <UserPopup pop={setShow} />
        </div>
      </div>
    </div>
  );
}
export default UsersPage;

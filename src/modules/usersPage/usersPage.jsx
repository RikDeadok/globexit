import { React, useState } from 'react';
import Header from './components/header/header';
import UserCard from './components/userCard/userCard';
import UserPopup from './components/userPopup/userPopup';
import './usersPageStyle.scss';

function UsersPage() {
  const [show, setShow] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <Header setSearchInput={setSearchInput} />
          <UserCard setShow={setShow} searchInput={searchInput} />
          <UserPopup show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
}
export default UsersPage;

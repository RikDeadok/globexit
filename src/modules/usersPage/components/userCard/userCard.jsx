import { React, useState, useEffect } from 'react';
import './userCard.scss';

function UserCard({ setShow }) {
  const [users, setUsers] = useState([]);

  const getApiData = async () => {
    const response = await fetch(
      'http://127.0.0.1:3000/',
    ).then((response) => response.json());
    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  function popupShowHandleClick() {
    setShow(true);
  }

  return (
    <ul className="user-cards">
      {users.map((user) => (
        <li onClick={popupShowHandleClick} key={user.name}>
          <div className="user-card">
            <div className="user-card__title">{user.name}</div>
            <div className="user-card__info">
              <div className="info-item">
                <span className="_icon-phone" />
                <div className="info-item__description">{user.phone}</div>
              </div>
              <div className="info-item">
                <span className="_icon-email" />
                <div className="info-item__description">{user.email}</div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default UserCard;

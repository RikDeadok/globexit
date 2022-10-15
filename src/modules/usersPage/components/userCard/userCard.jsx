import { React, useState, useEffect } from 'react';
import './userCard.scss';

function UserCard({ setShow, searchInput }) {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const getApiData = async () => {
    const response = await fetch(
      'http://127.0.0.1:3000/',
    ).then((response) => response.json());
    setUsers(response);
    setFiltered(filterUsers(response, searchInput));
  };

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    setFiltered(filterUsers(users, searchInput));
  }, [searchInput]);

  function filterUsers(users, query) {
    query = query.trim().toLowerCase();

    if (query.length > 0) {
      let test = query.replace(/[\\\[\]\(\)\{\}]/g, '');

      let regexp = new RegExp(test, "i"), text;

      return users.filter((value) => {
        let name = value.name;

        text = name.trim().toLowerCase();

        return regexp.test(text);
      });
    }

    return users;
  }

  function popupShowHandleClick(user) {
    setShow(user);
  }

  return (
    <ul className="user-cards">
      {filtered.map((user) => (
        <li onClick={() => popupShowHandleClick(user)} key={user.name}>
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

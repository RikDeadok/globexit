import React from 'react';
import './userPopup.scss';

function UserPopup({ show, setShow }) {
  function popupCloseHandleClick() {
    setShow(false);
  }

  return (
    <div className={show ? 'popup__wrapper show' : 'popup__wrapper'}>
      <div className="popup">
        <button type="submit" className="popup__button" onClick={popupCloseHandleClick}>
          <span className="_icon-close" />
        </button>
        <div className="popup__title">{show.name}</div>
        <div className="popup__info">
          <div className="popup-item">
            <span className="popup-item__title">Телефон:</span>
            <div className="popup-item__description">{show.phone}</div>
          </div>
          <div className="popup-item">
            <span className="popup-item__title">Почта:</span>
            <div className="popup-item__description">{show.email}</div>
          </div>
          <div className="popup-item">
            <span className="popup-item__title">Дата приема:</span>
            <div className="popup-item__description">{show.hire_date}</div>
          </div>
          <div className="popup-item">
            <span className="popup-item__title">Должность:</span>
            <div className="popup-item__description">{show.position_name}</div>
          </div>
          <div className="popup-item">
            <span className="popup-item__title">Подразделение:</span>
            <div className="popup-item__description">{show.department}</div>
          </div>
        </div>
        <div className="popup-item _column">
          <span className="popup-item__title">Дополнительная информация:</span>
          <div className="popup-item__description">
            {show.address}
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserPopup;

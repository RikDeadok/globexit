import { React, useState } from 'react';
import './userPopup.scss';

function UserPopup({ pop }) {
  const [show, setShow] = useState(false);
  function popupShow() {
    setShow(pop);
  }
  popupShow()
  // function popupCloseHandleClick() {
  //   setShow(false);
  // }

  return (
    <div className={show ? 'popup__wrapper show' : 'popup__wrapper'}>
      <div className="popup">
        <button type="submit" className="popup__button">
          <span className="_icon-close" />
        </button>
        <div className="popup__title">Name</div>
        <div className="popup__info">
          <div className="popup-item">
            <span className="popup-item__title">Телефон:</span>
            <div className="popup-item__description">8 (965) 648 48 21</div>
          </div>
          <div className="popup-item">
            <span className="popup-item__title">Почта:</span>
            <div className="popup-item__description">iot@gmail.com</div>
          </div>
          <div className="popup-item">
            <span className="popup-item__title">Дата приема:</span>
            <div className="popup-item__description">Ноябрь 15 2022</div>
          </div>
          <div className="popup-item">
            <span className="popup-item__title">Должность:</span>
            <div className="popup-item__description">Какая то должность</div>
          </div>
          <div className="popup-item">
            <span className="popup-item__title">Подразделение:</span>
            <div className="popup-item__description">Какое то супер крутое подразделение</div>
          </div>
        </div>
        <div className="popup-item _column">
          <span className="popup-item__title">Дополнительная информация:</span>
          <div className="popup-item__description">
            Многа многа многа многа многа многа
            многа многа многа многа многа многа
            многа многа многа многа многа многа
            многа многа текста...
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserPopup;

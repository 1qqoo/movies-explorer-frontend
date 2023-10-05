import React from 'react';
import infoToltipSuccess from '../../images/Union.svg';
import infoToltipFailure from '../../images/Union-krestik.svg';
import { usePopupClose } from '../../hooks/usePopupClose';

const InfoTooltip = ({ onClose, isOpen, isRegister }) => {
  usePopupClose(isOpen, onClose);
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup_type_tooltip">
        <button
          className="popup__button-close"
          onClick={onClose}
          id="close-popup-profile"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img
          className="popup__image-status"
          src={isRegister.status ? infoToltipSuccess : infoToltipFailure}
          alt="Статус"
        ></img>
        <p className="popup__text-status">{isRegister.message}</p>
      </div>
    </div>
  );
};

export default InfoTooltip;

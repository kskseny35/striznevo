import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingSteps from '../components/BookingSteps';
import '../styles/BookingConfirmationPage.css';

const BookingConfirmationPage = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const [agree, setAgree] = useState(false);

  if (!data) {
    return <p style={{ textAlign: 'center' }}>Нет данных для подтверждения. Начните с выбора номера.</p>;
  }

  const { fullName, email, phone, checkIn, checkOut, room } = data;
  const nights = data.nights || 2;
  const deposit = Math.floor(room.price * 0.3);
  const total = room.price * nights;

  const handleFinish = () => {
    alert('Бронирование успешно завершено!');
  
    // можно очистить локальное хранилище / context здесь
  
    navigate('/'); // или navigate('/success'), если сделаешь отдельную страницу
  };

  return (
    <div className="confirmation-page">
      <BookingSteps currentStep={3} />

      <div className="summary">
        <div className="left">
          <p><strong>Ваше полное имя:</strong><br />{fullName}</p>
          <p><strong>Email:</strong><br />{email}</p>
          <p><strong>Мобильный телефон:</strong><br />{phone}</p>
          <p><strong>Заезд:</strong><br />{checkIn}</p>
          <p><strong>Выезд:</strong><br />{checkOut}</p>
          <p><strong>Способ оплаты:</strong><br />Оплатить позже</p>
        </div>

        <div className="right">
          <table>
            <thead>
              <tr>
                <th>{room.name}</th>
                <th>{nights} ноч{nights === 1 ? 'ь' : 'и'}</th>
                <th>{room.price.toLocaleString()} руб</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">Итого цена за номер (с налогами)</td>
                <td>{total.toLocaleString()} руб</td>
              </tr>
              <tr>
                <td colSpan="2">Размер депозита</td>
                <td>{deposit.toLocaleString()} руб</td>
              </tr>
              <tr>
                <td colSpan="2"><strong>Сумма к оплате</strong></td>
                <td><strong>{(total - deposit).toLocaleString()} руб</strong></td>
              </tr>
            </tbody>
          </table>

          <label className="agree">
            <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
            Я согласен с <a href="#">Правилами бронирования</a> и <a href="#">Политикой конфиденциальности</a>
          </label>

          <button
            disabled={!agree}
            className="finish-btn"
            onClick={handleFinish}
          >
            Завершить
          </button>

        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;

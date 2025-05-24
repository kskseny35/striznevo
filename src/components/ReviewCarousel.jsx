import React, { useState } from 'react';
import '../styles/ReviewCarousel.css';

const reviews = [
  {
    id: 1,
    author: 'Иван Петров',
    text: 'Отличный отдых! Номера чистые, персонал вежливый. Обязательно вернусь ещё раз.',
    avatar: '/assets/user1.jpg',
  },
  {
    id: 2,
    author: 'Анна Смирнова',
    text: 'Очень уютный дом! Все как на фото, даже лучше. Спасибо за гостеприимство.',
    avatar: '/assets/user2.jpg',
  },
  {
    id: 3,
    author: 'Олег Кузнецов',
    text: 'Тихо, красиво, природа — супер. Всем советую. Особенно понравился номер Deluxe.',
    avatar: '/assets/user3.jpg',
  },
];

const ReviewCarousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const { author, text, avatar } = reviews[index];

  return (
    <section className="review-carousel">
      <h2 className="section-title">Отзывы гостей</h2>
      <div className="review-card">
        <img className="avatar" src={avatar} alt={author} />
        <blockquote>{text}</blockquote>
        <p className="author">— {author}</p>
        <div className="carousel-controls">
          <button onClick={prev}>←</button>
          <button onClick={next}>→</button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;

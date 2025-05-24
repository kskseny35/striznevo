import React from 'react';
import '../styles/RoomPreviewGrid.css';

const previewRooms = [
  {
    id: 1,
    name: '2-х комнатный',
    description: ['Площадь номера 32 м²', '2 одноместные кровати + диван-кровать', '2 санузла'],
    image: '../assets/room/room_1.png',
  },
  {
    id: 2,
    name: '3-х комнатный',
    description: ['Площадь номера 64 м²', '2 двуспальные кровати + 2 одноместные', '2 санузла'],
    image: '../assets/room/room_2.png',
  },
  {
    id: 3,
    name: 'Deluxe',
    description: ['Площадь номера 120 м²', '1 большая кровать + доп. кровати', '2 санузла'],
    image: '../assets/room/room_3.png',
  },
];

const RoomPreviewGrid = () => {
  return (
    <section className="room-preview-section">
      <h2 className="section-title">НАШИ НОМЕРА</h2>
      <div className="room-preview-grid">
        {previewRooms.map(room => (
          <div key={room.id} className="room-preview-card" style={{ backgroundImage: `url(${room.image})` }}>
            <div className="overlay">
              <h3>{room.name}</h3>
              <ul>
                {room.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomPreviewGrid;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PlaceSection from '../components/PlaceSection';

const PlacesPage = () => {
  return (
    <>
      <Header />
      <h2 style={{ textAlign: 'center', margin: '40px 0' }}>Как провести время — рекомендуем!</h2>

      <PlaceSection
        title="База отдыха Y.E.S."
        images={[
         '../assets/rec_9.png',
          '../assets/rec_10.png',
          '../assets/rec_11.png',
          '../assets/rec_12.png'
        ]}
        description="Y.E.S. - это единственный на Северо-Западе Центр развлечений с аквапарком, зоопарком, динопарком, веревочным парком, загородным отелем, горнолыжным комплексом и настоящим рестораном – музеем. Расположен он в живописном месте среди полей и леса, в 33 километрах от города Вологды. Будни, выходные, отпуск – любой ваш день станет ярче в Центре Y.E.S.! Ведь наша главная цель – дарить гостям впечатления и позитивные эмоции!"
      />

      <PlaceSection
        title="Источник Николая Чудотворца"
        images={[
         '../assets/rec_1.png',
          '../assets/rec_2.png',
          '../assets/rec_3.png',
          '../assets/rec_4.png'
        ]}
        description="Сегодня комплекс Чудотворного источника Святителя Николая стал истинной жемчужиной на карте родников Вологодчины, местом умиротворения, чистоты и благодати.В морозном вековом еловом лесу с художественной подсветкой он выглядит поистине сказочно.Святой источник вблизи деревни Лягалово, что в двух километрах от деревни Стризнево Старосельского поселения Вологодского района, возрождается начиная с 2008 года."
        bgColor="#f9f9f9"
      />

      <PlaceSection
        title="Музей ретро автомобилей"
        images={[
          '../assets/rec_5.png',
          '../assets/rec_6.png',
          '../assets/rec_7.png',
          '../assets/rec_8.png'
        ]}
        description="Музей ретро автомобилей подарит вам отличную возможность насладиться красотой и изысканностью раритетных советских автомобилей и погрузиться в атмосферу того времени. Также, это шанс отдохнуть от дороги, разнообразить свой досуг и узнать нечто новое. В нашем музее вам расскажут историю ретро автомобилей. Вы узнаете, с чего все начиналось. К примеру, вы знали, что история советского автопрома берет начало в 1925 году, когда был разработан первый легковой автомобиль? В музее вас ждет еще много интересных фактов."
      />

      <Footer />
    </>
  );
};

export default PlacesPage;

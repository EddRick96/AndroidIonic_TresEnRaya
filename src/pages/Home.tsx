import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonCard, IonCardHeader, IonCardSubtitle,IonCardTitle, IonCardContent } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Slide1 from '../slide1/Slide1';
import Slide3 from '../slide3/Slide3';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>3n/</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <Slide1 />
          </IonSlide>
          <IonSlide>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Tres en raya</IonCardSubtitle>
                <IonCardTitle>Reglas del Juego</IonCardTitle>
              </IonCardHeader>

              <IonCardContent class="ion-text-justify">
              Cada jugador solo debe colocar su símbolo una vez por turno y no debe ser sobre una casilla ya jugada. En caso de que el jugador haga trampa el ganador será el otro. Se debe conseguir realizar una línea recta o diagonal por símbolo. Si el jugador marca una casilla, aunque sea la más mínima marca, deberá poner símbolo de la siguiente jugada en esa casilla. Se puede realizar movimientos horizontales, verticales y diagonales.

              </IonCardContent>
            </IonCard>
            
          </IonSlide>
          <IonSlide>
            <Slide3 />
          </IonSlide>
      </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Home;

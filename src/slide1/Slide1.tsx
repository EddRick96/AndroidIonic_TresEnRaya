import { IonContent} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Logo from '../img/logo.png';
import './Slide1.css';

const Slide1: React.FC = () => {
  return (
    <IonContent>
        <img src={Logo} alt="logo 3n/"/>
    </IonContent>
  );
};

export default Slide1;
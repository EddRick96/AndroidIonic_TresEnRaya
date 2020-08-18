import { IonGrid, IonRow} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Logo from '../img/logo.png';
import './Slide1.css';

const Slide1: React.FC = () => {
  return (
    <IonGrid>
        <IonRow className="ion-align-items-center">
            <img src={Logo} alt="logo 3n/"/>  
        </IonRow>
        
    </IonGrid>
  );
};

export default Slide1;
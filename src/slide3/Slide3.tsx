import { IonGrid, IonRow, IonButton, IonIcon} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Slide3.css';
import {star} from 'ionicons/icons';


const Slide3: React.FC = () => {
  return (
    <IonGrid>
        <IonRow className="ion-align-items-center">
          <IonButton color="primary">
            <IonIcon slot="start" icon={star} />
            Jugar
          </IonButton>
        </IonRow>
    </IonGrid>
  );
};

export default Slide3;
import { IonButton, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';
import './welcomepage.css';


const Welcome: React.FC = () => {
  
  return (

    <IonPage>
        <IonContent>
            <IonTitle>
                <h2>Hello, firstname.</h2>
            </IonTitle>
        </IonContent>
    </IonPage>

  );
};

export default Welcome;
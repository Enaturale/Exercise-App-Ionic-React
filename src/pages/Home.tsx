import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [present, dismiss] = useIonActionSheet();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Getting it Right!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Getting it Right!</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {/* <ExploreContainer /> */}
        <IonButton>Click Me!</IonButton>

        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [{ text: 'Ok' }, { text: 'Cancel' }],
              header: 'Action Sheet'
            })
          }
        >
          Show ActionSheet
        </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;

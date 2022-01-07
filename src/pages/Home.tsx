import { IonButton, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';
import './Home.css';
import fit from "../images/monday.png";

const Home: React.FC = () => {
  
  return (
    <IonPage   >      
      <IonContent fullscreen  >       
        <div  style={{backgroundImage:`url(${fit})`,fontSize:'16px',height: '570px' }} >
   
          <IonText>
            <h2 style={{color: "white", fontSize: '50px', marginLeft:'50px', 
            paddingTop:'140px'}}>
              Get Fit!
            </h2>
          </IonText>
        

        <IonButton fill="solid" expand="block"  color="danger" routerLink="/login"
          style={{fontSize:'16px', marginTop:'50px' }}>
          Get Started
        </IonButton>
        </div>                   
      </IonContent>
    </IonPage>
  );
};

export default Home;

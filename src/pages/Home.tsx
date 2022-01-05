import { IonButton, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './Home.css';
import fit from "../images/monday.png";

const Home: React.FC = () => {
  const [present, dismiss] = useIonActionSheet();
  return (
    <IonPage   >
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Get Fit!</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen  >

        {/* <IonText>
        <h2 style={{color: "red", marginTop:'160px', 
        fontSize:'30px', fontVariant:}}>
          Get FIT!
        </h2>
        </IonText> */}

        <div style={{ height: '560px'}}>
        <div  style={{backgroundImage:`url(${fit})`,fontSize:'16px',height: '570px' }} >
        <div style={{}}>
          <IonText>
            <h2 style={{color: "white", fontSize: '50px', marginLeft:'50px', 
            paddingTop:'140px'}}>
              Get Fit!
            </h2>
          </IonText>
        </div>

        <IonButton fill="solid" expand="block"  color="danger" onClick={() =>{}}
        style={{fontSize:'16px', marginTop:'50px' }}>
          Get Started
        </IonButton>
        </div>
        

        </div>



        
      
        
      </IonContent>
    </IonPage>
  );
};

export default Home;

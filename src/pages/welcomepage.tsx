import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonLabel, IonPage, IonText, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';
import './welcomepage.css';


const Welcome: React.FC = () => {
  
  return (

    <IonPage>
        <IonContent style={{overflow: 'hidden'}}>
            <IonTitle className="title">
                <h2>Hi, Firstname. < IonIcon style={{marginLeft:'49px'}}name='menu-outline'/> </h2>

                
            </IonTitle>
            <div className='container'>
              <div className='scroll'>

            <IonText >
                <p  className="pretext" >Your journey to fitness begins here!</p>
            </IonText>

            <IonCard>
              <IonCardHeader>
                <IonCardTitle className='title'>WorkOuts</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              <IonText ><p className="seemore">See more</p></IonText>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Squats</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>20 Squats per day</IonCardContent>
                </IonCard>

                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Squats</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>20 Squats per day</IonCardContent>
                </IonCard>

                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle >Squats</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>20 Squats per day</IonCardContent>
                </IonCard>
  
                
              </IonCardContent>             
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardTitle className='title'>Diets and  Nuritions</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Squats</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>20 Squats per day</IonCardContent>
                </IonCard>

                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Squats</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>20 Squats per day</IonCardContent>
                </IonCard>

              </IonCardContent>             
            </IonCard>

            </div>

            </div>
        </IonContent>
    </IonPage>

  );
};

export default Welcome;
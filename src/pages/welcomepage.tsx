import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';
import './welcomepage.css';
import squat from '../images/squat.png';
import donkey from '../images/donkey.png';
import rope from '../images/rope.jpg';
import cereal from '../images/cerealmeal.jpg';
import rice from '../images/rice.jpg';
import fruitsalad from '../images/fruitsalad.jpg';


const Welcome: React.FC = () => {
  
  return (

    <IonPage>
        <IonContent style={{overflow: 'hidden'}}>
          
            <IonTitle className="title">
                <h2 style={{}}>Hi, Firstname. 
                  < IonIcon style={{marginLeft:'49px',}}name='menu-outline'/> 
                </h2>                
            </IonTitle>
{/*             
            <div style={{height: '20px', backgroundColor: 'crimson'}}>

            </div> */}
        

            <div className='container'>
              <div className='scroll'>

            <IonText >
                <p  className="pretext" >Your journey to fitness begins here!</p>
            </IonText>

            <IonCard>
              <IonCardHeader>
                <IonCardTitle className='title1'>WorkOuts  
                <p className='seemore'>See All</p>                
                </IonCardTitle>                
              </IonCardHeader>
              <IonCardContent>

                <IonItem>
                  <IonLabel>
                    <h4 style={{fontWeight: 'bold', fontSize: '20px'}}>Squats</h4>
                    <p>20 Reps</p>
                    <IonImg  src={squat}/>
                  </IonLabel>
                </IonItem>

                <IonItem>
                <IonLabel>
                    <h4 style={{fontWeight: 'bold', fontSize: '20px'}}>Donkey Kicks</h4>
                    <p>20 Reps</p>
                    <IonImg  src={donkey}/>
                  </IonLabel>
                </IonItem>  

                <IonItem>
                <IonLabel>
                    <h4 style={{fontWeight: 'bold', fontSize: '20px'}}>Skip Rope</h4>
                    <p>50 Jumps</p>
                    <IonImg  src={rope}/>
                  </IonLabel>
                </IonItem>    
  
              </IonCardContent>             
            </IonCard>

            {/* The second card begins here */}

            <IonCard style={{marginTop: '20px'}}>
              <IonCardHeader>
                <IonCardTitle className='title1'>Diet Packs <p className='seemore'>See All</p>  </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              <IonItem>
                  <IonLabel>
                    <h4 style={{fontWeight: 'bold', fontSize: '20px'}}>Breakfast</h4>
                    <p>Fruit and Cereal Blend <br/> - 10 Receipes</p>
                    <IonImg  src={cereal}/>
                  </IonLabel>
                </IonItem>

                <IonItem>
                <IonLabel>
                    <h4 style={{fontWeight: 'bold', fontSize: '20px'}}>Lunch</h4>
                    <p>Rice/Pasta and Fish Sauce <br/>- 2 Receipes</p>
                    <IonImg  src={rice}/>
                  </IonLabel>
                </IonItem>  

                <IonItem>
                <IonLabel>
                    <h4 style={{fontWeight: 'bold', fontSize: '20px'}}>Dinner</h4>
                    <p>Fruit Salad - 3 Receipes</p>
                    <IonImg  src={fruitsalad}/>
                  </IonLabel>
                </IonItem>    

              </IonCardContent>             
            </IonCard>

            </div>

            </div>
        </IonContent>
    </IonPage>

  );
};

export default Welcome;
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSlides,  IonSlide,
   IonText, IonButton, IonSegment, IonSegmentButton, IonLabel, IonCard, IonList, IonItem, IonInput } from "@ionic/react"
import fit from "../images/monday.png";
import React, { useState } from "react";
import './Login.css';



// const Login: React.FC = () => {
  const Login = () => {
    const [registerActive, setRegisterActive] = useState<boolean>(true);
    const [loginActive, setLoginActive] = useState<boolean>(false);
  
    return(
        <IonPage>
          <IonHeader>
      <IonToolbar>
            <IonSegment  value={registerActive ? "register" : "login"} style={{paddingTop:'15px'}}>
              <IonSegmentButton
                value="register"
                onClick={() => {
                  setLoginActive(false);
                  setRegisterActive(true);
                }}
              >
                <IonLabel>Register</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                value="login"
                onClick={() => {
                  setRegisterActive(false);
                  setLoginActive(true);
                }}
              >
                <IonLabel>Login</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" >
          {registerActive ? (
            <IonCard className="card" style={{backgroundImage:`url(${fit})`,height: '460px', paddingTop:'10px'}}>
              <IonList style={{marginTop: '110px'}}>
                <IonItem>
                  <IonLabel position="floating">Email: </IonLabel>
                  <IonInput type="email"></IonInput>
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Username:</IonLabel>
                  <IonInput type="email"></IonInput>
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Password: </IonLabel>
                  <IonInput type="password"></IonInput>
                </IonItem>
              </IonList>

              <IonButton className="regBtn"  color="danger" routerLink="/welcome">
                Register
              </IonButton>
            </IonCard>
          ) : (
            <IonCard style={{backgroundImage:`url(${fit})`,fontSize:'16px',height: '480px' }}>
              <IonList style={{marginTop: '110px'}}>
                <IonItem>
                  <IonLabel position="floating">Username: </IonLabel>
                  <IonInput type="text"></IonInput>
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Password: </IonLabel>
                  <IonInput type="password"></IonInput>
                </IonItem>
              </IonList>

              <IonButton className="lgnBtn" color="primary" routerLink="/welcome">
                Log In
              </IonButton>
            </IonCard>
          )}
        </IonContent>
      
      </IonPage>
    )

}

export default Login;
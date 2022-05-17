import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { CapacitorConfig } from '@capacitor/cli';
import ExploreContainer from '../components/ExploreContainer';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Toast } from '@capacitor/toast';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notificaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Notificacion</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => newNotification()} expand="block" color='primary' shape='round'>Notificacion</IonButton>
        <IonButton onClick={() => showHelloToast()} expand="block" color='primary' shape='round'>Mostrar Toast</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
async function newNotification() {

  await LocalNotifications.schedule({
    notifications: [{
      title: 'Nueva Notificacion',
      body:   "Hola Mundo",
      id: 1,
      
    }]
  });
  console.log("listo");
}
const showHelloToast = async () => {
  await Toast.show({
    text: 'Hola Mundo',
  });
};

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { Browser } from '@capacitor/browser';
import { IonList, IonThumbnail, IonImg, } from '@ionic/react';

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 
  'data:image/png;base64,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', 
  text: 'Foto1' }];



const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Card Youtube</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Youtube</IonCardSubtitle>
            <IonCardTitle>¿Que es?</IonCardTitle>
          </IonCardHeader>
          <IonList>
            {items.map((image, i) => (
              <IonItem key={i}>
                <IonThumbnail slot="start">
                  <IonImg src={image.src} />
                </IonThumbnail>
                
              </IonItem>
            ))}
          </IonList>

          <IonCardContent>
            YouTube es un sitio web de origen estadounidense dedicado a compartir videos.
            Presenta una variedad de clips de películas, programas de televisión y vídeos
            musicales, así como contenidos amateur como videoblogs y YouTube Gaming.
          </IonCardContent>
        </IonCard>

        <IonButton onClick={() => openCapacitorSite()} expand="block" color='primary' shape='round'>Ir a youtube</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
const openCapacitorSite = async () => {
  await Browser.open({ url: 'https://www.youtube.com/' });
};
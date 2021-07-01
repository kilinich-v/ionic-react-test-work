import { IonAvatar, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react'
import avatar from '../../img/man.jpg'
import '@ionic/react/css/flex-utils.css'
import './DoctorHeader.css'

const DoctorHeader: React.FC = () => {
  return (
    <>
      <IonGrid>
        <IonRow className="ion-justify-content-center">
          <h1>Алексей Карачинский</h1>
        </IonRow>
        <IonRow className="ion-justify-content-center ion-align-items-center">
          <IonCol size="auto">
            <IonAvatar>
              <img src={avatar} alt="" />
            </IonAvatar>
          </IonCol>
          <IonCol size="auto">
            <p>Длительность консультации</p>
            <p>50 минут</p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  )
}

export default DoctorHeader

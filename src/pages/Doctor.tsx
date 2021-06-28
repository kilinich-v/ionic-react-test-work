import { IonContent, IonPage } from '@ionic/react'
import { DoctorHeader } from '../components/Doctor'
import { Appointment } from '../components/Appointment'

const Patient: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <DoctorHeader />
        <Appointment />
      </IonContent>
    </IonPage>
  )
}

export default Patient

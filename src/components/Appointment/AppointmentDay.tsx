import { useState } from 'react'
import { IonPage, IonDatetime } from '@ionic/react'

const AppointmentDay: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(Date())

  return (
    <IonPage>
      <IonDatetime
        pickerOptions={{
          buttons: [
            {
              text: 'Save',
              handler: () => console.log('Clicked Save!'),
            },
            {
              text: 'Log',
              handler: () => {
                console.log('Clicked Log. Do not Dismiss.')
                return false
              },
            },
          ],
        }}
        placeholder="Custom Options"
        displayFormat="hh-mm-A"
        value={selectedDate}
        onIonChange={e => setSelectedDate(e.detail.value!)}
      ></IonDatetime>
    </IonPage>
  )
}

export default AppointmentDay

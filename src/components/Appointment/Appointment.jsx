import { useState, useEffect } from 'react'
import { IonGrid, IonRow, IonButton, useIonPicker } from '@ionic/react'
import moment from 'moment'
import ReactWeeklyDayPicker from 'react-weekly-day-picker/lib'

const Appointment = ({ selectedDays }) => {
  const [present] = useIonPicker()
  const [currntDay, setCurrntDay] = useState('')

  function selectCurrentDay(day) {
    setCurrntDay(day)
    console.log(currntDay)
  }

  return (
    <IonGrid>
      <ReactWeeklyDayPicker daysCount={4} multipleDaySelect={false} selectedDays={[new Date()]}>
        {setCurrntDay(selectedDays)}
      </ReactWeeklyDayPicker>
    </IonGrid>
  )
}

export default Appointment

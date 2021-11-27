import React, { useState } from 'react'

import Profile from './components/Profile/Profile.component'
import Card from './components/Card/Card.component'
import { TimeType } from './components/Profile/Profile.utils'

import cardsData from './db/data.json'

import styles from './App.module.scss'

const App = () => {
    const [timeType, setTimeType] = useState(TimeType.DAILY)

    return (
        <div className={styles.dashboard}>
            <div className={styles.profile}>
                <Profile onTimeType={setTimeType} timeType={timeType} />
            </div>
            {cardsData.map((item) => (
                <Card data={item} timeType={timeType} key={item} />
            ))}
        </div>
    )
}

export default App

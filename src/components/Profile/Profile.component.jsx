import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import profileImage from '../../assets/images/image-jeremy.png'

import { TimeType } from './Profile.utils'

import styles from './Profile.module.scss'

const Profile = ({ onTimeType, timeType }) => {
    const handleButtonCLick = (type) => onTimeType(type)

    return (
        <div className={styles.profile}>
            <div className={styles.header}>
                <img
                    src={profileImage}
                    className={styles.profileImage}
                    alt="profile-image"
                />
                <div className={styles.profileTitle}>
                    <span className={styles.profileTitleReport}>
                        Report for
                    </span>
                    <span className={styles.profileTitleName}>
                        Jeremy Robson
                    </span>
                </div>
            </div>
            <div className={styles.menu}>
                <span
                    className={cn(styles.menuBtn, [
                        {
                            [styles.menuBtnActive]: timeType === TimeType.DAILY,
                        },
                    ])}
                    onClick={() => handleButtonCLick(TimeType.DAILY)}
                >
                    Daily
                </span>
                <span
                    className={cn(styles.menuBtn, [
                        {
                            [styles.menuBtnActive]:
                                timeType === TimeType.WEEKLY,
                        },
                    ])}
                    onClick={() => handleButtonCLick(TimeType.WEEKLY)}
                >
                    Weekly
                </span>
                <span
                    className={cn(styles.menuBtn, [
                        {
                            [styles.menuBtnActive]:
                                timeType === TimeType.MONTHLY,
                        },
                    ])}
                    onClick={() => handleButtonCLick(TimeType.MONTHLY)}
                >
                    Monthly
                </span>
            </div>
        </div>
    )
}

Profile.propTypes = {
    onTimeType: PropTypes.func,
    timeType: PropTypes.string,
}

export default Profile

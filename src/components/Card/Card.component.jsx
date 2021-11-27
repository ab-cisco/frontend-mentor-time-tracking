import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { CardType } from './Card.utils'
import { ReactComponent as IconEllipsis } from '../../assets/images/icon-ellipsis.svg'

import styles from './Card.module.scss'

const Card = ({ data, timeType }) => {
    const { title, timeframes } = data
    const { color, Icon } = CardType(title)

    return (
        <div className={styles.cardWrapper}>
            <div className={cn(styles.card, styles[color])}>
                <Icon className={styles.icon} />
                <div className={styles.cardInfo}>
                    <div className={styles.cardHeader}>
                        <span className={styles.cardHeaderTitle}>{title}</span>
                        <IconEllipsis className={styles.cardHeaderAdditional} />
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardBodyTime}>
                            {timeframes[timeType].current}hrs
                        </div>
                        <div className={styles.cardBodyPreviousTime}>
                            Last Week - {timeframes[timeType].previous}hrs
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object,
    timeType: PropTypes.string,
}

export default Card

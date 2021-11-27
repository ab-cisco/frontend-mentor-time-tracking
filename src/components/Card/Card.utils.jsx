import { ReactComponent as IconWork } from '../../assets/images/icon-work.svg'
import { ReactComponent as IconPlay } from '../../assets/images/icon-play.svg'
import { ReactComponent as IconStudy } from '../../assets/images/icon-study.svg'
import { ReactComponent as IconExercise } from '../../assets/images/icon-exercise.svg'
import { ReactComponent as IconSocial } from '../../assets/images/icon-social.svg'
import { ReactComponent as IconSelfCare } from '../../assets/images/icon-self-care.svg'

const cardColorType = {
    WORK: 'work',
    PLAY: 'play',
    STUDY: 'study',
    EXERCISE: 'exercise',
    SOCIAL: 'social',
    SELFCARE: 'self-care',
}

export const CardType = (type) => {
    switch (type) {
        case 'Work':
            return { color: cardColorType.WORK, Icon: IconWork }
        case 'Play':
            return { color: cardColorType.PLAY, Icon: IconPlay }
        case 'Study':
            return { color: cardColorType.STUDY, Icon: IconStudy }
        case 'Exercise':
            return { color: cardColorType.EXERCISE, Icon: IconExercise }
        case 'Social':
            return { color: cardColorType.SOCIAL, Icon: IconSocial }
        case 'Self Care':
            return { color: cardColorType.SELFCARE, Icon: IconSelfCare }
        default:
            return { color: null, Icon: null }
    }
}

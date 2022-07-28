import { useFela } from 'react-fela'
import BoxedAction from '../BoxedAction'
import styles from './styles'

const Question = ({ id, answers, copy, handleAnswerClick }) => {
  const { css, renderer } = useFela()

  const keyframe = () => ({
    from: {
      transform: 'translateY(50%)',
      opacity: 0
    },
    to: {
      transform: 'translateY(0)',
      opacity: 1
    }
  })

  const fadeSlideUp = renderer.renderKeyframe(keyframe)

  return (
    <>
      <p className={css(styles.question)}>
        {copy}
      </p>
      <div className={css(styles.buttonContainer(fadeSlideUp))}>
        {answers.map((answer, idx) => {
          return (
            <BoxedAction
              key={`${id}-${idx}`}
              extend={styles.button}
              onClick={() => handleAnswerClick(answer)}
              ele='button'>
              {answer.copy}
            </BoxedAction>
          )
        })}
      </div>
    </>
  )
}

export default Question
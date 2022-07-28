import { useState, useEffect } from 'react'
import Results from '../Results'
import Question from '../Question'
import styles from './styles'
import { useFela } from 'react-fela'

import data from '../../data.json'

const Quiz = () => {
  const [questions, setQuestions] = useState(null)
  const [progress, setProgress] = useState(0)
  const [shoes, setShoes] = useState(null)
  const { css } = useFela()

  useEffect(() => {
    if (data.questions) {
      setQuestions(data.questions)
    }
    if (data.shoes) {
      setShoes(data.shoes)
    }
  }, [])

  const handleAnswerClick = ({ nextQuestion, ratingIncrease }) => {
    setProgress(nextQuestion)
    setShoes(shoes.map((shoe) => {      
      return {
        ...shoe,
        rating: shoe.rating + ratingIncrease[shoe.id]
      }
    }))
  }

  const restartQuiz = () => {
    setShoes(data.shoes)
    setProgress(0)
  }

  if (!questions || !shoes) {
    return (
      <main className={css(styles.container)}>
        <img src='/images/loader.gif' alt='Loading the quiz' />
        <p className={css(styles.loadingText)}>
          We're running to get your results.
        </p>
      </main>
    )
  }

  if (progress === "") {
    return (
      <Results
        restartQuiz={restartQuiz} 
        shoes={shoes} />
    )
  }

  const currentQuestion = questions[progress]

  return (
    <main className={css(styles.container)}>
      <p className={css(styles.introText)}>
        Try On Quiz <br />
        30 Days Risk Free
      </p>
      {currentQuestion &&
        <Question
          key={currentQuestion.id} 
          handleAnswerClick={handleAnswerClick}
          {...currentQuestion} />
      }
    </main>
  )
}

export default Quiz
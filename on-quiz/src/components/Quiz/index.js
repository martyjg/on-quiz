import { useState, useEffect } from 'react'
import BoxedAction from '../BoxedAction'
import Results from '../Results'

import data from '../../data.json'

const Quiz = () => {

  const [questions, setQuestions] = useState(null)
  const [progress, setProgress] = useState(0)
  const [shoes, setShoes] = useState(null)

  useEffect(() => {
    console.log(data)
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
      <p>
        Loading...
      </p>
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
    <>
      <p>
        Try On Quiz <br />
        30 Days Risk Free
      </p>
      {currentQuestion &&
        <>
          <p>
            {currentQuestion.copy}
          </p>
          <div>
            {currentQuestion.answers.map((answer, idx) => {
              return (
                <BoxedAction
                  key={`${currentQuestion.id}-${idx}`}
                  onClick={() => handleAnswerClick(answer)}
                  ele='button'>
                  {answer.copy}
                </BoxedAction>
              )
            })}
          </div>
        </>
      }
    </>
  )
}

export default Quiz
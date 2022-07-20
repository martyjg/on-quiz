import { useState, useEffect } from 'react'
import BoxedAction from '../BoxedAction'

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

  if (!questions || !shoes) {
    return (
      <p>
        Loading...
      </p>
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
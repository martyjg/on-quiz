import BoxedAction from '../BoxedAction'
import styles from './styles'
import { useFela } from 'react-fela'

const Results = ({ shoes, restartQuiz }) => {
  const { css } = useFela()

  const highestRatedShoes = shoes.sort((a, b) => (
    b.rating - a.rating
  )).slice(0, 3)

  return (
    <main>
      <h1>Congratulations!</h1>
      <p>Based on your selection we've decided on the Cloudventure and Cloudflyer! Enjoy the 30 day trial!</p>
      {highestRatedShoes.map((shoe) => {
        return (
          <section key={shoe.id} className={css(styles.section)}>
            <img className={css(styles.image)} src={`/images/${shoe.name}.png`} alt={`The ${shoe.name} shoe.`} />
            <h2>{shoe.name}</h2>
            <BoxedAction extend={styles.link}>
              Shop now  
            </BoxedAction>
          </section>
        )
      })}
      <div className={css(styles.restartContainer)}>
        <button
          className={css(styles.restart)} 
          onClick={restartQuiz}>Restart Quiz</button>
      </div>
    </main>
  )
}

export default Results
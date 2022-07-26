import { Link } from 'react-router-dom'
import BoxedAction from '../BoxedAction'
import styles from './styles'
import { useFela } from 'react-fela'

const Home = () => {
  const { css } = useFela()

  return (
    <main className={css(styles.container)}>
      <h1 className={css(styles.heading)}>
        Take the quiz<br /> and try your first pair!
      </h1>
      <Link to="/quiz" className={css({ textDecoration: 'none' })}>
        <BoxedAction extend={styles.button}>
          Try On Trial
        </BoxedAction>
      </Link>
      <p className={css(styles.smallText)}>
        30 Days risk free
      </p>
    </main>
  )
}

export default Home
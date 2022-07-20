import { Link } from 'react-router-dom'
import BoxedLink from '../BoxedAction'

const Home = () => {
  return (
    <>
      <h1>
        Take the quiz and try your first pair!
      </h1>
      <Link to="/quiz">
        <BoxedLink backgroundColor="black">
          Try On Trial
        </BoxedLink>
      </Link>
      <p>
        30 Days risk free
      </p>
    </>
  )
}

export default Home
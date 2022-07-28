const question = {
  fontSize: '2rem',
  margin: '10rem 0',
  padding: '0 1rem',
}

const buttonContainer = (animationName) => ({
  animation: animationName,
  animationDuration: '0.8s',
  display: 'flex',
  margin: '0 -1rem',
})

const button = {
  margin: '0 1rem',
  width: '50%',
  border: '1px solid var(--white)',
  fontFamily: 'arial',
  fontSize: '1.5rem',
}

const styles = { question, buttonContainer, button }

export default styles
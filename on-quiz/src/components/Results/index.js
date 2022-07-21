const Results = ({ shoes, restartQuiz }) => {

  const highestRatedShoes = shoes.sort((a, b) => (
    b.rating - a.rating
  )).slice(0, 3)

  console.log(highestRatedShoes)

  return (
    <>
      <h1>Congratulations!</h1>
      <p>Based on your selection we've decided on the Cloudventure and Cloudflyer! Enjoy the 30 day trial!</p>
      {highestRatedShoes.map((shoe) => {
        return (
          <section>
            <h2>{shoe.name}</h2>
          </section>
        )
      })}
      <button onClick={restartQuiz}>Restart Quiz</button>
    </>
  )
}

export default Results
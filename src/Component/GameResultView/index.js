import {
  GameResultViewContainer,
  ResultLogoContainer,
  YouContainer,
  Description,
  ImageRecived,
  PlayAgainButton,
} from './StyledComponent'
// ROCK
// SCISSORS
// PAPER
const GameResultView = props => {
  const {
    initialSelected,
    randomMyNumber,
    choicesList,
    againPlay,

    finalResult,
  } = props
  const myUrl = choicesList.find(each => each.id === initialSelected)
  const playAgainButonClicked = () => {
    againPlay()
  }
  //   const initiatingFunction = (myValue, opponentValue) => {
  //      console.log(myValue, opponentValue)

  //     if (
  //       (myValue === 'ROCK' && opponentValue === 'SCISSORS') ||
  //       (myValue === 'SCISSORS' && opponentValue === 'PAPER') ||
  //       (myValue === 'PAPER' && opponentValue === 'ROCK')
  //     ) {
  //       return 'YOU WON'
  //     }
  //     if (myValue === opponentValue) {
  //       return 'DRAW'
  //     }
  //     return 'YOU LOSE'
  //   }
  //   myLastValue(
  //     initiatingFunction(initialSelected, choicesList[randomMyNumber].id),
  //   )

  return (
    <GameResultViewContainer>
      <ResultLogoContainer>
        <YouContainer>
          <Description>YOU</Description>
          <ImageRecived src={myUrl.imageUrl} alt="your choice" />
        </YouContainer>
        <YouContainer>
          <Description>OPPONENT</Description>
          <ImageRecived
            src={choicesList[randomMyNumber].imageUrl}
            alt="opponent choice"
          />
        </YouContainer>
      </ResultLogoContainer>
      <Description>{finalResult}</Description>
      <PlayAgainButton onClick={playAgainButonClicked} type="button">
        PLAY AGAIN
      </PlayAgainButton>
    </GameResultViewContainer>
  )
}

export default GameResultView

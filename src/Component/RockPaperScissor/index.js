import {Component} from 'react'
import Rules from '../Rules'
import PlayingView from '../PlayingView'
import GameResultView from '../GameResultView'

import {
  MainContainer,
  ScoreCardContainer,
  MainHeading,
  ScoreCardValue,
  ScoreValueFinal,
  Score,
  GameContainer,
} from './StyledComponent'
// import GameResultView from '../GameResultView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissor extends Component {
  state = {
    initialSelected: '',
    opponentSelected: '',
    randomMyNumber: 0,
    score: 0,
    isActive: true,
    resultStatus: '',
  }

  calculateScore = () => {
    const {initialSelected, opponentSelected} = this.state
    console.log(initialSelected, opponentSelected)
    let resultScore
    let message

    if (
      (initialSelected === 'ROCK' && opponentSelected === 'SCISSORS') ||
      (initialSelected === 'SCISSORS' && opponentSelected === 'PAPER') ||
      (initialSelected === 'PAPER' && opponentSelected === 'ROCK')
    ) {
      resultScore = +1
      message = 'YOU WON'
    } else if (initialSelected === opponentSelected) {
      resultScore = 0
      message = 'IT IS DRAW'
    } else {
      resultScore = -1
      message = 'YOU LOSE'
    }

    this.setState(prev => ({
      score: prev.score + resultScore,
      resultStatus: message,
    }))
  }

  buttonClickedCurrently = ID => {
    // const {initialSelected, randomMyNumber} = this.state
    // console.log(ID)

    const randomNumber = Math.floor(Math.random() * 3 + 0)
    // console.log(randomNumber)

    this.setState(
      {
        initialSelected: ID,
        opponentSelected: choicesList[randomNumber].id,
        randomMyNumber: randomNumber,
        isActive: false,
        //   finalResult: result,
      },
      this.calculateScore,
    )
  }

  againPlay = () => {
    this.setState(prev => ({isActive: true, score: prev.score}))
  }

  render() {
    const {
      initialSelected,
      isActive,
      randomMyNumber,
      score,
      resultStatus,
    } = this.state

    return (
      <MainContainer>
        <ScoreCardContainer>
          <MainHeading>
            ROCK
            <br /> PAPER <br />
            SCISSORS
          </MainHeading>
          <ScoreCardValue>
            <Score>Score</Score>
            <ScoreValueFinal>{score}</ScoreValueFinal>
          </ScoreCardValue>
        </ScoreCardContainer>
        {isActive ? (
          <GameContainer>
            {choicesList.map(each => (
              <PlayingView
                key={each.id}
                activeButton={this.buttonClickedCurrently}
                eachItem={each}
              />
            ))}
          </GameContainer>
        ) : (
          <GameResultView
            againPlay={this.againPlay}
            choicesList={choicesList}
            initialSelected={initialSelected}
            randomMyNumber={randomMyNumber}
            finalResult={resultStatus}
          />
        )}

        <Rules />
      </MainContainer>
    )
  }
}

export default RockPaperScissor

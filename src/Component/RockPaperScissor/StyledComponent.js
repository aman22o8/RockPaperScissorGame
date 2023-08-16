import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #223a5f;
  height: 100vh;
`

export const ScoreCardContainer = styled.div`
  width: 520px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
export const MainHeading = styled.h1`
  font-size: 25px;
  font-family: 'roboto';
  font-weight: 600;
  color: #ffffff;
`
export const ScoreCardValue = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  width: 120px;
  height: 125px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Score = styled.p`
  font-size: 30px;
  margin: 10px 0px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #223a5f;
`
export const ScoreValueFinal = styled(Score)`
  font-family:"Roboto"
  font-size: 32px;
  
  `
export const GameContainer = styled.ul`
  //   margin-top: 65px;
  display: flex;
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
`

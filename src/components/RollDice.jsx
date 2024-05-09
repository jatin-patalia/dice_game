import styled from "styled-components"

const RollDice = ({currentDice, rollDice}) => {

 


  return (

    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
/* margin-top:48px; */
display: flex;
align-items: center;
flex-direction: column;
cursor: pointer;

p{
  font-size:24px;
  margin: 0;
}
  
`
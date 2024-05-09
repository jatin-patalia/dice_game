import React from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import RollDice from './RollDice'
import { useState } from 'react'
import Rules from './Rules'

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError]=useState("");
    const [showRules, setShowRules]=useState(false)

    const generateRandomNumber = (min, max) => {
        console.log(Math.floor(Math.random() * (max - min) + min));
        return Math.floor(Math.random() * (max - min) + min);
    };

    const rollDice = () => {
        if (!selectedNumber) {
            setError("You haven't selected any number")
            return;
        }
        setError("");
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)
        }
        setSelectedNumber(undefined);
    }

    const resetScore=()=>{
        setScore(0);
    }

    return (
        <TopSection>
            <div className="topSection">
                <TotalScore score={score} />
                <NumberSelect setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} />
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice} />
            <div className="btns">
                <Button onClick={resetScore}> Reset Score </Button>
                <Button onClick= {()=>setShowRules(prev=>!prev)}> {showRules ? "Hide" : "Show"} Rules </Button>
            </div>
            {showRules && <Rules/>} 
        </TopSection>
    )
}

export default GamePlay

const TopSection = styled.main`
.topSection{
  display: flex ;
  justify-content: space-around;
  align-items: end;
}
.btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
   }
`

const Button= styled.button`
   padding: 10px 18px;
   background-color: #000000;
   border-radius: 5px;
   color: white;
   min-width: 220px;
   border: 1px solid transparent;
   font-size: 16px;
   transition: 0.4s background ease-in;
   cursor: pointer;


   &:hover{
    background-color: white;
    color:black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
   }
  
`
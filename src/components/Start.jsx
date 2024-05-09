import styled from "styled-components";


const Start = ({ toggleGame }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="game-title">
        <h1>Dice Game</h1>
        <div className="playBtn">
          <Button onClick={toggleGame}>Play now</Button>
        </div>
      </div>
    </Container>
  )
}

export default Start

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0px auto;
    align-items: center;
    .game-title h1{
        font-size: 96px;
        white-space: nowrap;
        text-transform:uppercase;
        margin: 0px auto ;
    }
    .game-title .playBtn{
    display: flex;
    justify-content: flex-end;
   }
`

const Button = styled.button`
   padding: 10px 18px;
   background-color: #000000;
   border-radius: 5px;
   color: white;
   min-width: 220px;
   border: 1px solid transparent;
   font-size: 16px;
   transition: 0.4s background ease-in;
   cursor: pointer;


   &:hover {
    background-color: white;
    color:black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
   }

`
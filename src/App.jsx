import { useState } from "react"
import Start from "./components/Start"
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <Start toggleGame={toggleGame} />}
    </>
  )
}

export default App

import { useState } from "react"
import Wrapper from "./ui/Wrapper"
import Screen from "./ui/Screen"
import ButtonBox from "./ui/ButtonBox"
import Button from "./ui/Button"
import { buttons } from "./buttons"
import { IAppState } from "./types/IAppState"

export default function App() {
  const [operand1, setOperand1] = useState("0")
  const [operator, setOperator] = useState("")
  const [operand2, setOperand2] = useState("")
  const [result, setResult] = useState("")

  const appState: IAppState = {
    operand1,
    setOperand1,
    operator,
    setOperator,
    operand2,
    setOperand2,
    result,
    setResult,
  }

  const output =
    operand1 + (operator && " " + operator) + (operand2 && " " + operand2)

  return (
    <Wrapper>
      <Screen resultValue={output} />
      <ButtonBox>
        {buttons.map(({ value, onClick, className }) => (
          <Button
            key={value}
            className={className}
            onClick={() => onClick(appState, value)}
          >
            {value}
          </Button>
        ))}
      </ButtonBox>
    </Wrapper>
  )
}

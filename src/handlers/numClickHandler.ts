import { IAppState } from "@/types/IAppState"

export const numClickHandler = (appState: IAppState, clickedValue: string) => {
  const {
    operand1,
    setOperand1,
    operator,
    setOperator,
    operand2,
    setOperand2,
    result,
    setResult,
  } = appState

  if (result !== "") {
    // if there is a result, clear the screen and start a new calculation
    setOperand1(clickedValue)
    setOperand2("")
    setOperator("")
    setResult("")
  } else if (!operator) {
    // if there is no operator, append the number to the first operand
    if (operand1.length < 10) {
      if (operand1 === "0") {
        setOperand1(clickedValue)
      } else {
        setOperand1((prev) => prev + clickedValue)
      }
    }
  } else {
    if (operand2.length < 10) {
      setOperand2((prev) => prev + clickedValue)
    }
  }
}

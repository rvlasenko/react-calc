import { IAppState } from "@/types/IAppState"

export const signClickHandler = (appState: IAppState, clickedValue: string) => {
  const {
    operand1,
    setOperand1,
    operator,
    setOperator,
    setOperand2,
    result,
    setResult,
  } = appState

  if (operand1 === "") {
    return
  }

  if (result !== "") {
    // if there is a result, use it as the first operand and start a new calculation
    setOperand1(result)
    setOperand2("")
    setOperator(clickedValue)
    setResult("")
  } else if (!operator) {
    setOperator(clickedValue)
  }
}

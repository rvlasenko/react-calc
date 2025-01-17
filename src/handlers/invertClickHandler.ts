import { IAppState } from "@/types/IAppState"

export const invertClickHandler = (appState: IAppState) => {
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
    setOperand1(String(-Number(result)))
    setOperand2("")
    setOperator("")
    setResult("")
  } else if (!operator) {
    setOperand1(String(-Number(operand1)))
  } else {
    setOperand2(String(-Number(operand2)))
  }
}

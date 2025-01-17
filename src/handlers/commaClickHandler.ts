import { IAppState } from "@/types/IAppState"

export const commaClickHandler = (appState: IAppState) => {
  const {
    operand1,
    setOperand1,
    operand2,
    setOperand2,
    operator,
    setOperator,
    result,
    setResult,
  } = appState

  if (result !== "") {
    setOperand1("0.")
    setOperand2("")
    setOperator("")
    setResult("")
  } else if (!operator) {
    if (!operand1.includes(".")) {
      setOperand1((prev) => prev + ".")
    }
  } else {
    if (!operand2.includes(".")) {
      setOperand2((prev) => prev + ".")
    }
  }
}

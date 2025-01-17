import { IAppState } from "@/types/IAppState"

export const equalsClickHandler = (appState: IAppState) => {
  const {
    operand1,
    setOperand1,
    operator,
    setOperator,
    operand2,
    setOperand2,
    setResult,
  } = appState

  let result

  switch (operator) {
    case "+":
      result = Number(operand1) + Number(operand2)
      break
    case "-":
      result = Number(operand1) - Number(operand2)
      break
    case "*":
      result = Number(operand1) * Number(operand2)
      break
    case "/":
      if (operand2 === "0" || operand2 === "") {
        result = 0
        alert("Division by zero is not allowed")
      } else {
        result = Number(operand1) / Number(operand2)
      }
      break
    default:
      result = 0
  }

  setResult(result.toString())
  setOperand1(result.toString())
  setOperand2("")
  setOperator("")
}

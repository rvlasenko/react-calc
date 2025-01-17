import { IAppState } from "@/types/IAppState"

export const clearClickHandler = (appState: IAppState) => {
  const { setOperand1, setOperand2, setOperator, setResult } = appState

  setOperand1("0")
  setOperand2("")
  setOperator("")
  setResult("")
}

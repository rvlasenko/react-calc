export interface IAppState {
  operand1: string
  setOperand1: (value: string) => void
  operand2: string
  setOperand2: (value: string) => void
  operator: string
  setOperator: (value: string) => void
  result: string
  setResult: (value: string) => void
}

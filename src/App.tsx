import { useState } from "react"
import Wrapper from "./ui/Wrapper"
import Screen from "./ui/Screen"
import ButtonBox from "./ui/ButtonBox"
import Button from "./ui/Button"
import { IBtnValues } from "./types/IBtnValues"

export default function App() {
  const [operand1, setOperand1] = useState("")
  const [operand2, setOperand2] = useState("")
  const [operator, setOperator] = useState("")
  const [result, setResult] = useState("")

  const screenValue = result !== "" ? result : operand1 + operator + operand2

  const numClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedNumber = event.currentTarget.textContent || ""

    if (result !== "") {
      // if there is a result, clear the screen and start a new calculation
      setOperand1(clickedNumber)
      setOperand2("")
      setOperator("")
      setResult("")
    } else if (!operator) {
      // if there is no operator, append the number to the first operand
      if (operand1.length < 10) {
        setOperand1((prev) => prev + clickedNumber)
      }
    } else {
      if (operand2.length < 10) {
        setOperand2((prev) => prev + clickedNumber)
      }
    }
  }

  const signClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedValue = event.currentTarget.textContent || ""

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

  const equalsClickHandler = () => {
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

  const clearClickHandler = () => {
    setOperand1("")
    setOperand2("")
    setOperator("")
    setResult("")
  }

  const commaClickHandler = () => {
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

  const invertClickHandler = () => {
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

  const btnValues: IBtnValues[] = [
    {
      value: "C",
      className: "btn-yellow col-span-2",
      onClick: clearClickHandler,
    },
    {
      value: "+-",
      className: "btn-orange",
      onClick: invertClickHandler,
    },
    {
      value: "/",
      className: "btn-orange",
      onClick: signClickHandler,
    },
    {
      value: 9,
      className: "btn-grey",
      onClick: numClickHandler,
    },
    {
      value: 8,
      className: "btn-grey",
      onClick: numClickHandler,
    },
    {
      value: 7,
      className: "btn-grey",
      onClick: numClickHandler,
    },
    {
      value: "*",
      className: "btn-orange",
      onClick: signClickHandler,
    },
    {
      value: 6,
      className: "btn-grey",
      onClick: numClickHandler,
    },
    {
      value: 5,
      className: "btn-grey",
      onClick: numClickHandler,
    },
    {
      value: 4,
      className: "btn-grey",
      onClick: numClickHandler,
    },
    {
      value: "-",
      className: "btn-orange",
      onClick: signClickHandler,
    },
    {
      value: 3,
      className: "btn-grey",
      onClick: numClickHandler,
    },
    {
      value: 2,
      className: "btn-grey",
      onClick: numClickHandler,
    },
    {
      value: 1,
      className: "btn-grey",
      onClick: numClickHandler,
    },
    {
      value: "+",
      className: "btn-orange",
      onClick: signClickHandler,
    },
    {
      value: 0,
      className: "btn-grey",
      onClick: numClickHandler,
    },
    {
      value: ".",
      className: "btn-grey",
      onClick: commaClickHandler,
    },
    {
      value: "=",
      className: "btn-green col-span-2",
      onClick: equalsClickHandler,
    },
  ]

  return (
    <Wrapper>
      <Screen resultValue={screenValue} />
      <ButtonBox>
        {btnValues.map((button) => {
          const { value, ...rest } = button
          return (
            <Button key={value} {...rest}>
              {value}
            </Button>
          )
        })}
      </ButtonBox>
    </Wrapper>
  )
}

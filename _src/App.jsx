import { useState } from "react"
import Wrapper from "./Wrapper"
import Screen from "./Screen"
import ButtonBox from "./ButtonBox"
import Button from "./Button"

export default function App() {
  const [enteredValue, setEnteredValue] = useState("")
  const [firstOperand, setFirstOperand] = useState("")
  const [secondOperand, setSecondOperand] = useState("")
  const [resultValue, setResultValue] = useState("")
  const [operator, setOperator] = useState("")

  const numClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML

    console.log(value)

    if (!operator) {
      setFirstOperand(firstOperand + value)
    } else {
      setSecondOperand(secondOperand + value)
    }

    setEnteredValue(enteredValue + value)
  }

  const signClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML

    if (!operator) {
      setOperator(value)
      setEnteredValue(enteredValue + value)
    }
  }

  const equalsClickHandler = () => {
    if (operator && firstOperand && secondOperand) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "*"
          ? a * b
          : a / b
      console.log(firstOperand, operator, secondOperand)
      setResultValue(
        math(Number(firstOperand), Number(secondOperand), operator)
      )

      // setCalc({
      //   ...calc,
      //   res:
      //     calc.num === "0" && calc.sign === "/"
      //       ? "Can't divide with 0"
      //       : math(Number(calc.res), Number(calc.num), calc.sign),
      //   sign: "",
      //   num: 0,
      // });
    }
  }

  const btnValues = [
    [
      {
        value: "C",
        className: "btn-yellow col-span-3",
        onClick: () => alert("C"),
      },
      {
        value: "/",
        className: "btn-orange",
        onClick: signClickHandler,
      },
    ],
    [
      {
        value: 7,
        className: "btn-grey",
        onClick: numClickHandler,
      },
      {
        value: 8,
        className: "btn-grey",
        onClick: numClickHandler,
      },
      {
        value: 9,
        className: "btn-grey",
        onClick: numClickHandler,
      },
      {
        value: "*",
        className: "btn-orange",
        onClick: signClickHandler,
      },
    ],
    [
      {
        value: 4,
        className: "btn-grey",
        onClick: numClickHandler,
      },
      {
        value: 5,
        className: "btn-grey",
        onClick: numClickHandler,
      },
      {
        value: 6,
        className: "btn-grey",
        onClick: numClickHandler,
      },
      {
        value: "-",
        className: "btn-orange",
        onClick: signClickHandler,
      },
    ],
    [
      {
        value: 1,
        className: "btn-grey",
        onClick: numClickHandler,
      },
      {
        value: 2,
        className: "btn-grey",
        onClick: numClickHandler,
      },
      {
        value: 3,
        className: "btn-grey",
        onClick: numClickHandler,
      },
      {
        value: "+",
        className: "btn-orange",
        onClick: signClickHandler,
      },
    ],
    [
      {
        value: 0,
        className: "btn-grey col-span-2",
        onClick: numClickHandler,
      },
      {
        value: "=",
        className: "btn-green col-span-2",
        onClick: equalsClickHandler,
      },
    ],
  ]

  return (
    <Wrapper>
      <Screen resultValue={resultValue} />
      <ButtonBox>
        {btnValues.flat().map((button) => {
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

import { useState } from "react"
import styles from "./App.module.css"

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

export default function App() {
  const [operand1, setOperand1] = useState("")
  const [operand2, setOperand2] = useState("")
  const [operator, setOperator] = useState("")
  const [result, setResult] = useState("")

  const numClickHandler = ({ target: { textContent } }) => {
    if (result !== "") {
      setOperand1(textContent)
      setOperand2("")
      setOperator("")
      setResult("")
    } else if (!operator) {
      setOperand1((prev) => prev + textContent)
    } else {
      setOperand2((prev) => prev + textContent)
    }
  }

  const signClickHandler = ({ target: { textContent } }) => {
    if (!operator) {
      setOperator(textContent)
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
      default:
        result = 0
    }

    setResult(result)
  }

  const clearClickHandler = () => {
    setOperand1("")
    setOperand2("")
    setOperator("")
    setResult("")
  }

  const NUMS = [
    {
      value: "C",
      className: "btn-yellow",
      onClick: clearClickHandler,
    },
    {
      value: "+",
      className: "btn-orange",
      onClick: signClickHandler,
    },
    {
      value: "-",
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
      value: 0,
      className: "btn-grey",
      onClick: numClickHandler,
    },
    {
      value: "=",
      className: "btn-orange",
      onClick: equalsClickHandler,
    },
  ]

  const screenValue = result !== "" ? result : operand1 + operator + operand2
  const hasResult = Boolean(result !== "")

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.screen, hasResult ? styles.result : "")}
      >
        {screenValue}
      </div>
      <div className={styles.buttons}>
        {NUMS.map((btn) => (
          <button
            key={btn.value}
            className={styles[btn.className]}
            onClick={btn.onClick}
          >
            {btn.value}
          </button>
        ))}
      </div>
    </div>
  )
}
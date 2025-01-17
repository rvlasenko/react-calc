import { clearClickHandler } from "./handlers/clearClickHandler"
import { commaClickHandler } from "./handlers/commaClickHandler"
import { equalsClickHandler } from "./handlers/equalsClickHandler"
import { invertClickHandler } from "./handlers/invertClickHandler"
import { numClickHandler } from "./handlers/numClickHandler"
import { signClickHandler } from "./handlers/signClickHandler"
import { IBtnValues } from "./types/IBtnValues"

export const buttons: IBtnValues[] = [
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
    value: "9",
    className: "btn-grey",
    onClick: numClickHandler,
  },
  {
    value: "8",
    className: "btn-grey",
    onClick: numClickHandler,
  },
  {
    value: "7",
    className: "btn-grey",
    onClick: numClickHandler,
  },
  {
    value: "*",
    className: "btn-orange",
    onClick: signClickHandler,
  },
  {
    value: "6",
    className: "btn-grey",
    onClick: numClickHandler,
  },
  {
    value: "5",
    className: "btn-grey",
    onClick: numClickHandler,
  },
  {
    value: "4",
    className: "btn-grey",
    onClick: numClickHandler,
  },
  {
    value: "-",
    className: "btn-orange",
    onClick: signClickHandler,
  },
  {
    value: "3",
    className: "btn-grey",
    onClick: numClickHandler,
  },
  {
    value: "2",
    className: "btn-grey",
    onClick: numClickHandler,
  },
  {
    value: "1",
    className: "btn-grey",
    onClick: numClickHandler,
  },
  {
    value: "+",
    className: "btn-orange",
    onClick: signClickHandler,
  },
  {
    value: "0",
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

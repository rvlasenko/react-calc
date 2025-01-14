import { Textfit } from "react-textfit"

export interface IProps {
  resultValue: string
}

export default function Screen(props: IProps) {
  const { resultValue } = props

  return (
    <div className="w-auto m-3 h-14 text-right space-y-2 py-2">
      <Textfit
        className="text-black h-14 font-bold text-3xl"
        mode="single"
        max={30}
      >
        {resultValue}
      </Textfit>
    </div>
  )
}

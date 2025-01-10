export default function Screen(props) {
  const { resultValue } = props

  return (
    <div className="w-auto m-3 h-14 text-right space-y-2 py-2">
      <div className="text-black font-bold text-3xl">{resultValue}</div>
    </div>
  )
}

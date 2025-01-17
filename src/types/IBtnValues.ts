import { IAppState } from "./IAppState"

export interface IBtnValues {
  value: string | number
  className: string
  onClick: (appState: IAppState, clickedValue: any) => void
}

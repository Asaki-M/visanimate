export interface AnimateFormData {
  prop: string
  cycle: number
  delay: number
  startState: number
  endState: number
  loop: boolean
}

export interface SendFormData {
  sendData: (data: AnimateFormData) => void
}

export interface TableGroupProps {
  animateList: AnimateFormData[]
}

export interface TableItemProps {
  item: AnimateFormData
  idx: number
}

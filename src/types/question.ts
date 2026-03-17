export type QuestionType =
  | 'text'
  | 'number'
  | 'date'
  | 'select'
  | 'textarea'
  | 'checkbox'

export type Question = {
  id: string
  label: string
  placeholder?: string
  type: QuestionType
  options?: { label: string; value: string }[]
}

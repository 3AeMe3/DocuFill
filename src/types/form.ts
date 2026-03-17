import { questions } from '../data/questions.ts'

export type Question = (typeof questions)[number]
export type QuestionId = Question['id']
export type Answers = Partial<Record<QuestionId, string>>

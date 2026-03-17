import { questions } from '../data/questions'
import { contractSections } from '../data/contractTemplate'
import { renderTemplate } from '../utils/renderTemplate'

type Question = (typeof questions)[number]
type QuestionId = Question['id']
type Answers = Partial<Record<QuestionId, string>>

type DocumentProps = {
  textForm: Answers
  activeField: QuestionId | ''
}

export default function DocumentView({ textForm, activeField }: DocumentProps) {
  return (
    <div className="contract bg-white space-y-4 overflow-y-scroll rounded-md p-7 border border-olive-300 shadow-xl my-2 h-3/4 ">
      {contractSections.map((section, index) => {
        const text = renderTemplate(section, textForm, activeField)
        const isTitle = section === 'CONTRATO DE ARRENDAMIENTO DE VIVIENDA'
        const isSubtitle = section === 'REUNIDOS' || section === 'EXPONEN'

        return (
          <p
            key={index}
            className={
              isTitle
                ? 'contract-title text-center font-bold text-md'
                : isSubtitle
                  ? 'text-center font-bold mt-8 text-md'
                  : 'text-sm'
            }
          >
            {text}
          </p>
        )
      })}
    </div>
  )
}

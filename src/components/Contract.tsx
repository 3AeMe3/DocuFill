import { useState } from 'react'
import { questions } from '../data/questions'
import DocumentView from './Document'
import Form from './Form'
import ProgressBar from './ProgressBar'

type Question = (typeof questions)[number]
type QuestionId = Question['id']
type Answers = Partial<Record<QuestionId, string>>

export default function Contract() {
  const [textForm, setTextForm] = useState<Answers>({})
  const [activeField, setActiveField] = useState<QuestionId | ''>('')
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [isSubmited, setIsSubmited] = useState(false)

  return (
    <main className="bg-[#f6f6f8] min-h-screen w-full p-10  ">
      <div className="mx-auto my-4 grid max-w-[75%] grid-cols-1 gap-5 lg:grid-cols-[0.5fr_1fr_0.5fr]">
        <div className="bg-white h-60 min-h-60 shadow-xl  w-[90%] rounded-2xl border border-olive-300 ">
          <Form
            onTextChange={setTextForm}
            onActiveFieldChange={setActiveField}
            indexQuestion={indexQuestion}
            onIndexQuestion={setIndexQuestion}
            onSubmited={setIsSubmited}
          />
        </div>

        <div>
          <p className="font-semibold text-black/40">
            VISTA PREVIA EN TIEMPO REAL
          </p>
          <DocumentView textForm={textForm} activeField={activeField} />
        </div>

        <div className="w-full max-w-3/4 mx-auto">
          <div className=" h-100 bg-white rounded-2xl shadow-lg">
            <ProgressBar
              data={textForm}
              indexQuestion={indexQuestion}
              isSubmited={isSubmited}
            />
          </div>
          <div className=" border border-blue-700/40 flex flex-col gap-3 h-60 max-h-60 my-5 p-5  bg-[#eaecf6] rounded-2xl shadow-lg">
            <span className="font-bold text-blue-800">Consejo Legal</span>
            <p className="text-olive-500">
              Recuerda que la fianza legal minima obligatoria para vivienda es
              de una mensualidad.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

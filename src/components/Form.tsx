import { useEffect } from 'react'
import { questions } from '../data/questions'
import { useForm, useWatch, type SubmitHandler } from 'react-hook-form'

type Question = (typeof questions)[number]
type QuestionId = Question['id']
type FieldName = `answer.${QuestionId}`
type Answers = Partial<Record<QuestionId, string>>

type FormValues = {
  answer: Answers
}

type FormProps = {
  onTextChange: (answers: Answers) => void
  onActiveFieldChange: (fieldId: QuestionId | null) => void
  indexQuestion: number
  onIndexQuestion: (prevIndex: number) => void
  onSubmited: (isSubmited: boolean) => void
}

export default function Form({
  onTextChange,
  onActiveFieldChange,
  indexQuestion,
  onIndexQuestion,
  onSubmited,
}: FormProps) {
  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      answer: {},
    },
    shouldUnregister: false,
  })

  const currentQuestion = questions[indexQuestion]
  const isLastStep = indexQuestion === questions.length - 1
  const fieldName = `answer.${currentQuestion.id}` as FieldName

  const allAnswers = useWatch({ control, name: 'answer' })

  useEffect(() => {
    onTextChange(allAnswers || {})
  }, [allAnswers, onTextChange])

  useEffect(() => {
    onActiveFieldChange(currentQuestion.id)
  }, [currentQuestion.id, onActiveFieldChange])

  const handleNextQuestion = async (): Promise<void> => {
    const isValid = await trigger(fieldName)
    if (!isValid) return
    //@ts-expect-error "ni idea"
    onIndexQuestion((prevIndex: number) => prevIndex + 1)
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('formulario enviado')
    console.log(data)
    onTextChange(data.answer || {}) //fuerza los ultimos datos reales
    onActiveFieldChange(null)
    onSubmited(true)
    ;(document.activeElement as HTMLElement | null)?.blur?.()
  }

  const currentError = errors.answer?.[currentQuestion.id]
  let customInput

  if (currentQuestion.type === 'select') {
    customInput = (
      <select
        id={currentQuestion.id}
        {...register(fieldName, {
          required: 'Este campo es obligatorio',
        })}
        className="border border-olive-400  rounded-md p-2"
        defaultValue={''}
      >
        <option value="" disabled>
          --- Seleccione una opción ---
        </option>
        {currentQuestion.options?.map((opts) => (
          <option key={opts.label} value={opts.value}>
            {opts.label}{' '}
          </option>
        ))}
      </select>
    )
  } else if (currentQuestion.type === 'textarea') {
    customInput = (
      <textarea
        className="border border-olive-400 p-2"
        key={currentQuestion.id}
        id={currentQuestion.id}
        placeholder={currentQuestion.placeholder}
        {...register(fieldName, { required: 'Este campo es obligatorio' })}
      ></textarea>
    )
  } else {
    customInput = (
      <input
        key={currentQuestion.id}
        id={currentQuestion.id}
        {...register(fieldName, { required: 'Este campo es obligatorio' })}
        type={currentQuestion.type}
        placeholder={currentQuestion.placeholder}
        className="bg-white border px-2 rounded-md border-olive-400"
      />
    )
  }

  return (
    <div className=" p-5 rounded-2xl">
      <form
        className=" flex flex-col gap-3 "
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !isLastStep) {
            const target = e.target as HTMLElement
            if (target.tagName !== 'TEXTAREA') {
              e.preventDefault()
              void handleNextQuestion()
            }
          }
        }}
      >
        <label className="font-semibold text-sm" htmlFor={currentQuestion.id}>
          {currentQuestion.label}
        </label>

        {customInput}

        {currentError && <p className="text-red-500">{currentError.message}</p>}

        {!isLastStep ? (
          <button
            className="mx-auto rounded-md px-3 py-2 bg-blue-600 text-white mt-auto cursor-pointer"
            type="button"
            onClick={handleNextQuestion}
          >
            Siguiente
          </button>
        ) : (
          <button
            className="mx-auto rounded-md px-3 py-2 bg-blue-600 text-white mt-auto cursor-pointer"
            type="submit"
          >
            Enviar
          </button>
        )}
      </form>
    </div>
  )
}

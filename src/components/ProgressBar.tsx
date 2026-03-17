import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { questions } from '../data/questions'
import { PDFDownloadLink } from '@react-pdf/renderer'
import DocumentPDF from '../pdf/DocumentPDF.tsx'

type ProgressBarProps = {
  indexQuestion: number
  isSubmited: boolean
}

export default function ProgressBar({
  indexQuestion,
  data,
  isSubmited,
}: ProgressBarProps) {
  const percentage = isSubmited
    ? 100
    : Math.trunc((indexQuestion * 100) / questions.length)

  return (
    <div className="h-full p-5 text-center">
      <h3 className="text-md font-semibold">Progreso del contrato</h3>

      <div className="relative mt-10">
        <CircularProgressbar
          className="size-40 font-semibold"
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: 'black',
            textSize: '15px',
            pathTransitionDuration: 0.5,
            pathColor: '#155dfc',
          })}
        />
        <p
          className={`absolute right-0 bottom-11 left-0 text-[12px] ${
            percentage === 100 ? 'text-green-500' : 'text-black/50'
          }`}
        >
          COMPLETADO
        </p>
      </div>

      <button
        className={`mt-10 inline-block rounded-lg border px-4 py-2 ${
          percentage === 100
            ? 'cursor-pointer border-blue-500 bg-blue-400 text-white'
            : 'pointer-events-none border-gray-300 bg-gray-300/20 text-black/20'
        }`}
      >
        <PDFDownloadLink
          document={<DocumentPDF data={data} />}
          fileName="contrato-arrendamiento.pdf"
        >
          {({ loading }) =>
            loading ? 'Generando Descarga...' : 'Descargar PDF'
          }
        </PDFDownloadLink>
      </button>
    </div>
  )
}

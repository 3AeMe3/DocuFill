import { Link } from 'react-router'
import Card from '../components/home/Card'
import Footer from '../components/home/Footer'

export default function Home() {
  return (
    <main className="  w-full h-screen flex-col items-center flex mt-10 ">
      <div className="my-10 w-full">
        <div className=" flex flex-col gap-5 items-center max-w-4/12 text-center mx-auto">
          <h1 className="text-5xl font-bold ">
            Crea documentos legales
            <span className="text-green-800"> sin esfuerzo</span>
          </h1>

          <p className="text-lg text-black/70">
            Responde un par de simples preguntas y genera completos y legales
            documentos instantaneos
          </p>

          <Link
            to={'/document'}
            className="bg-green-800 text-white px-3 py-2 rounded-xl"
          >
            Comienza Ya!
          </Link>
        </div>
        <div className="border-20 rounded-2xl shadow-2xl border-white  w-full h-20 max-w-3/6 min-h-3/4  mx-auto my-10 ">
          <Link
            to={'/document'}
            className="justify-center flex items-center h-full flex-col opacity-40 gap-3"
          >
            <img src="/svg/folder.svg" className="size-10 " />
            <p>Click aquí para empezar!</p>
          </Link>
        </div>
        <div className="w-full px-5  mx-auto  ">
          <h3 className="text-center text-3xl font-semibold">Como funciona</h3>
          <div className="w-20 mx-auto h-1 mt-2 bg-green-800"></div>
          <div className="flex gap-15 justify-center mt-10">
            <Card
              title="Responde preguntas"
              description="Nuestro formulario inteligente te guiara por medio de preguntas simples"
              img={'/svg/message-circle-more.svg'}
            />
            <Card
              title="Genera"
              description="Nuestro motor crea tu documento legal basado en respuestas unicas"
              img={'/svg/zap.svg'}
            />
            <Card
              title="Download/Print"
              description="Descargalo instantaniamente en formato PDF; listo para firmar y usar "
              img={'/svg/download.svg'}
            />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

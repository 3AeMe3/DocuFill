type CardProps = {
  title: string
  description: string
  img: string
}

export default function Card({ title, description, img }: CardProps) {
  return (
    <div className="w-60 flex flex-col gap-3 bg-white rounded-xl p-6">
      <div className="bg-green-200/40  self-start p-3 rounded-xl">
        <img src={img} />
      </div>
      <span className="font-bold text-md">{title}</span>
      <p className="text-black/70 text-sm ">{description}</p>
    </div>
  )
}

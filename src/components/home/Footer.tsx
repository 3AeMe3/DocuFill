import { Link } from 'react-router'
export default function Footer() {
  return (
    <div className="mt-5 bg-white text-black/60 px-5 h-20 mt-20">
      <div className="max-w-3/6  mx-auto items-center flex justify-between h-full">
        <span className="font-semibold text-green-800 text-lg">DocuFill</span>
        <ul className="flex gap-3">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/document'}>Document</Link>
          </li>
          <li>
            <Link to={'/'}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={'/'}>Legal</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

import { NavLink } from 'react-router'
export default function Navbar() {
  return (
    <header>
      <nav className="h-13 border border-olive-300  bg-white ">
        <div className=" flex  justify-between w-full h-full max-w-3/6 mx-auto gap-10 items-center ">
          <div>
            <a href="/" className="flex gap-2">
              <h1 className="font-semibold text-xl text-green-900">DocuFill</h1>
            </a>
          </div>
          <ul className="flex gap-5">
            <NavLink
              to={'/'}
              className={({ isActive }) => (isActive ? 'text-green-900' : '')}
              end
            >
              Home
            </NavLink>

            <NavLink
              to={'/document'}
              className={({ isActive }) => (isActive ? 'text-green-900' : '')}
            >
              Document
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  )
}

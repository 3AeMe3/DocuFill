import fileSVG from '/file-text.svg'
export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-around items-center  h-13 border border-olive-300 w-full ">
        <a href="/" className="flex gap-2">
          <img src={fileSVG} alt="web page logo " />
          <h1 className="font-semibold text-xl">DocuFill</h1>
        </a>
      </nav>
    </header>
  )
}

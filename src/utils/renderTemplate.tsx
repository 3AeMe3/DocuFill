export function renderTemplate(
  text: string,
  data: Record<string, string>,
  activeField?: string
) {
  //divide el texto en partes y ya que el regex tiene los paréntesis tambien conserva los framentos que coinciden {{algo}}
  const parts = text.split(/({{.*?}})/g)

  //recorre cada fragmentos del array ya sean palabras normales o placeholders ({{estos}})
  return parts.map((part, index) => {
    //intenta comprobar si ese fragmento tiene el formato de {{algo}} y si coincide se guarda en match

    //si coincide se guardaria algo asi  ["{{nombre}}", "nombre"] dentro de match
    const match = part.match(/{{(.*?)}}/)

    //si no lo encuentra
    if (!match) {
      //regresa un span mostrando el texto sin modificacion es decir no es un placeholder entonces se renderiza de forma normal
      return <span key={index}>{part}</span>
    }

    //declaramos variables

    //al key le dicemos que ahora tendra el valor de la segunda posicion del match (sin espacios)
    const key = match[1].trim()

    //busca en data un propiedad con ese nombre (key) y lo guarda en value
    const value = data[key]

    // si hay un valor y el valor quitandole los espacios no esta vacio entonces rertornamos el valor si no retornamos "___"
    const content = value && value.trim() !== '' ? value : '_______'

    //compara si el placeholder actual corresponde al campo activo si es asi isActive es true
    const isActive = key === activeField

    return (
      <span
        key={index}
        className={isActive ? 'bg-yellow-200 px-1 rounded' : ''}
      >
        {content}
      </span>
    )
  })
}

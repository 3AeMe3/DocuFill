export default function renderText(
  template: string,
  data: Record<string, unknown>
): string {
  return template.replace(/\{\{(.*?)\}\}/g, (_, rawKey) => {
    const key = String(rawKey).trim()
    const value = data[key]

    if (value === null || value === undefined || value === '') {
      return '_______'
    }

    return String(value)
  })
}

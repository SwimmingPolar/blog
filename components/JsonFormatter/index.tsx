import { useEffect, useState } from 'react'

type JsonFormatter = {
  path: string
}

export const JsonFormatter = () => {
  const [json, setJson] = useState(null)
  useEffect(() => {
    async function loadJson() {
      const json = (await import('../../data/part.json'))['default']
      setJson(json as any)
    }

    loadJson()
  }, [])

  return <pre>{JSON.stringify(json, null, 2)}</pre>
}

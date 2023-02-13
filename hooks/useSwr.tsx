import useSwrOriginal from 'swr'

const fetcher = (url: string) =>
  fetch(url).then(res => {
    if (res.status !== 200) {
      throw new Error('Fetch error')
    }
    return res.json()
  })

export const useSwr = <T,>(url: string | null) => {
  return useSwrOriginal<T>(url, fetcher)
}

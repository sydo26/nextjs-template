import useSWR, { responseInterface } from 'swr'

export default function useFetch<Data, Error>(
  url: string
): responseInterface<Data, Error> {
  const swrResult = useSWR<Data, Error>(
    url,
    async u => {
      const res = await fetch(u)
      const result = await res.json()
      return result
    },
    {}
  )

  return swrResult
}

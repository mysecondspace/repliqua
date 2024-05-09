import { useQuery } from 'graphql-hooks'

export const useCustomQuery = (QUERY) => {
  const { loading, error, data } = useQuery(QUERY)

  if (loading) return ['Loading...', null]
  if (error) return [`Error! ${error.message}`, null]

  return [null, data]
}

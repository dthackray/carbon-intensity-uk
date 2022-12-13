import { QueryClient, QueryClientProvider } from 'react-query'

import DataStatus from "./components/DataStatus"
const queryClient = new QueryClient()

export default function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <DataStatus />
      </QueryClientProvider>
  )
}
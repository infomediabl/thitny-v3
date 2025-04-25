import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Quiz from './components/Quiz'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
          <Quiz />
        </main>
      </NextUIProvider>
    </QueryClientProvider>
  )
}

export default App

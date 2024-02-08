import Header from "./components/Header"
import ContextProvider from "./context/Context"

function App() {
  return (
    <ContextProvider>
      <Header/>
    </ContextProvider>
  )
}

export default App
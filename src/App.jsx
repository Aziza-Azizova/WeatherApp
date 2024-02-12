import Header from "./components/Header"
import Week from "./components/Week"
import ContextProvider from "./context/Context"

function App() {
  return (
    <ContextProvider>
      <Header/>
      <Week/>
    </ContextProvider>
  )
}

export default App
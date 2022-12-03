import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { AppProvider } from "./context/AppContext"

function App() {

  return (
    <AppProvider>

      <div className="flex flex-col md:flex-row md:h-screen">
        <Header />
        <Main />
      </div>
    </AppProvider>
  )
}

export default App

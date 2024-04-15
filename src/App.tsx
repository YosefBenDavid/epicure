import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App

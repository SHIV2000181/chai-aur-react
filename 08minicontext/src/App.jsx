import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UsserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UsserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UsserContextProvider>
  )
}

export default App

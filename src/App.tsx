import { NavBar } from './common/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router'
import { NotificationProvider } from './context/Notification.context'
function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  )
}

export default App

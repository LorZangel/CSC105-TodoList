import Home from "./components/Home"
import Todo from "./components/Todo"

import { Route, Routes } from "react-router-dom"
import "./App.css"
import TodoPage from "./pages/TodoPage"
import TodayPage from "./pages/TodayPage"
import CalendarPage from "./pages/Calendar"
import HomePage from "./pages/Homepage"

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exect path="/" element={<Homepage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/calendar" element={<Calendar />} />

      </Routes>
    
    </div>
  )
}

export default App
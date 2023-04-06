import "./App.css";
import { Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar.jsx";
import Homepage from "./pages/Homepage.jsx";
import TodayPage from "./pages/TodayPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";

function App() {
  return (
    <Routes>
      <Route exec path="/" element={<Homepage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/today" element={<TodayPage />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}
export default App;
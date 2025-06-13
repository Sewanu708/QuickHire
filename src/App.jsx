import { Route, Routes } from "react-router"
import Layout from "./Layout"
import Home from "./Pages/Home"
import JobSearch from "./Pages/JobSearch"
import Profile from "./Pages/Profile"
import Applications from "./Pages/Applications"
import EmployerDashboard from "./Pages/EmployerDashboard"
function App() {

  return (
    <Routes>
      <Route  element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<JobSearch />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications" element={<EmployerDashboard />} />
      </Route>
    </Routes>
  )
}

export default App

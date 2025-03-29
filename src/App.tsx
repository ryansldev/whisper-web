import { Route, BrowserRouter as Router, Routes } from "react-router";
import { HomePage } from "./pages/home";
import { NeutralUiPage } from "./pages/neutral-ui";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/neutral-ui" element={<NeutralUiPage />} />
      </Routes>
    </Router>
  )
}

export default App

import { Route, BrowserRouter as Router, Routes } from "react-router";
import { HomePage } from "./pages/home";
import { NeutralUiPage } from "./pages/neutral-ui";
import { SignInPage } from "./pages/sign-in";
import { SignUpPage } from "./pages/sign-up";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/neutral-ui" element={<NeutralUiPage />} />
      </Routes>
    </Router>
  )
}

export default App

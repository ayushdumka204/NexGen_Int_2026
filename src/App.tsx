import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"

export default function App() {
  return window.location.pathname === "/contact" ? (
    <ContactPage />
  ) : (
    <HomePage />
  )
}

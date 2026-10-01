import { useEffect, useRef, useState } from "react"

const languages = [
  { code: "en", english: "English", native: "English" },
  { code: "hi", english: "Hindi", native: "हिन्दी" },
  { code: "bn", english: "Bengali", native: "বাংলা" },
  { code: "ta", english: "Tamil", native: "தமிழ்" },
  { code: "te", english: "Telugu", native: "తెలుగు" },
  { code: "mr", english: "Marathi", native: "मराठी" },
  { code: "gu", english: "Gujarati", native: "ગુજરાતી" },
  { code: "kn", english: "Kannada", native: "ಕನ್ನಡ" },
  { code: "ml", english: "Malayalam", native: "മലയാളം" },
  { code: "pa", english: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "ur", english: "Urdu", native: "اردو" },
  { code: "as", english: "Assamese", native: "অসমীয়া" },
  { code: "or", english: "Odia", native: "ଓଡ଼ିଆ" },
  { code: "ne", english: "Nepali", native: "नेपाली" },
  { code: "es", english: "Spanish", native: "Español" },
  { code: "fr", english: "French", native: "Français" },
  { code: "de", english: "German", native: "Deutsch" },
  { code: "it", english: "Italian", native: "Italiano" },
  { code: "pt", english: "Portuguese", native: "Português" },
  { code: "ar", english: "Arabic", native: "العربية" },
  { code: "zh-CN", english: "Chinese", native: "中文" },
  { code: "ja", english: "Japanese", native: "日本語" },
  { code: "ko", english: "Korean", native: "한국어" },
  { code: "id", english: "Indonesian", native: "Bahasa Indonesia" },
  { code: "th", english: "Thai", native: "ไทย" },
  { code: "vi", english: "Vietnamese", native: "Tiếng Việt" },
  { code: "ru", english: "Russian", native: "Русский" },
  { code: "tr", english: "Turkish", native: "Türkçe" },
  { code: "nl", english: "Dutch", native: "Nederlands" },
  { code: "pl", english: "Polish", native: "Polski" },
]

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string
            includedLanguages: string
            autoDisplay: boolean
          },
          elementId: string,
        ) => void
      }
    }
  }
}

function getCurrentLanguage() {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([^;]+)/)
  return match?.[1] ?? "en"
}

export default function LanguageSelector() {
  const [language, setLanguage] = useState("en")
  const [open, setOpen] = useState(false)
  const selectorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLanguage(getCurrentLanguage())

    if (!document.querySelector("#google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (!window.google) return
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: languages.map(({ code }) => code).join(","),
            autoDisplay: false,
          },
          "google_translate_element",
        )
      }

      const script = document.createElement("script")
      script.id = "google-translate-script"
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      document.body.appendChild(script)
    }

    const closeMenu = (event: MouseEvent) => {
      if (!selectorRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", closeMenu)
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.removeEventListener("mousedown", closeMenu)
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [])

  const changeLanguage = (code: string) => {
    setLanguage(code)
    setOpen(false)
    const expires = code === "en" ? "Thu, 01 Jan 1970 00:00:00 GMT" : ""
    const value = code === "en" ? "" : `/en/${code}`
    document.cookie = `googtrans=${value};path=/;${
      expires ? `expires=${expires};` : ""
    }`

    if (window.location.hostname.includes(".")) {
      document.cookie = `googtrans=${value};path=/;domain=.${window.location.hostname};${
        expires ? `expires=${expires};` : ""
      }`
    }

    window.location.reload()
  }

  return (
    <div
      className="language-selector notranslate"
      ref={selectorRef}
      translate="no"
    >
      <button
        className="language-selector__trigger interactive"
        type="button"
        aria-label="Change website language"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.8 12h16.4M12 3.5c2.3 2.4 3.5 5.2 3.5 8.5S14.3 18.1 12 20.5M12 3.5C9.7 5.9 8.5 8.7 8.5 12s1.2 6.1 3.5 8.5" />
        </svg>
        <span>{language === "zh-CN" ? "ZH" : language.toUpperCase()}</span>
        <i aria-hidden="true">⌄</i>
      </button>
      <div
        className={`language-selector__menu ${
          open ? "language-selector__menu--open" : ""
        }`}
        role="menu"
        aria-label="Website languages"
      >
        <div className="language-selector__heading">Select language</div>
        <div className="language-selector__list">
          {languages.map(({ code, english, native }) => (
            <button
              className={language === code ? "active" : ""}
              type="button"
              role="menuitemradio"
              aria-checked={language === code}
              onClick={() => changeLanguage(code)}
              key={code}
            >
              <span>{english}</span>
              <small>({native})</small>
              <i aria-hidden="true">{language === code ? "✓" : ""}</i>
            </button>
          ))}
        </div>
      </div>
      <div id="google_translate_element" aria-hidden="true" />
    </div>
  )
}

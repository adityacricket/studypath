import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/studypath/sw.js').catch((error) => {
      console.warn('StudyPath offline mode unavailable', error)
    })
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/studypath">
      <ErrorBoundary>
        <AppProvider>
          <App />
        </AppProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
)

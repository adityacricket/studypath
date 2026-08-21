import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('StudyPath UI error', error, info)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950">
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <div className="text-5xl">🛠️</div>
          <h1 className="mt-4 text-2xl font-black text-slate-900 dark:text-white">Something went wrong</h1>
          <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
            StudyPath hit an unexpected error. Your saved local progress is kept; try reloading first.
          </p>
          <button onClick={this.handleReload} className="btn-primary mt-6">
            Reload StudyPath
          </button>
        </div>
      </div>
    )
  }
}

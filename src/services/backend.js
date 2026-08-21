const API_BASE = import.meta.env.VITE_API_URL || ''

async function request(path, options = {}) {
  if (!API_BASE) {
    return { ok: false, configured: false, data: null, error: 'Backend not configured' }
  }

  try {
    const response = await fetch(`${API_BASE}${path}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    })

    const data = await response.json().catch(() => null)
    return {
      ok: response.ok,
      configured: true,
      status: response.status,
      data,
      error: response.ok ? null : data?.error || 'Request failed',
    }
  } catch (error) {
    return { ok: false, configured: true, data: null, error: error.message }
  }
}

export const backend = {
  isConfigured: Boolean(API_BASE),
  async me() {
    return request('/api/auth/me')
  },
  async login(credentials) {
    return request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    })
  },
  async signup(payload) {
    return request('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },
  async logout() {
    return request('/api/auth/logout', { method: 'POST' })
  },
  async exportData() {
    return request('/api/account/export')
  },
  async deleteAccount() {
    return request('/api/account', { method: 'DELETE' })
  },
  async createCheckout(plan) {
    return request('/api/billing/checkout', {
      method: 'POST',
      body: JSON.stringify({ plan }),
    })
  },
  async subscription() {
    return request('/api/billing/subscription')
  },
}

export default backend

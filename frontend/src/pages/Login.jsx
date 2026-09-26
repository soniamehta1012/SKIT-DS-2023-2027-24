import React, { useState } from 'react'
import { useLocation, useNavigate, Navigate, Link } from 'react-router-dom'
import { PawPrint, Mail, Lock, User, Eye, EyeOff, Leaf } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { user, login, signup } = useAuth()
  const [mode, setMode] = useState('login') // 'login' | 'signup'
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  if (user) return <Navigate to={from} replace />

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      if (mode === 'login') {
        await login({ email: form.email, password: form.password })
      } else {
        await signup(form)
      }
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-brand">
        <Link to="/" className="brand brand-onbrand">
          <span className="brand-mark"><PawPrint size={20} strokeWidth={2.4} /></span>
          Wildlife Vision
        </Link>
        <div className="auth-brand-content">
          <h1>Every photo has a story. Let's find out whose.</h1>
          <p>
            Sign in to save your detections, revisit your identification history, and
            keep exploring the animal kingdom, one image at a time.
          </p>
          <ul className="auth-brand-points">
            <li><Leaf size={16} /> Machine-learning powered species detection</li>
            <li><Leaf size={16} /> Personal history of every image you upload</li>
            <li><Leaf size={16} /> Built for students, researchers & enthusiasts</li>
          </ul>
        </div>
        <div className="auth-brand-deco" aria-hidden="true">🦌 🌿 🐾 🌲</div>
      </div>

      <div className="auth-form-wrap">
        <div className="auth-form-card">
          <div className="auth-tabs">
            <button
              className={'auth-tab' + (mode === 'login' ? ' auth-tab-active' : '')}
              onClick={() => setMode('login')}
              type="button"
            >
              Log In
            </button>
            <button
              className={'auth-tab' + (mode === 'signup' ? ' auth-tab-active' : '')}
              onClick={() => setMode('signup')}
              type="button"
            >
              Sign Up
            </button>
          </div>

          <h2>{mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
          <p className="auth-subtitle">
            {mode === 'login'
              ? 'Log in to continue identifying wildlife.'
              : 'Join Wildlife Vision to start building your detection history.'}
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            {mode === 'signup' && (
              <label className="field">
                <span className="field-label">Full name</span>
                <span className="field-input">
                  <User size={16} />
                  <input type="text" placeholder="Jordan Rivers" value={form.name} onChange={update('name')} required />
                </span>
              </label>
            )}

            <label className="field">
              <span className="field-label">Email</span>
              <span className="field-input">
                <Mail size={16} />
                <input type="email" placeholder="you@example.com" value={form.email} onChange={update('email')} required />
              </span>
            </label>

            <label className="field">
              <span className="field-label">Password</span>
              <span className="field-input">
                <Lock size={16} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={update('password')}
                  required
                  minLength={4}
                />
                <button type="button" className="field-toggle" onClick={() => setShowPassword((v) => !v)} aria-label="Toggle password visibility">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </span>
            </label>

            {error && <p className="form-error">{error}</p>}

            <button className="btn btn-primary auth-submit" type="submit" disabled={submitting}>
              {submitting ? 'Please wait…' : mode === 'login' ? 'Log In' : 'Create Account'}
            </button>
          </form>

          <p className="auth-switch">
            {mode === 'login' ? (
              <>Don&apos;t have an account? <button type="button" onClick={() => setMode('signup')}>Sign up</button></>
            ) : (
              <>Already have an account? <button type="button" onClick={() => setMode('login')}>Log in</button></>
            )}
          </p>

          <p className="auth-note">
            This demo uses a mock, frontend-only session — no data leaves your browser yet.
          </p>
        </div>
      </div>
    </div>
  )
}

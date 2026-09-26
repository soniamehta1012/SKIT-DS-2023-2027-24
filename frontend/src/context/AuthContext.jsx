import React, { createContext, useContext, useEffect, useState } from 'react'

/*
  AuthContext — FRONTEND-ONLY MOCK.
  This does not talk to MongoDB or any backend yet. It only simulates a
  logged-in state using localStorage so the UI (Login, protected routes,
  Navbar) behaves like a real app.

  To wire this up to your Node/Express + MongoDB backend later:
  1. Replace `login()` and `signup()` bodies with real fetch() calls to
     your API endpoints (e.g. POST /api/auth/login, POST /api/auth/signup).
  2. Store the JWT / session token returned by your backend instead of
     the fake user object below.
  3. Keep the same function names/signatures so no other component needs
     to change.
*/

const AuthContext = createContext(null)

const STORAGE_KEY = 'wv_auth_user'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
    setLoading(false)
  }, [])

  const login = async ({ email, password }) => {
    // MOCK: pretend to check credentials against a database.
    if (!email || !password) {
      throw new Error('Please enter both email and password.')
    }
    const fakeUser = { name: email.split('@')[0], email }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fakeUser))
    setUser(fakeUser)
    return fakeUser
  }

  const signup = async ({ name, email, password }) => {
    // MOCK: pretend to create a new user document in MongoDB.
    if (!name || !email || !password) {
      throw new Error('Please fill in every field.')
    }
    const fakeUser = { name, email }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fakeUser))
    setUser(fakeUser)
    return fakeUser
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

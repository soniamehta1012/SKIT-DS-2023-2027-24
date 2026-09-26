import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { PawPrint, Menu, X, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/history', label: 'History' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand">
          <span className="brand-mark"><PawPrint size={20} strokeWidth={2.4} /></span>
          Wildlife Vision
        </NavLink>

        <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => 'nav-link' + (isActive ? ' nav-link-active' : '')}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-right">
          {user ? (
            <button className="btn btn-ghost" onClick={handleLogout}>
              <LogOut size={16} /> Log out
            </button>
          ) : (
            <NavLink to="/login" className="btn btn-primary">Log in</NavLink>
          )}
          <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}

import React from 'react'
import { Brain, Leaf, ShieldCheck, Mountain } from 'lucide-react'

const items = [
  { icon: Brain, title: 'AI Powered', desc: 'Accurate & fast detection' },
  { icon: Leaf, title: 'Detailed Insights', desc: 'Species, diet, habitat & more' },
  { icon: ShieldCheck, title: 'Supports Conservation', desc: 'Helping protect wildlife' },
  { icon: Mountain, title: 'For a Greener Tomorrow', desc: 'Together for biodiversity' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {items.map(({ icon: Icon, title, desc }) => (
          <div className="footer-item" key={title}>
            <span className="footer-icon"><Icon size={20} /></span>
            <div>
              <p className="footer-title">{title}</p>
              <p className="footer-desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}

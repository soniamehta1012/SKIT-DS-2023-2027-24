import React from 'react'
import { Link } from 'react-router-dom'
import { Clock3, ChevronRight, Inbox } from 'lucide-react'
import { detections } from '../data/mockData.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function History() {
  const { user } = useAuth()

  return (
    <section className="history-page">
      <div className="page-heading">
        <span className="eyebrow-icon"><Clock3 size={16} /></span>
        <h1>Your identification history</h1>
        <p>
          {user?.name ? `Welcome back, ${user.name}. ` : ''}
          Every image you upload is saved here so you can revisit past results.
        </p>
      </div>

      {detections.length === 0 ? (
        <div className="empty-state">
          <Inbox size={28} />
          <p>No detections yet. Upload an image from the home page to get started.</p>
        </div>
      ) : (
        <div className="history-list">
          {detections.map((d) => (
            <Link to={`/results/${d.id}`} className="history-row" key={d.id}>
              <span className="history-emoji">{d.thumbnailEmoji}</span>
              <div className="history-main">
                <p className="history-animal">{d.animal}</p>
                <p className="history-scientific">{d.scientificName}</p>
              </div>
              <div className="history-confidence">
                <div className="confidence-track small">
                  <div className="confidence-fill" style={{ width: `${d.confidence}%` }} />
                </div>
                <span>{d.confidence}%</span>
              </div>
              <div className="history-date">
                <p>{d.date}</p>
                <p className="history-time">{d.time}</p>
              </div>
              <ChevronRight size={18} className="history-arrow" />
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

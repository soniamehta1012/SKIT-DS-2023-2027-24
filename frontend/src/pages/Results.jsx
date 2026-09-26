import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft, CheckCircle2, PawPrint, Trees, Ruler, Weight,
  Palette, Beef, Users2, Lightbulb, HeartPulse, ShieldAlert,
} from 'lucide-react'
import { detections, getDetectionById } from '../data/mockData.js'

export default function Results() {
  const { id } = useParams()
  const result = getDetectionById(id) || detections[0]

  const details = [
    { icon: PawPrint, label: 'Species', value: result.animal },
    { icon: Users2, label: 'Family', value: result.family },
    { icon: Beef, label: 'Food Habits', value: result.diet },
    { icon: Palette, label: 'Color', value: result.color },
    { icon: Trees, label: 'Habitat', value: result.habitat },
    { icon: Ruler, label: 'Size', value: result.size },
    { icon: Weight, label: 'Weight', value: result.weight },
    { icon: HeartPulse, label: 'Lifespan', value: result.lifespan },
    { icon: ShieldAlert, label: 'Conservation Status', value: result.conservationStatus },
  ]

  return (
    <section className="results-page">
      <Link to="/history" className="back-link"><ArrowLeft size={16} /> Back to history</Link>

      <div className="result-card result-card-full">
        <div className="result-photo large">
          <span className="result-emoji large">{result.thumbnailEmoji}</span>
        </div>

        <div className="result-summary">
          <span className="badge badge-success"><CheckCircle2 size={14} /> Detected</span>
          <h1>{result.animal}</h1>
          <p className="scientific-name">{result.scientificName}</p>
          <p className="result-meta">Analyzed on {result.date} at {result.time}</p>

          <div className="confidence">
            <div className="confidence-row">
              <span>Confidence Score</span>
              <span className="confidence-value">{result.confidence}%</span>
            </div>
            <div className="confidence-track">
              <div className="confidence-fill" style={{ width: `${result.confidence}%` }} />
            </div>
          </div>
        </div>

        <div className="details-block">
          <p className="details-heading"><PawPrint size={16} /> Animal Details</p>
          <ul className="details-list">
            {details.map(({ icon: Icon, label, value }) => (
              <li key={label}>
                <span className="details-icon"><Icon size={15} /></span>
                <span className="details-label">{label}</span>
                <span className="details-value">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="fun-fact">
          <span className="fun-fact-icon"><Lightbulb size={18} /></span>
          <div>
            <p className="fun-fact-heading">Fun Fact</p>
            <p>{result.funFact}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { 
  User, 
  Mail, 
  Star, 
  TrendingUp, 
  Calendar,
  ArrowRight,
  Download,
  Settings 
} from 'lucide-react'
import '../styles/pages/FigmaDesignPage.css'

/**
 * Figma Design Page - Node ID: 5-430
 * Built using TalkToFigma MCP and existing components
 * 
 * This page replicates the Figma design using our semantic token system
 * and Card components with proper Code Connect integration
 */
function FigmaDesignPage() {
  return (
    <div className="figma-page">
      <div className="figma-page__container">
        {/* Header Section */}
        <header className="figma-page__header">
          <h1 className="figma-page__title">
            Design System Showcase
          </h1>
          <p className="figma-page__subtitle">
            Built with semantic tokens and Figma Code Connect integration
          </p>
        </header>

        {/* Card Grid Layout - Matches Figma Design */}
        <div className="figma-page__grid">
          
          {/* Simple Card - Node: 5-403 */}
          <Card 
            title="Simple Card"
            description="Basic card with clean design and minimal content"
            showDivider={false}
            className="figma-card"
          >
            <div className="card-content">
              <p style={{ 
                margin: 0, 
                color: 'var(--content-secondary)',
                fontSize: 'var(--text-sm)'
              }}>
                This is a simple card without divider, showcasing clean typography and spacing.
              </p>
            </div>
          </Card>

          {/* Card with Divider - Node: 5-604 */}
          <Card 
            title="Card with Divider"
            description="Enhanced card with visual separator for better content organization"
            showDivider={true}
            className="figma-card"
          >
            <div className="card-metrics">
              <div className="metric">
                <span className="metric__value">245</span>
                <span className="metric__label">Total Views</span>
              </div>
              <div className="metric">
                <span className="metric__value">18</span>
                <span className="metric__label">Comments</span>
              </div>
            </div>
          </Card>

          {/* Elevated Card with Button - Node: 5-405 */}
          <Card 
            title="Elevated Card"
            description="Premium card with enhanced shadow and interactive elements"
            showDivider={true}
            className="figma-card card--elevated"
          >
            <div className="card-actions">
              <Button 
                variant="primary" 
                icon={<ArrowRight size={16} />}
                iconPosition="right"
                size="sm"
              >
                Learn More
              </Button>
              <Button 
                variant="outline" 
                icon={<Download size={16} />}
                size="sm"
              >
                Download
              </Button>
            </div>
          </Card>

          {/* Profile Card */}
          <Card 
            title="Team Member"
            description="User profile with contact information and status"
            className="figma-card"
          >
            <div className="profile-card">
              <div className="profile-card__avatar">
                <User size={32} />
              </div>
              <div className="profile-card__info">
                <h4 className="profile-card__name">Sarah Johnson</h4>
                <p className="profile-card__role">Senior Designer</p>
                <p className="profile-card__email">sarah.j@company.com</p>
              </div>
              <div className="profile-card__actions">
                <Button variant="outline" size="sm" icon={<Mail size={14} />}>
                  Contact
                </Button>
              </div>
            </div>
          </Card>

          {/* Stats Card */}
          <Card 
            title="Analytics Overview"
            description="Key performance metrics and insights"
            className="figma-card card--outlined"
          >
            <div className="stats-grid">
              <div className="stat-item">
                <TrendingUp size={20} style={{ color: 'var(--color-success-500)' }} />
                <span className="stat-item__value">+12.5%</span>
                <span className="stat-item__label">Growth</span>
              </div>
              <div className="stat-item">
                <Star size={20} style={{ color: 'var(--color-warning-500)' }} />
                <span className="stat-item__value">4.8</span>
                <span className="stat-item__label">Rating</span>
              </div>
              <div className="stat-item">
                <Calendar size={20} style={{ color: 'var(--color-primary-500)' }} />
                <span className="stat-item__value">24</span>
                <span className="stat-item__label">Days</span>
              </div>
            </div>
          </Card>

          {/* Settings Card */}
          <Card 
            title="System Configuration"
            description="Manage your application settings and preferences"
            className="figma-card card--compact"
          >
            <div className="settings-panel">
              <div className="setting-item">
                <span className="setting-item__label">Dark Mode</span>
                <Button variant="outline" size="sm">Disabled</Button>
              </div>
              <div className="setting-item">
                <span className="setting-item__label">Notifications</span>
                <Button variant="primary" size="sm">Enabled</Button>
              </div>
              <div className="setting-actions">
                <Button variant="outline" icon={<Settings size={14} />} size="sm">
                  Advanced
                </Button>
              </div>
            </div>
          </Card>

        </div>

        {/* Footer Section */}
        <footer className="figma-page__footer">
          <p className="figma-page__footer-text">
            Built with Figma Code Connect • Semantic Design Tokens • React Components
          </p>
        </footer>

      </div>
    </div>
  )
}

export default FigmaDesignPage
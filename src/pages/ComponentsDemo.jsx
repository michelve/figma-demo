import React from 'react'
import Button from '../components/ui/Button'
import Checkbox from '../components/ui/Checkbox'
import Card from '../components/ui/Card'
import TypographyDemo from '../components/TypographyDemo'
import { 
  Search, 
  Download, 
  ArrowRight, 
  Plus, 
  X, 
  Heart, 
  Settings, 
  Type,
  Package,
  User,
  Mail,
  Calendar
} from 'lucide-react'
import '../styles/pages/ComponentsDemo.css'

function ComponentsDemo() {
  const [activeTab, setActiveTab] = React.useState('components')

  // Checkbox states
  const [basicChecked, setBasicChecked] = React.useState(false)
  const [terms, setTerms] = React.useState(false)
  const [newsletter, setNewsletter] = React.useState(true)
  const [disabled] = React.useState(true)

  return (
    <div className="demo">
      <div className="demo__container">
        <header className="demo__header">
          <h1 className="demo__title">Design System Showcase</h1>
          <p className="demo__subtitle">
            Custom components and typography built with semantic design tokens
          </p>
          
          {/* Tab Navigation */}
          <div className="demo__tabs">
            <Button 
              variant={activeTab === 'components' ? 'primary' : 'outline'}
              icon={<Package />}
              iconPosition="left"
              onClick={() => setActiveTab('components')}
            >
              Components
            </Button>
            <Button 
              variant={activeTab === 'typography' ? 'primary' : 'outline'}
              icon={<Type />}
              iconPosition="left"
              onClick={() => setActiveTab('typography')}
            >
              Typography
            </Button>
          </div>
        </header>

        {/* Components Tab */}
        {activeTab === 'components' && (
          <>
            {/* Button Component Showcase */}
            <section className="demo__section">
              <div className="demo__section-header">
                <h2 className="demo__section-title">Button Component</h2>
                <p className="demo__section-desc">
                  Flexible button component with multiple variants, sizes, and icon support
                </p>
              </div>

          {/* Basic Variants */}
          <div className="demo__group">
            <h3 className="demo__group-title">Variants</h3>
            <div className="demo__row">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </div>

          {/* Sizes */}
          <div className="demo__group">
            <h3 className="demo__group-title">Sizes</h3>
            <div className="demo__row demo__row--center">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* With Icons */}
          <div className="demo__group">
            <h3 className="demo__group-title">With Icons</h3>
            <div className="demo__row">
              <Button variant="primary" icon={<Search />} iconPosition="left">
                Search
              </Button>
              <Button variant="secondary" icon={<Download />} iconPosition="left">
                Download
              </Button>
              <Button variant="outline" icon={<ArrowRight />} iconPosition="right">
                Continue
              </Button>
            </div>
          </div>

          {/* Icon Only */}
          <div className="demo__group">
            <h3 className="demo__group-title">Icon Only</h3>
            <div className="demo__row demo__row--center">
              <Button variant="primary" icon={<Search />} iconPosition="only" />
              <Button variant="secondary" icon={<Settings />} iconPosition="only" />
              <Button variant="outline" icon={<Heart />} iconPosition="only" />
              <Button variant="primary" icon={<Plus />} iconPosition="only" size="sm" />
              <Button variant="outline" icon={<X />} iconPosition="only" size="lg" />
            </div>
          </div>

          {/* Disabled States */}
          <div className="demo__group">
            <h3 className="demo__group-title">Disabled States</h3>
            <div className="demo__row">
              <Button variant="primary" disabled>Primary Disabled</Button>
              <Button variant="secondary" disabled>Secondary Disabled</Button>
              <Button variant="outline" disabled>Outline Disabled</Button>
              <Button variant="primary" icon={<Search />} disabled>
                Disabled with Icon
              </Button>
            </div>
          </div>
        </section>

        {/* Checkbox Component */}
        <section className="demo__section">
          <h2 className="demo__section-title">Checkbox Component</h2>
          <p className="demo__section-description">
            Simple checkbox component with default, readonly, and disabled variants
          </p>

          {/* Variants */}
          <div className="demo__group">
            <h3 className="demo__group-title">Variants</h3>
            <div className="demo__row demo__row--center">
              <Checkbox 
                variant="default"
                label="Default" 
                checked={basicChecked}
                onChange={(e) => setBasicChecked(e.target.checked)}
              />
              <Checkbox 
                variant="readonly"
                label="Readonly" 
                checked={true}
                onChange={() => {}}
              />
              <Checkbox 
                variant="disabled"
                label="Disabled" 
                checked={disabled}
                onChange={() => {}}
              />
            </div>
          </div>

          {/* States */}
          <div className="demo__group">
            <h3 className="demo__group-title">States</h3>
            <div className="demo__row demo__row--center">
              <Checkbox 
                label="Unchecked" 
                checked={false}
                onChange={() => {}}
              />
              <Checkbox 
                label="Checked" 
                checked={true}
                onChange={() => {}}
              />
              <Checkbox 
                label="Indeterminate" 
                checked={false}
                indeterminate={true}
                onChange={() => {}}
              />
            </div>
          </div>

          {/* With Descriptions */}
          <div className="demo__group">
            <h3 className="demo__group-title">With Descriptions</h3>
            <div className="demo__row demo__row--vertical">
              <Checkbox 
                label="Accept Terms and Conditions" 
                description="By checking this box, you agree to our Terms of Service and Privacy Policy."
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
              />
              <Checkbox 
                label="Subscribe to Newsletter" 
                description="Get weekly updates about new features and product announcements."
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
              />
              <Checkbox 
                variant="readonly"
                label="Readonly with Description" 
                description="This checkbox is in readonly mode and cannot be changed."
                checked={true}
                onChange={() => {}}
              />
            </div>
          </div>

          {/* Without Labels */}
          <div className="demo__group">
            <h3 className="demo__group-title">Without Labels</h3>
            <div className="demo__row demo__row--center">
              <Checkbox 
                checked={false}
                onChange={() => {}}
              />
              <Checkbox 
                checked={true}
                onChange={() => {}}
              />
              <Checkbox 
                checked={false}
                indeterminate={true}
                onChange={() => {}}
              />
              <Checkbox 
                variant="disabled"
                checked={true}
                onChange={() => {}}
              />
            </div>
          </div>
        </section>

        {/* Card Component Showcase */}
        <section className="demo__section">
          <div className="demo__section-header">
            <h2 className="demo__section-title">Card Component</h2>
            <p className="demo__section-desc">
              Structured card component with header, description, divider, and flexible content areas
            </p>
          </div>

          {/* Basic Cards */}
          <div className="demo__group">
            <h3 className="demo__group-title">Basic Cards</h3>
            <div className="demo__row demo__row--cards">
              <Card 
                title="Simple Card"
                description="A basic card with title and description only."
              />
              
              <Card 
                title="Card with Content"
                description="This card includes content below the divider."
              >
                <div style={{ padding: '16px', backgroundColor: 'var(--surface-muted)', borderRadius: '4px' }}>
                  <p style={{ margin: 0, color: 'var(--content-secondary)' }}>
                    This is the flexible content area. It can contain any React components.
                  </p>
                </div>
              </Card>

              <Card 
                title="User Profile"
                description="Profile card with user information and actions."
              >
                <div className="card-profile">
                  <div className="card-profile__info">
                    <div className="card-profile__avatar">
                      <User size={24} />
                    </div>
                    <div className="card-profile__details">
                      <h4 style={{ margin: 0, color: 'var(--content-primary)' }}>John Doe</h4>
                      <p style={{ margin: 0, color: 'var(--content-secondary)', fontSize: 'var(--text-sm)' }}>
                        john.doe@example.com
                      </p>
                    </div>
                  </div>
                  <div className="card-profile__actions">
                    <Button variant="outline" size="sm" icon={<Mail />}>
                      Contact
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Card Variants */}
          <div className="demo__group">
            <h3 className="demo__group-title">Card Variants</h3>
            <div className="demo__row demo__row--cards">
              <Card 
                className="card--elevated"
                title="Elevated Card"
                description="Card with enhanced shadow elevation."
              >
                <Button variant="primary" icon={<ArrowRight />}>
                  Learn More
                </Button>
              </Card>

              <Card 
                className="card--outlined"
                title="Outlined Card"
                description="Card with emphasized border styling."
              >
                <div className="card-stats">
                  <div className="card-stat">
                    <span className="card-stat__value">24</span>
                    <span className="card-stat__label">Projects</span>
                  </div>
                  <div className="card-stat">
                    <span className="card-stat__value">1.2k</span>
                    <span className="card-stat__label">Followers</span>
                  </div>
                </div>
              </Card>

              <Card 
                className="card--compact"
                title="Compact Card"
                description="Card with reduced padding for dense layouts."
              >
                <p style={{ margin: 0, color: 'var(--content-secondary)', fontSize: 'var(--text-sm)' }}>
                  Compact content area with minimal spacing.
                </p>
              </Card>
            </div>
          </div>

          {/* Interactive Content */}
          <div className="demo__group">
            <h3 className="demo__group-title">Interactive Content</h3>
            <div className="demo__row demo__row--cards">
              <Card 
                title="Form Example"
                description="Card containing form elements and interactions."
              >
                <div className="card-form">
                  <Checkbox 
                    label="Enable notifications"
                    description="Receive updates about your account activity."
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                  />
                  <div className="card-form__actions">
                    <Button variant="primary" size="sm">
                      Save Settings
                    </Button>
                    <Button variant="outline" size="sm">
                      Cancel
                    </Button>
                  </div>
                </div>
              </Card>

              <Card 
                title="No Divider"
                description="Card with divider disabled for seamless content flow."
                showDivider={false}
              >
                <div style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary-50), var(--color-accent-50))',
                  padding: 'var(--spacing-component)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center'
                }}>
                  <Calendar size={32} style={{ color: 'var(--color-primary-600)', marginBottom: '8px' }} />
                  <p style={{ margin: 0, color: 'var(--content-primary)' }}>
                    Upcoming Event
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
          </>
        )}

        {/* Typography Tab */}
        {activeTab === 'typography' && (
          <TypographyDemo />
        )}

      </div>
    </div>
  )
}

export default ComponentsDemo
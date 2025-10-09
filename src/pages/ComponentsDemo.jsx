import React from 'react'
import Button from '../components/ui/Button'
import Checkbox from '../components/ui/Checkbox'
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
  Package
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
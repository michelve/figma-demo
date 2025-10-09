import React from 'react'
import Button from '../components/ui/Button'
import { 
  Search, 
  Download, 
  ArrowRight, 
  Plus, 
  X, 
  Heart, 
  Settings, 
  User, 
  Edit,
  Trash2,
  Save,
  Home,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import './ComponentsDemo.css'

function ComponentsDemo() {
  const [likeCount, setLikeCount] = React.useState(42)
  const [isLiked, setIsLiked] = React.useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  return (
    <div className="demo">
      <div className="demo__container">
        <header className="demo__header">
          <h1 className="demo__title">UI Components Library</h1>
          <p className="demo__subtitle">
            Custom components built for Figma Code Connect integration
          </p>
        </header>

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

      </div>
    </div>
  )
}

export default ComponentsDemo
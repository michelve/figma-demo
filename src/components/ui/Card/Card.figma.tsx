import Card from './Card'
import Button from '../Button'
import Input from '../Input'
import Textarea from '../Textarea'
import figma from '@figma/code-connect'
// Import common icons for examples
import { User, Mail, ArrowRight } from 'lucide-react'

/**
 * Figma Code Connect mapping for Card component
 * 
 * This file maps Figma component properties to React component props
 * Supports title, description, content areas, and divider options
 */

// Main Card component connection
figma.connect(
  Card,
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=5-294&m=dev', // Replace with your Figma component URL
  {
    props: {
      // Map Figma title text to title prop
      title: figma.textContent('Card Title'),
      
      // Map Figma description text to description prop
      description: figma.textContent('Card Description'),
      
      // Map Figma divider visibility
      showDivider: figma.boolean('Show Divider', {
        true: true,
        false: false,
      }),
      
      // Map Figma content area - this will be the main content slot
      children: figma.children('Card Content'),
    },
    example: (props) => (
      <Card
        title={props.title}
        description={props.description}
        showDivider={props.showDivider}
      >
        {props.children}
      </Card>
    ),
  }
)

// Card with Button Content - Example mapping
figma.connect(
  Card,
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=5-405&m=dev', // Replace with specific variant URL
  {
    props: {
      title: figma.textContent('Card Title'),
      description: figma.textContent('Card Description'),
      showDivider: figma.boolean('Show Divider'),
      
      // Map button properties if card contains a button
      buttonText: figma.textContent('Button Text'),
      buttonVariant: figma.enum('Button Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Outline: 'outline',
      }),
    },
    example: (props) => (
      <Card
        title={props.title}
        description={props.description}
        showDivider={props.showDivider}
      >
        <Button variant={props.buttonVariant} icon={<ArrowRight />}>
          {props.buttonText}
        </Button>
      </Card>
    ),
  }
)

// Card with Profile Content - Example mapping
figma.connect(
  Card,
  'YOUR_FIGMA_PROFILE_CARD_URL', // Replace with profile card variant URL
  {
    props: {
      title: figma.textContent('Card Title'),
      description: figma.textContent('Card Description'),
      
      // Profile specific properties
      userName: figma.textContent('User Name'),
      userEmail: figma.textContent('User Email'),
      contactButtonText: figma.textContent('Contact Button'),
    },
    example: (props) => (
      <Card
        title={props.title}
        description={props.description}
      >
        <div className="card-profile">
          <div className="card-profile__info">
            <div className="card-profile__avatar">
              <User size={24} />
            </div>
            <div className="card-profile__details">
              <h4 style={{ margin: 0, color: 'var(--content-primary)' }}>
                {props.userName}
              </h4>
              <p style={{ 
                margin: 0, 
                color: 'var(--content-secondary)', 
                fontSize: 'var(--text-sm)' 
              }}>
                {props.userEmail}
              </p>
            </div>
          </div>
          <div className="card-profile__actions">
            <Button variant="outline" size="sm" icon={<Mail />}>
              {props.contactButtonText}
            </Button>
          </div>
        </div>
      </Card>
    ),
  }
)

// Card with Stats Content - Example mapping
figma.connect(
  Card,
  'YOUR_FIGMA_STATS_CARD_URL', // Replace with stats card variant URL
  {
    props: {
      title: figma.textContent('Card Title'),
      description: figma.textContent('Card Description'),
      
      // Stats specific properties
      stat1Value: figma.textContent('Stat 1 Value'),
      stat1Label: figma.textContent('Stat 1 Label'),
      stat2Value: figma.textContent('Stat 2 Value'),
      stat2Label: figma.textContent('Stat 2 Label'),
    },
    example: (props) => (
      <Card
        className="card--outlined"
        title={props.title}
        description={props.description}
      >
        <div className="card-stats">
          <div className="card-stat">
            <span className="card-stat__value">{props.stat1Value}</span>
            <span className="card-stat__label">{props.stat1Label}</span>
          </div>
          <div className="card-stat">
            <span className="card-stat__value">{props.stat2Value}</span>
            <span className="card-stat__label">{props.stat2Label}</span>
          </div>
        </div>
      </Card>
    ),
  }
)

// Card Variants - Additional style mappings
figma.connect(
  Card,
  'YOUR_FIGMA_ELEVATED_CARD_URL', // Replace with elevated card variant URL
  {
    props: {
      title: figma.textContent('Card Title'),
      description: figma.textContent('Card Description'),
      children: figma.children('Card Content'),
    },
    example: (props) => (
      <Card
        className="card--elevated"
        title={props.title}
        description={props.description}
      >
        {props.children}
      </Card>
    ),
  }
)

figma.connect(
  Card,
  'YOUR_FIGMA_COMPACT_CARD_URL', // Replace with compact card variant URL
  {
    props: {
      title: figma.textContent('Card Title'),
      description: figma.textContent('Card Description'),
      children: figma.children('Card Content'),
    },
    example: (props) => (
      <Card
        className="card--compact"
        title={props.title}
        description={props.description}
      >
        {props.children}
      </Card>
    ),
  }
)

// Card with Form Content - Form variant mapping
figma.connect(
  Card,
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=26-453&m=dev', // Replace with your form card variant URL
  {
    props: {
      // Card variant
      variant: figma.enum('variant', {
        'Card with form': 'form',
        'Default': 'default',
      }),
      
      // Form properties
      title: figma.textContent('Card Heading'),
      showDivider: figma.boolean('showDivider', {
        true: true,
        false: false,
      }),
      
      // Form field labels and placeholders
      nameLabel: figma.textContent('Name'),
      addressLabel: figma.textContent('Address'), 
      phoneLabel: figma.textContent('Phone Number'),
      messageLabel: figma.textContent('Your message'),
      
      // Button properties
      showButton: figma.boolean('showButton', {
        true: true,
        false: false,
      }),
      buttonText: figma.textContent('Send Form'),
    },
    example: (props) => (
      <Card
        variant={props.variant}
        title={props.title}
        showDivider={props.showDivider}
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-component)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-tight)' }}>
            <label style={{ fontSize: 'var(--typography-body-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--content-secondary)' }}>
              {props.nameLabel}
            </label>
            <Input placeholder="Enter your full name" />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-tight)' }}>
            <label style={{ fontSize: 'var(--typography-body-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--content-secondary)' }}>
              {props.addressLabel}
            </label>
            <Input placeholder="Enter your address" />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-tight)' }}>
            <label style={{ fontSize: 'var(--typography-body-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--content-secondary)' }}>
              {props.phoneLabel}
            </label>
            <Input type="tel" placeholder="(555) 123-4567" />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-tight)' }}>
            <label style={{ fontSize: 'var(--typography-body-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--content-secondary)' }}>
              {props.messageLabel}
            </label>
            <Textarea rows={4} placeholder="Tell us how we can help you..." />
          </div>
          
          {props.showButton && (
            <Button variant="primary" type="submit" style={{ alignSelf: 'flex-start', marginTop: 'var(--spacing-tight)' }}>
              {props.buttonText}
            </Button>
          )}
        </form>
      </Card>
    ),
  }
)

export default Card
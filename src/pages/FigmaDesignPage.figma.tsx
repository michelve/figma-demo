import FigmaDesignPage from './FigmaDesignPage'
import figma from '@figma/code-connect'

/**
 * Figma Code Connect mapping for Design System Showcase Page
 * 
 * This file maps the Figma design page (Node: 5-430) to React component
 * Built using TalkToFigma MCP and semantic design tokens
 */

// Main Figma Design Page connection
figma.connect(
  FigmaDesignPage,
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=5-430&m=dev',
  {
    props: {
      // Page title mapping
      pageTitle: figma.textContent('Design System Showcase'),
      
      // Page subtitle mapping  
      pageSubtitle: figma.textContent('Built with semantic tokens and Figma Code Connect integration'),
      
      // Card variations mapping
      showSimpleCard: figma.boolean('Show Simple Card', {
        true: true,
        false: false,
      }),
      
      showElevatedCard: figma.boolean('Show Elevated Card', {
        true: true,
        false: false,
      }),
      
      showStatsCard: figma.boolean('Show Stats Card', {
        true: true,
        false: false,
      }),
      
      showProfileCard: figma.boolean('Show Profile Card', {
        true: true,
        false: false,
      }),
    },
    example: (props) => (
      <FigmaDesignPage />
    ),
  }
)

// Individual Card mappings for the page

// Simple Card - Node: 5-403
figma.connect(
  'Card',
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=5-403&m=dev',
  {
    props: {
      variant: 'Simple Card',
      showDivider: false,
      showButton: false,
      title: figma.textContent('Simple Card'),
      description: figma.textContent('Basic card with clean design and minimal content'),
    },
    example: (props) => `
      <Card 
        title="${props.title}"
        description="${props.description}"
        showDivider={${props.showDivider}}
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
    `,
  }
)

// Card with Divider - Node: 5-604
figma.connect(
  'Card',
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=5-604&m=dev',
  {
    props: {
      variant: 'Simple Card',
      showDivider: true,
      showButton: false,
      title: figma.textContent('Card with Divider'),
      description: figma.textContent('Enhanced card with visual separator for better content organization'),
    },
    example: (props) => `
      <Card 
        title="${props.title}"
        description="${props.description}"
        showDivider={${props.showDivider}}
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
    `,
  }
)

// Elevated Card with Button - Node: 5-405
figma.connect(
  'Card',
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=5-405&m=dev',
  {
    props: {
      variant: 'Elevated Card',
      showDivider: true,
      showButton: true,
      title: figma.textContent('Elevated Card'),
      description: figma.textContent('Premium card with enhanced shadow and interactive elements'),
      buttonText: figma.textContent('Learn More'),
      secondaryButtonText: figma.textContent('Download'),
    },
    example: (props) => `
      <Card 
        title="${props.title}"
        description="${props.description}"
        showDivider={${props.showDivider}}
        className="figma-card card--elevated"
      >
        <div className="card-actions">
          <Button 
            variant="primary" 
            icon={<ArrowRight size={16} />}
            iconPosition="right"
            size="sm"
          >
            ${props.buttonText}
          </Button>
          <Button 
            variant="outline" 
            icon={<Download size={16} />}
            size="sm"
          >
            ${props.secondaryButtonText}
          </Button>
        </div>
      </Card>
    `,
  }
)

// Elevated Card without Button - Node: 5-533
figma.connect(
  'Card',
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=5-533&m=dev',
  {
    props: {
      variant: 'Elevated Card',
      showDivider: true,
      showButton: false,
      title: figma.textContent('Analytics Overview'),
      description: figma.textContent('Key performance metrics and insights'),
    },
    example: (props) => `
      <Card 
        title="${props.title}"
        description="${props.description}"
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
    `,
  }
)

export default FigmaDesignPage
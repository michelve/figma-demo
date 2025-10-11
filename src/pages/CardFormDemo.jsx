import React from 'react';
import { Card, Input, Textarea, Button } from '../components';

/**
 * CardFormDemo - Demonstrates the Card component with form variant
 * Shows the new "form" variant that matches the Figma design
 */
export default function CardFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ 
      padding: 'var(--spacing-section)', 
      background: 'var(--surface-background)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--spacing-section)'
    }}>
      <h1 style={{ 
        color: 'var(--content-primary)', 
        fontSize: 'var(--typography-heading-2)',
        margin: 0
      }}>
        Card Form Variant Demo
      </h1>
      
      {/* Form Card Variant */}
      <Card 
        variant="form"
        title="Card Heading"
        showDivider={false}
      >
        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'var(--spacing-component)' 
        }}>
          {/* Name Field */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--spacing-tight)' 
          }}>
            <label style={{ 
              fontSize: 'var(--typography-body-sm)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--content-secondary)',
              margin: 0
            }}>
              Name
            </label>
            <Input placeholder="Enter your full name" />
          </div>
          
          {/* Address Field */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--spacing-tight)' 
          }}>
            <label style={{ 
              fontSize: 'var(--typography-body-sm)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--content-secondary)',
              margin: 0
            }}>
              Address
            </label>
            <Input placeholder="Enter your address" />
          </div>
          
          {/* Phone Number Field */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--spacing-tight)' 
          }}>
            <label style={{ 
              fontSize: 'var(--typography-body-sm)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--content-secondary)',
              margin: 0
            }}>
              Phone Number
            </label>
            <Input type="tel" placeholder="(555) 123-4567" />
          </div>
          
          {/* Message Field */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--spacing-tight)' 
          }}>
            <label style={{ 
              fontSize: 'var(--typography-body-sm)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--content-secondary)',
              margin: 0
            }}>
              Your message
            </label>
            <Textarea 
              rows={4} 
              placeholder="Tell us how we can help you..." 
            />
          </div>
          
          {/* Submit Button */}
          <Button 
            type="submit" 
            variant="primary" 
            style={{ 
              alignSelf: 'flex-start', 
              marginTop: 'var(--spacing-tight)' 
            }}
          >
            Send Form
          </Button>
        </form>
      </Card>

      {/* Comparison: Default Card */}
      <Card 
        variant="default"
        title="Default Card Variant"
        description="This is the default card variant for comparison"
        showDivider={true}
      >
        <p style={{ 
          color: 'var(--content-secondary)', 
          margin: 0 
        }}>
          This is the default card variant with standard spacing and styling.
        </p>
        <Button variant="outline" style={{ alignSelf: 'flex-start' }}>
          Learn More
        </Button>
      </Card>
    </div>
  );
}
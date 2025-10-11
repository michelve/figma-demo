import React from 'react';
import ComponentsDemo from './pages/ComponentsDemo';
import FigmaDesignPage from './pages/FigmaDesignPage';
import { ContactForm } from './components';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('components');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'figma-design':
        return <FigmaDesignPage />;
      case 'contact-form':
        return <ContactForm />;
      case 'components':
      default:
        return <ComponentsDemo />;
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'var(--surface-elevated)',
        borderBottom: '1px solid var(--border-default)',
        padding: 'var(--spacing-tight) var(--spacing-component)',
        zIndex: 1000,
        display: 'flex',
        gap: 'var(--spacing-component)',
        justifyContent: 'center'
      }}>
        <button
          type="button"
          onClick={() => setCurrentPage('components')}
          style={{
            background: currentPage === 'components' ? 'var(--action-primary)' : 'var(--action-secondary)',
            color: currentPage === 'components' ? 'var(--color-neutral-50)' : 'var(--content-primary)',
            border: '1px solid var(--border-default)',
            padding: 'var(--spacing-tight) var(--spacing-component)',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--text-sm)'
          }}
        >
          Components Demo
        </button>
        <button
          type="button"
          onClick={() => setCurrentPage('figma-design')}
          style={{
            background: currentPage === 'figma-design' ? 'var(--action-primary)' : 'var(--action-secondary)',
            color: currentPage === 'figma-design' ? 'var(--color-neutral-50)' : 'var(--content-primary)',
            border: '1px solid var(--border-default)',
            padding: 'var(--spacing-tight) var(--spacing-component)',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--text-sm)'
          }}
        >
          Figma Design (5-430)
        </button>
        <button
          type="button"
          onClick={() => setCurrentPage('contact-form')}
          style={{
            background: currentPage === 'contact-form' ? 'var(--action-primary)' : 'var(--action-secondary)',
            color: currentPage === 'contact-form' ? 'var(--color-neutral-50)' : 'var(--content-primary)',
            border: '1px solid var(--border-default)',
            padding: 'var(--spacing-tight) var(--spacing-component)',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--text-sm)'
          }}
        >
          Contact Form
        </button>
      </nav>
      
      {/* Page Content */}
      <div style={{ marginTop: '60px' }}>
        {renderPage()}
      </div>
    </div>
  );
}
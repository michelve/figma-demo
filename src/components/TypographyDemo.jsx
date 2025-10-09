export default function TypographyDemo() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1>Typography System Demo</h1>
        <p className="text-secondary">
          Complete typography hierarchy using semantic content tokens for proper contrast and visual hierarchy.
        </p>
      </div>

      {/* Display Text Styles */}
      <section className="mb-12">
        <h2>Display Text Styles</h2>
        <div className="space-y-6">
          <div>
            <p className="label-medium mb-2">Display Large</p>
            <div className="display-large">Design System</div>
          </div>
          <div>
            <p className="label-medium mb-2">Display Medium</p>
            <div className="display-medium">Beautiful Typography</div>
          </div>
          <div>
            <p className="label-medium mb-2">Display Small</p>
            <div className="display-small">Semantic Tokens</div>
          </div>
        </div>
      </section>

      {/* Heading Hierarchy */}
      <section className="mb-12">
        <h2>Heading Hierarchy</h2>
        <div className="space-y-4">
          <div>
            <p className="label-medium mb-2">H1 - Page Title</p>
            <h1>This is a Heading 1</h1>
          </div>
          <div>
            <p className="label-medium mb-2">H2 - Section Title</p>
            <h2>This is a Heading 2</h2>
          </div>
          <div>
            <p className="label-medium mb-2">H3 - Subsection Title</p>
            <h3>This is a Heading 3</h3>
          </div>
          <div>
            <p className="label-medium mb-2">H4 - Article Title</p>
            <h4>This is a Heading 4</h4>
          </div>
          <div>
            <p className="label-medium mb-2">H5 - Minor Title</p>
            <h5>This is a Heading 5</h5>
          </div>
          <div>
            <p className="label-medium mb-2">H6 - Smallest Title</p>
            <h6>This is a Heading 6</h6>
          </div>
        </div>
      </section>

      {/* Body Text Styles */}
      <section className="mb-12">
        <h2>Body Text Styles</h2>
        <div className="space-y-6">
          <div>
            <p className="label-medium mb-2">Body Large (Default Paragraph)</p>
            <p className="body-large">
              This is body large text using --content-primary for maximum contrast and readability. 
              Perfect for main content and important information that users need to read easily.
            </p>
          </div>
          <div>
            <p className="label-medium mb-2">Body Medium</p>
            <p className="body-medium">
              This is body medium text, slightly smaller but still very readable for secondary content areas.
            </p>
          </div>
          <div>
            <p className="label-medium mb-2">Body Small</p>
            <p className="body-small">
              This is body small text using --content-secondary for less prominent information that still needs to be accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Content Color Hierarchy */}
      <section className="mb-12">
        <h2>Content Color Hierarchy</h2>
        <div className="space-y-4">
          <div>
            <p className="label-medium mb-2">Primary Content (--content-primary)</p>
            <p className="text-primary body-large">
              Main headings, primary text content, and important information that demands attention.
            </p>
          </div>
          <div>
            <p className="label-medium mb-2">Secondary Content (--content-secondary)</p>
            <p className="text-secondary body-large">
              Labels, secondary information, and supporting text that provides context.
            </p>
          </div>
          <div>
            <p className="label-medium mb-2">Tertiary Content (--content-tertiary)</p>
            <p className="text-tertiary body-large">
              Helper text, descriptions, captions, and subtle information.
            </p>
          </div>
          <div>
            <p className="label-medium mb-2">Disabled Content (--content-disabled)</p>
            <p className="text-disabled body-large">
              Disabled text and inactive states that need to be visually de-emphasized.
            </p>
          </div>
        </div>
      </section>

      {/* Label Styles */}
      <section className="mb-12">
        <h2>Label Styles</h2>
        <div className="space-y-4">
          <div>
            <p className="label-medium mb-2">Label Large</p>
            <div className="label-large">Form Field Label</div>
          </div>
          <div>
            <p className="label-medium mb-2">Label Medium</p>
            <div className="label-medium">Input Label</div>
          </div>
          <div>
            <p className="label-medium mb-2">Label Small</p>
            <div className="label-small">Category Tag</div>
          </div>
        </div>
      </section>

      {/* Helper and Description Text */}
      <section className="mb-12">
        <h2>Helper and Description Text</h2>
        <div className="space-y-4">
          <div>
            <p className="label-medium mb-2">Helper Text</p>
            <p className="helper-text">
              This is helper text that provides additional context or instructions for form fields.
            </p>
          </div>
          <div>
            <p className="label-medium mb-2">Description Text</p>
            <p className="description-text">
              This is description text that explains features or provides detailed information about a component.
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Text Styles */}
      <section className="mb-12">
        <h2>Specialty Text Styles</h2>
        <div className="space-y-4">
          <div>
            <p className="label-medium mb-2">Caption</p>
            <p className="caption">Image caption or small descriptive text</p>
          </div>
          <div>
            <p className="label-medium mb-2">Overline</p>
            <p className="overline">Section Overline</p>
          </div>
          <div>
            <p className="label-medium mb-2">Inline Code</p>
            <p>Use <code>--content-primary</code> for primary text content.</p>
          </div>
          <div>
            <p className="label-medium mb-2">Code Block</p>
            <pre>{`const theme = {
  colors: {
    primary: 'var(--content-primary)',
    secondary: 'var(--content-secondary)'
  }
};`}</pre>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="mb-12">
        <h2>Link Styles</h2>
        <div className="space-y-4">
          <div>
            <p className="label-medium mb-2">Default Link</p>
            <p>Visit our <a href="https://example.com/design-system">design system documentation</a> for more information.</p>
          </div>
          <div>
            <p className="label-medium mb-2">Standalone Link</p>
            <a href="https://example.com/navigation" className="link">Standalone navigation link</a>
          </div>
        </div>
      </section>

      {/* Status Text Colors */}
      <section className="mb-12">
        <h2>Status Text Colors</h2>
        <div className="space-y-4">
          <div>
            <p className="label-medium mb-2">Error Text</p>
            <p className="text-error">This is error text for validation messages</p>
          </div>
          <div>
            <p className="label-medium mb-2">Warning Text</p>
            <p className="text-warning">This is warning text for cautionary messages</p>
          </div>
          <div>
            <p className="label-medium mb-2">Success Text</p>
            <p className="text-success">This is success text for confirmation messages</p>
          </div>
          <div>
            <p className="label-medium mb-2">Info Text</p>
            <p className="text-info">This is info text for informational messages</p>
          </div>
        </div>
      </section>

      {/* Typography in Context */}
      <section className="mb-12">
        <h2>Typography in Context</h2>
        <div className="space-y-6">
          <article className="border border-gray-200 rounded-lg p-6">
            <p className="overline mb-2">Blog Post</p>
            <h3>Understanding Design Tokens</h3>
            <p className="text-secondary mb-4">Published on March 15, 2024</p>
            <p>
              Design tokens are the visual design atoms of the design system — specifically, they are named entities 
              that store visual design attributes. We use them in place of hard-coded values in order to maintain 
              a scalable and consistent visual system.
            </p>
            <p>
              Our semantic token approach provides <strong>three tiers of abstraction</strong> that create a 
              maintainable relationship between design decisions and implementation.
            </p>
            <p className="helper-text mt-4">
              Learn more about implementing design tokens in your projects.
            </p>
          </article>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="mb-12">
        <h2>Accessibility Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-primary mb-3">🌟 Light Mode</h3>
            <div className="space-y-2">
              <p className="text-high-contrast">High contrast text</p>
              <p className="text-secondary">Readable secondary text</p>
              <p className="text-tertiary">Accessible tertiary text</p>
            </div>
            <p className="text-xs text-secondary mt-3">Optimized for daylight viewing</p>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-white">
            <h3 className="mb-3">🌙 Dark Mode Ready</h3>
            <div className="space-y-2">
              <p style={{color: 'white'}}>Primary text (white)</p>
              <p style={{color: '#e5e5e5'}}>Secondary text (neutral-200)</p>
              <p style={{color: '#d4d4d8'}}>Tertiary text (neutral-300)</p>
            </div>
            <p className="text-xs opacity-70 mt-3">Auto-adapts with prefers-color-scheme</p>
          </div>
          
          <div className="border-2 border-black bg-white rounded-lg p-6">
            <h3 className="text-black mb-3">⚡ High Contrast</h3>
            <div className="space-y-2">
              <p className="text-black font-bold">Ultra high contrast</p>
              <p style={{color: '#1f2937'}} className="font-semibold">Strong secondary</p>
              <p style={{color: '#374151'}} className="font-medium">Clear tertiary</p>
            </div>
            <p className="text-xs text-gray-700 mt-3">WCAG AAA compliance</p>
          </div>
        </div>
      </section>
    </div>
  );
}
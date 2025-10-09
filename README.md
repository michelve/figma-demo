# Figma Demo - shadcn/ui + React + Vite

A modern React application built with Vite, Tailwind CSS, and shadcn/ui components. This project serves as a blueprint for building beautiful, accessible web applications with a complete design system.

## ✨ Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **50+ shadcn/ui Components** - Pre-built, accessible components
- 🌗 **Dark Mode Ready** - Built-in theme support
- 📱 **Responsive** - Mobile-first design
- 🎯 **TypeScript Ready** - Full TypeScript support
- 🔧 **Figma Integration** - MCP server configured for Figma workflow

## 📦 What's Inside

```
figma_demo/
├── src/
│   ├── components/
│   │   └── ui/           # 50+ shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── styles/           # CSS organization
│   │   ├── shadcn.css    # shadcn theme reference
│   │   ├── custom.css    # Custom styles reference
│   │   └── README.md     # CSS documentation
│   ├── App.jsx           # Demo application
│   ├── main.jsx          # Entry point
│   └── index.css         # Main stylesheet
├── docs/                 # Project documentation
│   └── figma-code-connect/  # Figma Code Connect guides
├── components.json       # shadcn/ui configuration
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── .cursor/
    └── mcp.json          # Cursor MCP configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd figma_demo
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run figma-socket` - Start Figma socket connection

## 🎨 Customizing Theme

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
@layer base {
  :root {
    --primary: 222.2 47.4% 11.2%;  /* Change this */
    --secondary: 210 40% 96.1%;
    /* ... more variables ... */
  }
}
```

See `src/styles/README.md` for detailed customization guide.

### Adding Custom Styles

Add your custom CSS at the bottom of `src/index.css` or reference `src/styles/custom.css` for examples.

## 🧩 Using Components

Import and use shadcn/ui components:

```jsx
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## 📚 Available Components

The project includes 50+ pre-installed shadcn/ui components:

**Layout & Structure**
- Accordion, Card, Separator, Sidebar, Sheet, Tabs

**Forms & Inputs**
- Button, Input, Label, Form, Checkbox, Radio Group, Select, Switch, Textarea

**Navigation**
- Navigation Menu, Breadcrumb, Menubar, Pagination, Command

**Overlays**
- Dialog, Drawer, Alert Dialog, Popover, Tooltip, Hover Card, Dropdown Menu

**Feedback**
- Alert, Toast, Progress, Spinner, Skeleton

**Data Display**
- Table, Badge, Avatar, Chart, Calendar

**And many more!**

See the demo page at `http://localhost:5173` for examples.

## 🔧 Adding More Components

Use the shadcn CLI to add components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dialog
```

## 🎯 Figma Integration

This project includes Figma MCP server configuration and Code Connect setup for seamless design-to-code workflow.

### Figma MCP Server
1. Install the Figma plugin: `Talk to Figma`
2. The MCP server is already configured in `.cursor/mcp.json`
3. Use natural language to interact with your Figma designs

### Figma Code Connect (Organization/Enterprise)

This repository is **Code Connect ready**! Connect your components to Figma for:

- Real code snippets in Dev Mode
- Enhanced AI agent guidance  
- Property mapping from Figma to code

📖 **Complete Documentation**: See [`docs/figma-code-connect/`](./docs/figma-code-connect/) for comprehensive guides:

- [📋 Overview & Quick Start](./docs/figma-code-connect/README.md)
- [⚙️ Configuration Setup](./docs/figma-code-connect/configuration.md)
- [🧩 Component Definitions](./docs/figma-code-connect/component-definitions.md)
- [🔗 Component Connections](./docs/figma-code-connect/component-connections.md)
- [💡 Real-world Examples](./docs/figma-code-connect/examples.md)
- [🔧 Troubleshooting](./docs/figma-code-connect/troubleshooting.md)

**Quick Start:**

```bash
# Option 1: Use Code Connect UI in Figma (recommended)
# Option 2: Use CLI
npm install --save-dev @figma/code-connect
npm run figma:connect:publish
```

### Example Prompts
- "Get the variables from my Figma selection"
- "Generate code for my Figma selection"
- "Show me how to use the Button component" (with Code Connect)

See `prompt/figma.md` for more examples.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 4
- **Styling**: Tailwind CSS 3.3
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Animations**: tailwindcss-animate

## 📖 Documentation

### Project Documentation

- [📋 Figma Code Connect Overview](./docs/figma-code-connect/README.md) - Complete guide to connecting Figma designs with code
- [⚙️ Configuration](./docs/figma-code-connect/configuration.md) - Setup and authentication
- [🧩 Component Definitions](./docs/figma-code-connect/component-definitions.md) - Define component patterns
- [🔗 Component Connections](./docs/figma-code-connect/component-connections.md) - API reference and connections
- [💡 Examples](./docs/figma-code-connect/examples.md) - Real-world implementation examples
- [🔧 Troubleshooting](./docs/figma-code-connect/troubleshooting.md) - Common issues and solutions

### External Documentation

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [shadcn](https://twitter.com/shadcn) for the amazing UI components
- [Tailwind Labs](https://tailwindlabs.com) for Tailwind CSS
- [Evan You](https://twitter.com/youyuxi) for Vite

---

Built with ❤️ using shadcn/ui, React, and Vite
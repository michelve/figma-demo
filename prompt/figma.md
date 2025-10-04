# Figma MCP Tools & Prompts

## 🛠️ Available Tools

### `get_code`

Extract code from your Figma selection. Default output is **React + Tailwind**, but fully customizable through prompts.

#### 🔄 Framework Options

```bash
# Change to different frameworks
generate my Figma selection in Vue
generate my Figma selection in plain HTML + CSS
generate my Figma selection in iOS
```

#### 🧩 Component Integration

```bash
# Use existing components
generate my Figma selection using components from src/components/ui

```

> 💡 **Tip**: Set up Code Connect for optimal code reuse results

#### 🎨 Combined Approach

```bash
# Best of both worlds
generate my Figma selection using components from src/ui and style with Tailwind
```

> ⚠️ **Note**: Selection-based prompting only works with the local MCP server. The remote server requires a link to a frame or layer.

---

### `get_variable_defs`

> 🏠 **Local only**

Returns variables and styles from your Figma selection (colors, spacing, typography).

#### 📋 Usage Examples

```bash
# List all design tokens
get the variables used in my Figma selection

# Focus on specific types
what color and spacing variables are used in my Figma selection?

# Get names and values
list the variable names and their values used in my Figma selection
```

---

### `get_code_connect_map`

> 🏠 **Local only**

Retrieves mapping between Figma node IDs and corresponding code components in your codebase.

#### 🔗 Returns

- **`codeConnectSrc`**: Component location (file path/URL)
- **`codeConnectName`**: Component name in codebase

This enables seamless design-to-code workflows by connecting Figma elements directly to their React implementations.

---

### `get_screenshot`

Captures screenshots of your selection to preserve layout fidelity in generated code.

> ✅ **Recommended**: Keep enabled (disable only if concerned about token limits)

---

### `create_design_system_rules`

Creates rule files that provide agents with proper context for translating designs into high-quality, codebase-aware frontend code.

#### 🎯 Benefits

- ✅ Ensures design system alignment
- ✅ Improves tech stack compatibility
- ✅ Enhances code generation accuracy

> 📁 **Important**: Save results to correct `rules/` or `instructions/` path for agent access during code generation.

---

### `get_metadata`

Returns sparse XML representation of your selection with basic properties:

- 🆔 Layer IDs
- 📝 Names  
- 🏷️ Types
- 📍 Position
- 📏 Sizes

#### 🎯 Use Cases

- **Large designs**: When `get_code` produces excessive context
- **Multiple selections**: Works with multiple selections or entire pages
- **Structured breakdown**: Outline for targeted `get_code` calls

---

## 🚀 Quick Start Guide

1. **Select** your Figma element
2. **Choose** appropriate tool based on your needs
3. **Customize** with specific prompts
4. **Generate** high-quality code

## 💡 Pro Tips

- 🔗 Use Code Connect for better component mapping
- 📸 Keep screenshots enabled for layout fidelity  
- 🎨 Combine framework-specific generation with existing components
- 📋 Extract design tokens first for consistent styling

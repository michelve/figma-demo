# Talk to Figma MCP - Advanced Workflows

## Basic Component Creation

### Complete Universal Prompt:

Use #mcp_talktofigma_join_channel jhyz571y, then #mcp_talktofigma_get_local_components to find component keys, find the component with id "5:405" and name "variant=Elevated Card, showDivider=true, showButton=true" and get its key value, then use #mcp_talktofigma_create_component_instance with that componentKey x=50 y=50 to create a Card instance.

## Advanced Workflow: Clone Instances → Create Auto Layout Frame → Organize

This workflow demonstrates how to:
1. Create component instances
2. Clone them multiple times  
3. Create auto layout frames
4. Organize instances properly with tracking

### Step-by-Step Implementation

#### Step 1: Get Component Information

```bash
# First, get all available components and their keys
mcp_talktofigma_get_local_components
```

**Result**: Identifies component `5:405` ("variant=Elevated Card, showDivider=true, showButton=true") with key `706ac7e7bfadc1128314a274d3c74774e9f1877a`

#### Step 2: Create Initial Component Instance

```bash
# Create first instance at starting position
mcp_talktofigma_create_component_instance {
  "componentKey": "706ac7e7bfadc1128314a274d3c74774e9f1877a",
  "x": 50,
  "y": 50
}
```

**Result**: Creates instance with ID `12:146` at (50, 50), size 324×152

#### Step 3: Clone Multiple Instances

```bash
# Clone instance 2 - positioned below first
mcp_talktofigma_clone_node {
  "nodeId": "12:146",
  "x": 50,
  "y": 220
}
# Result: New ID 12:155

# Clone instance 3 - positioned below second  
mcp_talktofigma_clone_node {
  "nodeId": "12:146", 
  "x": 50,
  "y": 390
}
# Result: New ID 12:164

# Clone instance 4 - positioned below third
mcp_talktofigma_clone_node {
  "nodeId": "12:146",
  "x": 50, 
  "y": 560
}
# Result: New ID 12:173
```

**Tracking Status**: 4 instances created:
- Instance 1: `12:146` at (50, 50)
- Instance 2: `12:155` at (50, 220)
- Instance 3: `12:164` at (50, 390)  
- Instance 4: `12:173` at (50, 560)

#### Step 4: Create Auto Layout Frame

```bash
# Create container frame with vertical auto layout
mcp_talktofigma_create_frame {
  "x": 400,
  "y": 50,
  "width": 450,
  "height": 800,
  "name": "Auto Layout Card Container",
  "layoutMode": "VERTICAL",
  "itemSpacing": 24,
  "paddingTop": 32,
  "paddingRight": 32,
  "paddingBottom": 32,
  "paddingLeft": 32,
  "primaryAxisAlignItems": "MIN",
  "counterAxisAlignItems": "CENTER"
}
```

**Result**: Creates frame with ID `12:183` at (400, 50) with proper auto layout configuration

#### Step 5: Position Instances Within Frame

```bash
# Move instances to frame's content area (frame.x + padding = 400 + 32 = 432)
# Content area Y starts at frame.y + padding = 50 + 32 = 82

# Move instance 1 into frame
mcp_talktofigma_move_node {
  "nodeId": "12:146",
  "x": 432,
  "y": 82
}

# Move instance 2 into frame (spaced by card height + gap)
mcp_talktofigma_move_node {
  "nodeId": "12:155", 
  "x": 432,
  "y": 258  # 82 + 152 + 24 = 258
}

# Move instance 3 into frame
mcp_talktofigma_move_node {
  "nodeId": "12:164",
  "x": 432,
  "y": 434  # 258 + 152 + 24 = 434  
}

# Move instance 4 into frame
mcp_talktofigma_move_node {
  "nodeId": "12:173",
  "x": 432,
  "y": 610  # 434 + 152 + 24 = 610
}
```

### Alternative Approach: Create Frame First Strategy

For better auto layout integration, create the frame first, then instances:

#### Method 2: Frame-First Workflow

```bash
# Step 1: Create auto layout frame first
mcp_talktofigma_create_frame {
  "x": 850,
  "y": 50, 
  "width": 450,
  "height": 800,
  "name": "Auto Layout Card Container",
  "layoutMode": "VERTICAL",
  "itemSpacing": 24,
  "paddingTop": 32,
  "paddingRight": 32,
  "paddingBottom": 32,
  "paddingLeft": 32,
  "primaryAxisAlignItems": "MIN",
  "counterAxisAlignItems": "CENTER"
}
# Result: Frame ID 12:183

# Step 2: Create instances directly in content area
mcp_talktofigma_create_component_instance {
  "componentKey": "706ac7e7bfadc1128314a274d3c74774e9f1877a",
  "x": 882,  # frame.x + padding = 850 + 32
  "y": 82    # frame.y + padding = 50 + 32
}
# Result: Instance ID 12:184

# Step 3: Clone instances with proper spacing
mcp_talktofigma_clone_node {
  "nodeId": "12:184",
  "x": 882,
  "y": 258   # Previous Y + height + spacing = 82 + 152 + 24
}
# Result: Instance ID 22:193

mcp_talktofigma_clone_node {
  "nodeId": "12:184", 
  "x": 882,
  "y": 434   # Previous Y + height + spacing = 258 + 152 + 24
}
# Result: Instance ID 22:202
```

### Key Insights & Best Practices

#### Node ID Tracking
- **Always track each created node ID** for subsequent operations
- **Component keys vs Node IDs**: Use component keys for instance creation, node IDs for cloning/moving
- **Sequential numbering**: Figma assigns sequential IDs (12:146, 12:155, etc.)

#### Auto Layout Integration
- **Frame content area**: Calculate as `frame.x + padding` and `frame.y + padding`
- **Spacing calculation**: Next position = previous Y + element height + itemSpacing
- **Padding consideration**: Auto layout padding creates the inner content boundaries

#### Workflow Order Optimization
1. **Method A**: Create instances → Create frame → Move instances (manual positioning)
2. **Method B**: Create frame → Create instances in content area (auto layout positioning)

**Recommendation**: Method B provides better auto layout integration

#### Parameter Guidelines
- **layoutMode**: "VERTICAL" for stacked cards, "HORIZONTAL" for side-by-side
- **itemSpacing**: Distance between child elements (typically 16-32px)
- **padding**: Inner spacing around content (typically 16-48px)
- **primaryAxisAlignItems**: "MIN" for top-aligned, "CENTER" for centered
- **counterAxisAlignItems**: "CENTER" for horizontal centering

### Verification Commands

```bash
# Check frame details and children
mcp_talktofigma_get_node_info { "nodeId": "12:183" }

# Check individual instance positioning
mcp_talktofigma_get_node_info { "nodeId": "12:184" }

# Get current selection status
mcp_talktofigma_get_selection
```

This workflow provides a complete, tested approach to creating organized component layouts with proper auto layout integration in Figma using Talk to Figma MCP tools.


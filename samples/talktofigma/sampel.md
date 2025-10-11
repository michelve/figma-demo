# Talk to Figma MCP - Auto Layout Card Grid Workflow

### Step-by-Step Instructions

1. **Join Channel**
   ```
   #mcp_talktofigma_join_channel jhyz571y
   ```

2. **Verify Component** (optional)
   ```
   #mcp_talktofigma_get_local_components
   ```
   Find component "5:405" → key: `706ac7e7bfadc1128314a274d3c74774e9f1877a`

3. **Create Auto Layout Frame**
   ```
   #mcp_talktofigma_create_frame x=100 y=100 width=450 height=600 layoutMode="VERTICAL" itemSpacing=24 paddingTop=32 paddingLeft=32 paddingRight=32 paddingBottom=32 name="Card Container"
   ```
   **Remember frame ID** from response (e.g., `22:247`)

4. **Create First Card Outside Frame**
   ```
   #mcp_talktofigma_create_component_instance componentKey=706ac7e7bfadc1128314a274d3c74774e9f1877a x=500 y=500
   ```
   **Remember card ID** from response (e.g., `22:248`)

5. **Move Card Into Frame**
   ```
   #mcp_talktofigma_move_node nodeId=[card ID] x=32 y=32
   ```

6. **Clone & Move Remaining Cards**
   ```
   #mcp_talktofigma_clone_node nodeId=[card ID] x=500 y=600
   #mcp_talktofigma_move_node nodeId=[new card ID] x=32 y=208
   
   #mcp_talktofigma_clone_node nodeId=[card ID] x=500 y=700
   #mcp_talktofigma_move_node nodeId=[new card ID] x=32 y=384
   
   #mcp_talktofigma_clone_node nodeId=[card ID] x=500 y=800
   #mcp_talktofigma_move_node nodeId=[new card ID] x=32 y=560
   ```

7. **Verify Success**
   ```
   #mcp_talktofigma_get_node_info nodeId=[frame ID]
   ```
   **Check**: Frame should show `"children":[card1, card2, card3, card4]`

### 🎯 Key Success Factors

- **Create cards OUTSIDE frame first** (prevents positioning conflicts)
- **Move cards INTO frame** (establishes parent-child relationships)
- **Use frame-relative coordinates** for moves (x=32 for left padding)
- **Y-spacing calculation**: 32 + (cardHeight + itemSpacing) * index

### 📝 Quick Human-Readable Prompts

**Complete Workflow:**
"Create a vertical auto layout frame called 'Card Container' at x=100, y=100 with 450x600 dimensions, vertical layout, 24px spacing, and 32px padding. Then create 4 card instances by first creating them outside the frame and moving them inside to establish proper parent-child relationships."

**Verification:**
"Check if the Card Container frame contains its card instances as children in the node info."

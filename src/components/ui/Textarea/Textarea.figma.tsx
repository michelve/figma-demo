import figma from '@figma/code-connect/react'
import Textarea from "./Textarea";

/**
 * Figma Code Connect definition for Textarea component
 * Links Figma textarea instances to React implementation
 */
figma.connect(
  Textarea,
  "https://www.figma.com/design/textarea-component", // Replace with actual Figma component URL
  {
    props: {
      variant: figma.enum("State", {
        Default: "default",
        Error: "error", 
        Success: "success",
      }),
      
      size: figma.enum("Size", {
        Small: "sm",
        Medium: "md", 
        Large: "lg",
      }),
      
      resize: figma.enum("Resize", {
        None: "none",
        Vertical: "vertical",
        Horizontal: "horizontal", 
        Both: "both",
      }),
      
      placeholder: figma.string("Placeholder"),
      
      disabled: figma.boolean("Disabled", {
        true: true,
        false: false,
      }),
    },
    
    example: (props) => (
      <Textarea
        variant={props.variant}
        size={props.size}
        resize={props.resize}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    ),
  }
);

/**
 * Alternative connection for text area with specific content
 */
figma.connect(
  Textarea,
  "https://www.figma.com/design/textarea-with-content", // Replace with actual Figma URL
  {
    props: {
      variant: figma.enum("State", {
        Default: "default",
        Error: "error",
        Success: "success", 
      }),
      
      size: figma.enum("Size", {
        Small: "sm",
        Medium: "md",
        Large: "lg",
      }),
      
      children: figma.textContent("Content"),
    },
    
    example: (props) => (
      <Textarea
        variant={props.variant}
        size={props.size}
        defaultValue={props.children}
      />
    ),
  }
);

/**
 * Connection for form textarea with validation states
 */
figma.connect(
  Textarea,
  "https://www.figma.com/design/form-textarea", // Replace with actual Figma URL
  {
    props: {
      variant: figma.enum("Validation", {
        Valid: "success",
        Invalid: "error",
        Default: "default",
      }),
      
      placeholder: figma.string("Placeholder Text"),
      label: figma.string("Label"),
    },
    
    example: (props) => (
      <div>
        {props.label && <label>{props.label}</label>}
        <Textarea
          variant={props.variant}
          placeholder={props.placeholder}
          name="message"
          rows={4}
        />
      </div>
    ),
  }
);

export default Textarea;
# Taige's Blog Design System

## Color Palette

### Primary Colors
- **Primary Blue**: #0078D4 (Microsoft's Fluent Design blue)
- **Secondary Accent**: #00BCF2 (Lighter blue for highlights)
- **Dark Gray**: #323130 (For text and dark elements)
- **Light Gray**: #F3F2F1 (For backgrounds)

### UI Colors
- **Success**: #107C10 (Green)
- **Warning**: #FFB900 (Amber)
- **Error**: #D13438 (Red)
- **Info**: #0078D4 (Blue)

### Dark Mode Colors
- **Dark Background**: #1F1F1F
- **Dark Surface**: #2D2D2D
- **Dark Text Primary**: #F3F2F1
- **Dark Text Secondary**: #C8C6C4

## Typography

### Font Family
- **Primary Font**: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif
- **Secondary Font**: 'Consolas', monospace (For code blocks and technical elements)

### Font Sizes
- **Extra Large (Hero Headers)**: 3rem (48px)
- **Large (Section Headers)**: 2rem (32px)
- **Medium (Sub-headers)**: 1.5rem (24px)
- **Regular (Body Text)**: 1rem (16px)
- **Small (Captions)**: 0.875rem (14px)
- **Extra Small (Meta text)**: 0.75rem (12px)

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Bold**: 700

## Spacing System

- **Extra Small**: 0.25rem (4px)
- **Small**: 0.5rem (8px)
- **Medium**: 1rem (16px)
- **Large**: 1.5rem (24px)
- **Extra Large**: 2rem (32px)
- **2XL**: 3rem (48px)
- **3XL**: 4rem (64px)

## Components

### Buttons

#### Primary Button
- Background: Primary Blue
- Text: White
- Border-radius: 4px
- Hover: Slight darkening + subtle scale effect
- Active/Pressed: Darken background
- Disabled: Reduced opacity

#### Secondary Button
- Background: Transparent
- Border: 1px solid Primary Blue
- Text: Primary Blue
- Border-radius: 4px
- Hover: Light blue background
- Active/Pressed: Darker blue background

#### Text Button
- Background: Transparent
- Text: Primary Blue
- Hover: Underline + slight color change
- Active/Pressed: Darker color

### Cards

#### Article Card
- Background: White (Light Mode) / Dark Surface (Dark Mode)
- Border-radius: 8px
- Shadow: Subtle elevation shadow
- Hover: Slight elevation increase + subtle scale
- Image container: 16:9 aspect ratio

#### Profile Card
- Circular avatar container
- Background: White with subtle gradient
- Elevation shadow
- Border: Optional highlighted border

### Navigation

#### Desktop Nav
- Background: Transparent or subtle blur
- Text: Dark Gray (Light Mode) / White (Dark Mode)
- Active item: Primary Blue underline or highlight
- Hover: Lighter color + scale

#### Mobile Nav
- Hamburger icon animation
- Slide-in menu
- Overlaid on content with backdrop filter

### Form Elements

#### Text Input
- Border: Light Gray (Light Mode) / Dark Gray (Dark Mode)
- Border-radius: 4px
- Focus: Primary Blue outline
- Placeholder: Light Gray text

#### Checkbox/Radio
- Custom styled with brand colors
- Animated state transitions

## Animations & Transitions

### Page Transitions
- Subtle fade + slide effects
- Duration: 300ms
- Easing: ease-in-out

### Hover Animations
- Scale: 1.02-1.05
- Duration: 150ms
- Easing: ease-out

### Loading States
- Pulsing animations
- Brand-colored skeletons

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

## Accessibility Guidelines

- Minimum contrast ratio: 4.5:1 for normal text
- Focus indicators for keyboard navigation
- Aria labels for interactive elements
- Screen reader compatibility
- Touch targets minimum size: 44x44px 
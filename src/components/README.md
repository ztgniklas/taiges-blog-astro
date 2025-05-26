# Components Documentation

This directory contains reusable UI components used across the blog.

## Structure
```
components/
├── layout/           # Layout components
│   ├── Header.astro
│   ├── Footer.astro
│   └── README.md
├── blog/            # Blog-specific components
│   ├── PostCard.astro
│   ├── PostList.astro
│   └── README.md
├── ui/              # Generic UI components
│   ├── Button.astro
│   ├── Card.astro
│   └── README.md
└── README.md        # This file
```

## Component Guidelines

1. **Naming Convention**
   - Use PascalCase for component names
   - Use `.astro` extension for Astro components
   - Use `.tsx` for React components

2. **Props Interface**
   - Define TypeScript interfaces for props
   - Use descriptive prop names
   - Include JSDoc comments for complex props

3. **Styling**
   - Use TailwindCSS for styling
   - Follow the design system in blog-blueprint.md
   - Maintain consistent spacing and colors

4. **Accessibility**
   - Include proper ARIA attributes
   - Ensure keyboard navigation
   - Maintain proper heading hierarchy

5. **Performance**
   - Keep components focused and small
   - Use proper hydration strategies
   - Optimize images and assets 
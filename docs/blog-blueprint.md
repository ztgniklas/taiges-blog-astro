# Taige's Blog - Blueprint Document

## 1. Pages Overview

### Home Page (`bg-prototype.html`)
- url: /
- Landing page showcasing featured content
- Hero section with immersive background
- Featured blog posts preview
- Quick navigation to key sections
- Newsletter signup

### Blog Listing Page (`bg-blog.html`)
- url: /blogs
- Main blog index with all articles
- Featured post section
- Article grid with filtering
- Search functionality
- Pagination
- Category filters

### Blog Post Page (`bg-blog-post.html`)
- url: blog/[id]
- Individual article view
- Article header with meta information
- Full article content
- Author information
- Social sharing
- Related articles
- Comments section

### Gallery Page (`bg-gallery.html`)
- url: /gallery
- Visual showcase of work
- Filterable image grid
- Lightbox view
- Category filters
- Project details

### About Page (`bg-about.html`)
- url: /about
- Personal introduction
- Skills and expertise
- Timeline/experience
- Contact information
- Social links

## 2. Components Breakdown

### Common Components
- Header/Navigation
  - Logo
  - Main menu
  - Mobile menu
- Footer
  - Brand section
  - Navigation links
  - Social icons
  - Copyright

### Page-Specific Components

#### Home Page
- Hero Section
  - Background image/video
  - Main headline
  - Call-to-action
- Featured Posts Carousel
- Newsletter Signup Form
- Quick Links Grid

#### Blog Listing Page
- Blog Filters
  - Category chips
  - Search input
- Featured Post Card
  - Large image
  - Title and excerpt
  - Meta information
- Article Grid
  - Article cards
  - Category tags
  - Read time
- Pagination

#### Blog Post Page
- Article Header
  - Title
  - Meta information
  - Tags
- Article Content
  - Rich text formatting
  - Code blocks
  - Images
- Author Card
  - Profile image
  - Bio
  - Social links
- Share Buttons
- Related Articles
- Comments Section

#### Gallery Page
- Filter Controls
- Image Grid
- Lightbox
- Project Details Modal

#### About Page
- Profile Section
- Skills Grid
- Timeline
- Contact Form

## 3. Page Interactions

### Navigation Flow
1. Home → Any page (via main navigation)
2. Blog Listing → Blog Post (via article cards)
3. Blog Post → Related Articles (via related posts section)
4. Gallery → Project Details (via image click)
5. Any page → About/Contact (via footer)

### User Interactions
- Blog filtering by category
- Search functionality
- Pagination navigation
- Social sharing
- Newsletter subscription
- Contact form submission
- Image gallery browsing

## 4. Style Guide

### Colors
- Primary Gradient: `linear-gradient(135deg, #ff9a9e, #fad0c4)`
- Secondary Gradient: `linear-gradient(135deg, #84fab0, #8fd3f4)`
- Text Colors:
  - Primary: `var(--color-text)`
  - Secondary: `var(--color-text-light)`
- Background: Dark theme with glass morphism

### Typography
- Primary Font: Inter
  - Weights: 300, 400, 500, 600, 700, 800
- Monospace Font: JetBrains Mono
  - Weights: 400, 500

### Spacing
- Using CSS custom properties for consistent spacing
- Base unit: `var(--space-4)`
- Scale: 4, 6, 8, 12, 16, 24, 32, 48, 64

### Components
- Glass Cards
  - Background: `var(--glass-bg)`
  - Border: `var(--glass-border)`
  - Backdrop filter: `blur(10px)`
- Buttons
  - Primary: Gradient background
  - Secondary: Glass effect
- Icons: Feather Icons

## 5. Tech Stack

### Core Technologies
- **Astro**
  - Static site generation
  - Partial hydration
  - Built-in markdown support
  - Component islands architecture
- **React**
  - Interactive UI components
  - Client-side interactivity
  - Component-based architecture
- **TypeScript**
  - Type safety
  - Better developer experience
  - Enhanced code maintainability
- **TailwindCSS**
  - Utility-first CSS framework
  - Custom theme configuration
  - Responsive design utilities

### Content Management
- **Markdown Files**
  - Blog posts stored as `.md` files
  - Frontmatter for metadata
  - MDX support for React components in markdown
- **Content Collections**
  - Type-safe content management
  - Automatic schema validation
  - Built-in image optimization

### Dependencies
- **Core**
  - `@astrojs/react` - React integration
  - `@astrojs/tailwind` - TailwindCSS integration
  - `@astrojs/mdx` - MDX support
- **UI Components**
  - `@headlessui/react` - Accessible UI components
  - `@heroicons/react` - Icon system
  - `@tailwindcss/typography` - Rich text styling
- **Utilities**
  - `date-fns` - Date formatting
  - `rehype-highlight` - Code syntax highlighting
  - `rehype-slug` - Heading anchors
  - `remark-gfm` - GitHub Flavored Markdown

### Build & Development
- **Development Tools**
  - Vite (via Astro)
  - TypeScript compiler
  - ESLint + Prettier
- **Build Process**
  - Static site generation
  - Asset optimization
  - CSS purging
  - Type checking

### Performance Optimizations
- **Astro Features**
  - Zero JavaScript by default
  - Partial hydration
  - Image optimization
  - Asset bundling
- **React Optimizations**
  - Code splitting
  - Lazy loading
  - Component memoization
- **Content Delivery**
  - Static generation
  - Incremental Static Regeneration (ISR)
  - Edge caching

### Development Workflow
1. **Content Creation**
   - Write posts in markdown
   - Add frontmatter metadata
   - Include images in public directory
2. **Development**
   - Local development server
   - Hot module replacement
   - Type checking
3. **Build & Deploy**
   - Static site generation
   - Asset optimization
   - Deployment to hosting platform

### Future Considerations
- **Content Management**
  - Headless CMS integration
  - Content versioning
  - Draft preview system
- **Features**
  - Search functionality
  - Comment system
  - Newsletter integration
- **Performance**
  - Advanced caching strategies
  - CDN integration
  - Analytics integration 
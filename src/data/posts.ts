export const posts = [
  {
    title: "Getting Started with Astro",
    description: "Learn how to build a modern blog with Astro, React, and TypeScript",
    pubDate: new Date("2024-03-20"),
    heroImage: "/assets/images/blog/getting-started/hero.jpg",
    category: "Development",
    tags: ["astro", "react", "typescript", "tutorial"],
    author: "Taige Wilson",
    slug: "getting-started-with-astro",
    content: `
      <p>Welcome to this comprehensive guide on building a modern blog with Astro, React, and TypeScript. In this tutorial, we'll explore how to create a fast, SEO-friendly blog that leverages the best of both static and dynamic rendering.</p>

      <h2>Why Astro?</h2>
      <p>Astro is a modern static site builder that delivers lightning-fast performance with a modern developer experience. It allows you to use your favorite JavaScript frameworks while shipping less JavaScript to the browser.</p>

      <h2>Getting Started</h2>
      <p>First, let's create a new Astro project. Open your terminal and run:</p>
      <pre><code>npm create astro@latest</code></pre>

      <h2>Project Structure</h2>
      <p>Our blog will follow a clean, organized structure:</p>
      <pre><code>src/
  components/
  layouts/
  pages/
  styles/
  utils/</code></pre>

      <h2>Building Components</h2>
      <p>Let's create reusable components for our blog posts, navigation, and layout. We'll use React for interactive components while keeping the static parts in Astro.</p>

      <h2>Styling with Tailwind</h2>
      <p>We'll use Tailwind CSS for styling our blog. It provides a utility-first approach that makes it easy to create beautiful, responsive designs.</p>

      <h2>Conclusion</h2>
      <p>By combining Astro, React, and TypeScript, we've created a modern, performant blog that's both developer-friendly and user-friendly. The static generation ensures fast loading times, while the dynamic components provide interactivity where needed.</p>
    `
  },
  {
    title: "The Art of Minimal UI Design",
    description: "How less can be more: principles and practices for creating beautiful minimal interfaces",
    pubDate: new Date("2024-03-18"),
    heroImage: "/assets/images/blog/minimal-ui/hero.jpg",
    category: "Design",
    tags: ["design", "ui", "minimalism"],
    author: "Taige Wilson",
    slug: "art-of-minimal-ui-design",
    content: `
      <p>Minimal UI design is more than just removing elements from an interface. It's about creating a focused, intentional experience that guides users through their journey with clarity and purpose.</p>

      <h2>The Principles of Minimal Design</h2>
      <p>At its core, minimal design follows these key principles:</p>
      <ul>
        <li>Purposeful reduction</li>
        <li>Clear hierarchy</li>
        <li>Intentional whitespace</li>
        <li>Focused functionality</li>
      </ul>

      <h2>Why Minimalism Works</h2>
      <p>Minimal interfaces reduce cognitive load, making it easier for users to focus on their tasks. By removing unnecessary elements, we create a clearer path to completion.</p>

      <h2>Practical Applications</h2>
      <p>Let's explore how to apply minimal design principles in real-world scenarios, from mobile apps to web interfaces.</p>

      <h2>Conclusion</h2>
      <p>Minimal UI design isn't about making things simple for the sake of simplicity. It's about creating interfaces that are intuitive, efficient, and beautiful in their clarity.</p>
    `
  }
]; 
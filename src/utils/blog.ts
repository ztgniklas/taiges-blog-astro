import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import slugify from 'slugify';

export interface BlogPost {
  title: string;
  description: string;
  date: Date;
  heroImgUrl: string;
  category: string;
  tags: string[];
  author: string;
  slug: string;
  content: string;
}

const BLOGS_DIR = path.join(process.cwd(), 'src', 'blogs');

function generateSlug(title: string, filename: string): string {
  // First try to generate slug from title
  const titleSlug = slugify(title, {
    lower: true,        // Convert to lower case
    strict: true,       // Strip special characters except replacement
    locale: 'en',       // Use English locale
    remove: /[*+~.()'"!:@]/g  // Remove these characters
  });

  // If title is in non-Latin script (like Chinese), use filename
  if (!/^[a-z0-9-]+$/.test(titleSlug)) {
    // Remove .md extension and convert to slug
    return slugify(filename.replace(/\.md$/, ''), {
      lower: true,
      strict: true,
      locale: 'en',
      remove: /[*+~.()'"!:@]/g
    });
  }

  return titleSlug;
}

export function getBlogPosts(): BlogPost[] {
  // Create blogs directory if it doesn't exist
  if (!fs.existsSync(BLOGS_DIR)) {
    fs.mkdirSync(BLOGS_DIR, { recursive: true });
  }

  const files = fs.readdirSync(BLOGS_DIR);
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(BLOGS_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      // Generate slug from title or filename
      const slug = data.slug || generateSlug(data.title || file, file);
      
      // Extract or generate metadata
      const title = data.title || slug.split('-').map((word: string) => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const description = data.description || 'Click to see details';
      
      const date = data.date ? new Date(data.date) : 
        new Date(fs.statSync(filePath).birthtime);
      
      const heroImgUrl = data.heroImgUrl || 
        `/assets/images/blog/${slug}/hero.jpg`;
      
      const category = data.category || 'Uncategorized';
      
      const tags = data.tags || [];
      
      const author = data.author || 'Taige';

      return {
        title,
        description,
        date,
        heroImgUrl,
        category,
        tags,
        author,
        slug,
        content
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
} 
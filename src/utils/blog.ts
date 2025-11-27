import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import slugify from 'slugify';
import { marked } from 'marked';
import * as pinyin from 'pinyin';

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
  featured?: boolean;
  hidden?: boolean;
}

const BLOGS_DIR = path.join(process.cwd(), 'src', 'blogs');

function generateSlug(title: string, filename: string): string {
  // If title is in non-Latin script (like Chinese), use filename
  if (!/^[a-z0-9-]+$/.test(title)) {
    // Convert filename to pinyin first
    const filenameWithoutExt = filename.replace(/\.md$/, '');
    const pinyinFilename = pinyin.pinyin(filenameWithoutExt, {
      style: 0, // STYLE_NORMAL
      heteronym: false,
    }).join(' ');

    // Then slugify the pinyin
    return slugify(pinyinFilename, {
      lower: true,
      strict: true,
      locale: 'en',
      remove: /[*+~.()'"!:@]/g
    });
  }

  // Otherwise, use generated slug from title
  return slugify(title, {
    lower: true,        // Convert to lower case
    strict: true,       // Strip special characters except replacement
    locale: 'en',       // Use English locale
    remove: /[*+~.()'"!:@]/g  // Remove these characters
  });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Create blogs directory if it doesn't exist
  if (!fs.existsSync(BLOGS_DIR)) {
    fs.mkdirSync(BLOGS_DIR, { recursive: true });
  }

  const files = fs.readdirSync(BLOGS_DIR);

  const posts = await Promise.all(files
    .filter(file => file.endsWith('.md'))
    .map(async file => {
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

      const heroImgUrl = data.heroImgUrl || 'https://picsum.photos/300/200';

      const category = data.category || 'Uncategorized';

      const tags = data.tags || [];

      const author = data.author || 'Taige';

      // Convert markdown content to HTML
      const processedContent = await marked(content);

      return {
        title,
        description,
        date,
        heroImgUrl,
        category,
        tags,
        author,
        slug,
        content: processedContent,
        featured: data.featured || false,
        hidden: data.hidden || false
      };
    }));

  return posts.filter(post => !post.hidden).sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter(post => post.featured);
}
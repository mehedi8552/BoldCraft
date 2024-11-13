export interface BlogPost {
  id: number;
  category: string;
  title: string;
  image: string;
  buttonText: string;
  date: string;
  author: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Web Design",
    title: "The Principles of Modern Web Design Theory",
    image: "/src/assets/image/blog/blog-1.jpg",
    buttonText: "Read More",
    date: "March 15, 2024",
    author: "John Doe",
    excerpt: "Explore the fundamental principles that shape modern web design and user experience."
  },
  {
    id: 2,
    category: "Development",
    title: "Building Scalable Applications with React",
    image: "/src/assets/image/blog/blog-2.jpg",
    buttonText: "Read More",
    date: "March 14, 2024",
    author: "Jane Smith",
    excerpt: "Learn best practices for creating large-scale applications using React and modern tools."
  },
  {
    id: 3,
    category: "UI/UX Design",
    title: "Creating Intuitive User Interfaces",
    image: "/src/assets/image/blog/blog-3.jpg",
    buttonText: "Read More",
    date: "March 13, 2024",
    author: "Mike Johnson",
    excerpt: "Discover the secrets to designing user interfaces that feel natural and intuitive."
  },
  {
    id: 4,
    category: "Technology",
    title: "The Future of Artificial Intelligence in Web Development",
    image: "/src/assets/image/blog/blog-4.jpg",
    buttonText: "Read More",
    date: "March 12, 2024",
    author: "Sarah Wilson",
    excerpt: "Exploring how AI is shaping the future of web development and design."
  },
  {
    id: 5,
    category: "Marketing",
    title: "Digital Marketing Strategies for 2024",
    image: "/src/assets/image/blog/blog-5.jpg",
    buttonText: "Read More",
    date: "March 11, 2024",
    author: "Tom Brown",
    excerpt: "Essential digital marketing strategies to grow your online presence in 2024."
  },
  {
    id: 6,
    category: "Business",
    title: "Effective Business Strategies for Startups",
    image: "/src/assets/image/blog/blog-6.jpg",
    buttonText: "Read More",
    date: "March 10, 2024",
    author: "Emily Davis",
    excerpt: "Key strategies and insights for launching and growing successful startups."
  }
];

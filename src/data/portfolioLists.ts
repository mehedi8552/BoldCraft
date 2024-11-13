import ImageOne from "../assets/image/portfolio/portfolio-1.jpg";
import ImageTwo from "../assets/image/portfolio/portfolio-2.jpg";
import ImageThree from "../assets/image/portfolio/portfolio-3.jpg";
import ImageFour from "../assets/image/portfolio/portfolio-4.jpg";
import ImageFive from "../assets/image/portfolio/portfolio-5.jpg";
import ImageSix from "../assets/image/portfolio/portfolio-6.jpg";

export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
  buttonText: string;
  date: string;
  creator: string;
  description: string;
}

export const portfolioItemsOne: PortfolioItem[] = [
  {
    id: 1,
    category: "Web Design",
    title: "Modern Web Design Portfolio",
    image: ImageOne,
    buttonText: "View Project",
    date: "March 15, 2024",
    creator: "John Doe",
    description: "A showcase of modern web design principles and user experience."
  },
  {
    id: 2,
    category: "Development",
    title: "Scalable React Applications",
    image: ImageTwo,
    buttonText: "View Project",
    date: "March 14, 2024",
    creator: "Jane Smith",
    description: "Best practices for creating large-scale applications using React."
  },
  {
    id: 3,
    category: "UI/UX Design",
    title: "Intuitive User Interfaces",
    image: ImageThree,
    buttonText: "View Project",
    date: "March 13, 2024",
    creator: "Mike Johnson",
    description: "Designing user interfaces that feel natural and intuitive."
  },
  {
    id: 4,
    category: "Technology",
    title: "AI in Web Development",
    image: ImageFour,
    buttonText: "View Project",
    date: "March 12, 2024",
    creator: "Sarah Wilson",
    description: "Exploring AI's impact on the future of web development."
  },
  {
    id: 5,
    category: "Marketing",
    title: "Digital Marketing Portfolio",
    image: ImageFive,
    buttonText: "View Project",
    date: "March 11, 2024",
    creator: "Tom Brown",
    description: "Strategies to grow your online presence in 2024."
  },
  {
    id: 6,
    category: "Business",
    title: "Startup Business Strategies",
    image: ImageSix,
    buttonText: "View Project",
    date: "March 10, 2024",
    creator: "Emily Davis",
    description: "Insights for launching and growing successful startups."
  }
];
export const portfolioItemsTow: PortfolioItem[] = [
  {
    id: 1,
    category: "Web Design",
    title: "Modern Web Design Portfolio",
    image: ImageOne,
    buttonText: "View Project",
    date: "March 15, 2024",
    creator: "John Doe",
    description: "A showcase of modern web design principles and user experience."
  },
  {
    id: 2,
    category: "Development",
    title: "Scalable React Applications",
    image: ImageTwo,
    buttonText: "View Project",
    date: "March 14, 2024",
    creator: "Jane Smith",
    description: "Best practices for creating large-scale applications using React."
  },
  {
    id: 3,
    category: "UI/UX Design",
    title: "Intuitive User Interfaces",
    image: ImageThree,
    buttonText: "View Project",
    date: "March 13, 2024",
    creator: "Mike Johnson",
    description: "Designing user interfaces that feel natural and intuitive."
  },
  {
    id: 4,
    category: "Technology",
    title: "AI in Web Development",
    image: ImageFour,
    buttonText: "View Project",
    date: "March 12, 2024",
    creator: "Sarah Wilson",
    description: "Exploring AI's impact on the future of web development."
  },
  {
    id: 5,
    category: "Marketing",
    title: "Digital Marketing Portfolio",
    image: ImageFive,
    buttonText: "View Project",
    date: "March 11, 2024",
    creator: "Tom Brown",
    description: "Strategies to grow your online presence in 2024."
  },
  {
    id: 6,
    category: "Business",
    title: "Startup Business Strategies",
    image: ImageSix,
    buttonText: "View Project",
    date: "March 10, 2024",
    creator: "Emily Davis",
    description: "Insights for launching and growing successful startups."
  }
];
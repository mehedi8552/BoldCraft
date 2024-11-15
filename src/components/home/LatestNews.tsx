import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogList";
import BlogCard from "../blog/BlogCard";
import Container from "../common/Container";

const LatestNews = () => {
  return (
    <Container className="pt-[80px] md:pt-[100px] lg:pt-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2  pb-8">
        <div className="text-left">
          <h2 className="text-section-title font-bold dark:text-white">Latest News</h2>
          <p className="Mulish-regular mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <button className="mt-9 flex justify-end items-end">
          <Link
            to="/blog"
            className="relative text-[#1f1f25] hover:text-red-500 text-link Mulish-medium pb-1 transition-all duration-500 ease-in-out hover:after:w-full after:content-[''] after:w-[40px] after:h-[2px] after:bg-red-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-in-out dark:text-white"
          >
           View All News
          </Link>
        </button>
      </div>

      <div className="grid gap-6 py-7 md:py-10 lg:py-16 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, 3).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
};

export default LatestNews;

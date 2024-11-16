import { Link } from "react-router-dom";
import Container from "../common/Container";
import { ChevronRight } from "lucide-react";
import { blogPosts } from "../../data/blogList";
import BlogCard from "./BlogCard";
import PageHeader from "../common/PageHeader";

const BlogList = () => {
  return (
    <>
          <PageHeader
        title="Blog"
        path="/blog"
        breadcrumbPath="Blog"
      />
      {/* Blog Grid */}
      <Container className=" pb-8 lg:pb-16  pt-8 lg:pt-16 ">
        <div className="grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3 ">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 pb-16">
          <div className="flex items-center justify-center space-x-2">
            <Link
              to="/"
              className="bg-red-500 text-white border border-red-500 hover:bg-salate-100  px-4 py-2 rounded-md flex items-center justify-center"
            >
              1
            </Link>
            <Link
              to="/"
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors px-4 py-2 rounded-md flex items-center justify-center"
            >
              2
            </Link>
            <Link
              to="/"
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors px-4 py-2 rounded-md flex items-center justify-center"
            >
              3
            </Link>
            <Link
              to="/"
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors px-4 py-2 rounded-md flex items-center justify-center"
            >
              4
            </Link>
            <Link
              to="/"
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors px-4 py-2 rounded-md flex items-center justify-center"
            >
              <ChevronRight className="w-[15px] h-[25px]" />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogList;

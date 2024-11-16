import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BlogPost } from "../../data/blogList";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.9 }}
      whileHover={{ opacity: 1, scale: 1 }}
      className="group relative overflow-hidden rounded-lg"
    >
      {/* Image Container with Overlay */}
      <div className="relative rounded-lg overflow-hidden">
        {/* Background Image */}
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />

        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-500/50 to-orange-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-10">
          {/* Category */}
          <span className="mb-3 inline-block rounded text-small uppercase tracking-wider text-[#c6c9d8]">
            {post.category}
          </span>

          {/* Title */}
          <h3 className="mb-4 leading-tight text-white Mulish-medium text-card-title">
            {post.title}
          </h3>

          {/* Read More Button */}
          <Link
            to={`/blog/${post.id}`}
            className="inline-block rounded-lg border-2 border-red-500 px-6 py-2 text-sm uppercase tracking-wider text-white transition-transform duration-500 transform -translate-x-full opacity-0 hover:transition-colors   hover:bg-red-500 group-hover:translate-x-0 group-hover:opacity-100"
          >
            {post.buttonText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;

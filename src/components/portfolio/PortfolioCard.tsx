import { Link } from "react-router-dom";
import { PortfolioItem } from "../../data/portfolioLists";

interface PortfolioCardProps {
  post: PortfolioItem;
}

const PortfolioCard = ({ post }: PortfolioCardProps) => {
  return (
    <div className="portfolio-card group relative overflow-hidden rounded-lg h-full">
      {/* Image Container with Overlay */}
      <div className="relative rounded-lg">
        {/* Background Image */}
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rounded-md"
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
            to={`/portfolio-details`}
            className="inline-block rounded-lg border-2 mt-4 border-[#c6c9d8] px-6 py-2 text-sm uppercase tracking-wider text-white transition transform, hover:border-primary background-color duration-300 hover:-translate-y-2 hover:bg-primary"
          >
            {post.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

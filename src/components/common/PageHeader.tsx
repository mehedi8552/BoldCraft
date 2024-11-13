import { Link } from "react-router-dom";
import Container from "./Container";
// import { ChevronRight, Home } from "lucide-react";
import { IPageHeaderProps } from "../../types";

const PageHeader = ({ title, path, breadcrumbPath }: IPageHeaderProps) => {
  return (
    <>
      {/* Page Header */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute right-0 left-0 top-0 bottom-0 -z-50 inset-0 bg-banner bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[#00010c]/60" />
        </div>

        {/* Content */}
        <Container>
          <div className="relative   py-[80px] md:py-[100px] lg:py-[120px] text-center z-10">
            <h1 className="text-[54px] gradient-text Mulish-bold mb-4  pt-[80px] md:pt-[100px] lg:pt-[120px]">
              {title}
            </h1>

            <nav className="flex justify-center items-center space-x-2 text-white/90">
              <Link
                to="/"
                className="flex items-center justify-center hover:text-red-500 transition-colors"
              >
                <span className="Mulish-regular text-small">Home</span>
              </Link>
              <span className="text-white/50"> / </span>
              <Link
                to={path}
                className="flex items-center justify-center transition-colors"
              >
                <span className="Mulish-regular text-small gradient-text">
                  {breadcrumbPath}
                </span>
              </Link>
            </nav>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PageHeader;

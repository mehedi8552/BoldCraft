import BlogListComponent from "../components/blog/BlogList";

import GalleryBody from "../components/galary/galleryBody";

const GalleryPage = () => {
  return (
    <>
      {/* <PageHeader title="Gallery" path="/" breadcrumbPath="Gallery" /> */}
      <GalleryBody />
      <BlogListComponent />
    </>
  );
};

export default GalleryPage;

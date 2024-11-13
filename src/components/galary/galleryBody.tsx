import Container from "../common/Container";
import PageHeader from "../common/PageHeader";
import GalleryData from "../../assets/MapData/GalleryData";
import ModalImage from "react-modal-image";

const galleryBody = () => {
  return (
    <div>
      <PageHeader title="Gallery" path="/" breadcrumbPath="Gallery" />
      <Container>
        <div className="pt-14 md:pt-20 lg:pt-28 pb-14 md:pb-20 lg:pb-36">
          <section className="grid grid-cols-1 md:grid-cols-2  gap-6 ">
            {GalleryData.map((item) => (
              <div className="space-y-6">
                <div className="group relative overflow-hidden rounded-md shadow-xl mt-12">
                  <ModalImage
                    small={item.image}
                    large={item.image}
                    alt={item.title}
                    className="group relative overflow-hidden rounded-md shadow-xl hover:scale-110 duration-500"
                  />
                </div>
                <div className=" space-y-2">
                  <h1 className="Mulish-regular text-base text-black ">
                    {item.title}
                  </h1>
                  <p className="text-black Mulish-semibold text-xl hover:text-red-500">
                    {item.des}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </Container>
      {/* add a line here */}
      <div className="w-full border-t border-gray-200"></div>
    </div>
  );
};

export default galleryBody;

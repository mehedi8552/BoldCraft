import PageHeader from "../common/PageHeader";
import MapComponent from "./MapComponent";
const Map = () => {
  return (
    <>
      <PageHeader
        title="Google Map"
        path="/map"
        breadcrumbPath="Google Map"
      />

      <section className="flex flex-col md:flex-row  bg-gray-50 px-6 lg:px-36 lg:gap-8 lg:py-20 py-10 gap-6">
        <div className="md:w-1/2 ">
          <div>
            <MapComponent />
          </div>
        </div>
        <div className="md:w-1/2  ">
          <div>
            <MapComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;

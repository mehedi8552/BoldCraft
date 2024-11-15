import BrandOne from "../../assets/image/Sposer/brand-01.png";
import BrandTwo from "../../assets/image/Sposer/brand-02.png";
import BrandThree from "../../assets/image/Sposer/brand-03.png";
import BrandFour from "../../assets/image/Sposer/brand-04.png";
import BrandFive from "../../assets/image/Sposer/brand-05.png";
import BrandSix from "../../assets/image/Sposer/brand-06.png";
import Container from "../common/Container";
import PageHeader from "../common/PageHeader";

const logos = [
  { logoUrl: BrandOne },
  {
    logoUrl: BrandTwo,
  },
  {
    logoUrl: BrandThree,
  },
  {
    logoUrl: BrandFour,
  },
  {
    logoUrl: BrandFive,
  },
  {
    logoUrl: BrandSix,
  },
];

const LogoGrid = () => {
  return (
    <>
      <PageHeader
        title="Client Logo"
        path="/clients-logo"
        breadcrumbPath="Client Logo"
      />
      <section className="py-20 bg-blue-50">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="pointer-events flex justify-center items-center h-40  shadow-md md:border border-slate-200 p-6  transition-all duration-300 hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:rounded-md"
              >
                <div className="text-center">
                  <img src={logo.logoUrl} className="w-20 mx-auto mb-4" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default LogoGrid;

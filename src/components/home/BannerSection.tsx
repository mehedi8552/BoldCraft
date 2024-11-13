import { BellDot, BriefcaseBusiness, Dribbble } from "lucide-react";
import Container from "../common/Container";

const BannerSection = () => {
  return (
    <>
      {/* Page Header */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute right-0 left-0 top-0  bottom-0 -z-50 inset-0 bg-banner bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[#00010c]/60" />
        </div>

        {/* Content */}
        <Container>
          <section className="pt-40 pb-20 min-h-auto lg:min-h-[1080px]  w-full flex  items-center">
            <div>
              <div>
                <h1 className="text-[6.25rem] leading-[7rem] uppercase gradient-text Mulish-black  mb-4">
                  A digital <br />
                  agency.
                </h1>
              </div>
              <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="py-[40px]">
                  <BriefcaseBusiness
                    strokeWidth={0.8}
                    className=" w-[100px] h-[80px] mb-[34px] text-[#B51D14]"
                  />
                  <div>
                    <h1 className="text-[#c6c9d8] mb-[20px] text-card-title Mulish-regular">
                      {" "}
                      Strategy Solutions
                    </h1>
                    <p className="text-[#c6c9d8]/75 Mulish-light">
                      Empowering your brand with tailored strategies to maximize
                      impact. From market research to actionable plans, we
                      ensure your business stays ahead.
                    </p>
                  </div>
                </div>
                <div className="py-[40px]">
                  <Dribbble
                    strokeWidth={0.8}
                    className=" w-[100px] h-[80px] mb-[34px] text-[#B51D14]"
                  />
                  <div>
                    <h1 className="text-[#c6c9d8] mb-[20px] text-card-title Mulish-regular">
                      Website Design
                    </h1>
                    <p className="text-[#c6c9d8]/75 Mulish-light">
                      Bringing your vision to life with sleek, responsive, and
                      high-performing websites. We specialize in designs that
                      captivate and functionality that drives results.
                    </p>
                  </div>
                </div>
                <div className="py-[40px]">
                  <BellDot
                    strokeWidth={0.8}
                    className=" w-[100px] h-[80px] mb-[34px] text-[#B51D14]"
                  />
                  <div>
                    <h1 className="text-[#c6c9d8] mb-[20px] text-card-title Mulish-regular">
                      Marketing Insights
                    </h1>
                    <p className="text-[#c6c9d8]/75 Mulish-light">
                      Leveraging analytics to boost engagement and track your
                      growth. Our approach blends creative strategies with
                      insights that matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};

export default BannerSection;

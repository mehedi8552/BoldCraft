import Container from "../common/Container";
import PageHeader from "../common/PageHeader";

const PricingTable = () => {
  return (
    <>
      <PageHeader
        title="Pricing Table"
        path="/pricing-table"
        breadcrumbPath="Pricing Table"
      />
      <div className="flex justify-center items-center  bg-gray-100 py-16 lg:py-28">
        <Container>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Free Plan */}
            <div className="border group border-red-500 rounded-lg p-6 w-full md:w-72 text-center transition-colors duration-300 hover:bg-gradient-to-b hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-semibold mb-4">Free</h3>
              <p className="text-7xl md:text-[6.25rem] font-regular mb-2">Free</p>
              <p className="mb-4 text-regular text-sm">USD Per Month</p>
              <hr className="my-4" />
              <ul className="space-y-2 mb-6 hover:text-white text-gray-700 text-regular text-base">
                <li>✓ 5 PPC Campaigns</li>
                <li>✓ Digital Marketing</li>
                <li>✓ Marketing Agency</li>
                <li>✓ SEO Friendly</li>
                <li>✓ UI/UX designs</li>
              </ul>
              <button className="border text-regular text-sm border-red-500 text-red-500 py-2 px-4 rounded transition-colors duration-300 group-hover:bg-white group-hover:text-red-500">
                PURCHASE NOW
              </button>
            </div>

            {/* Business Plan */}
            <div className="bg-gradient-to-b from-red-500 to-pink-500 text-white rounded-lg p-6 w-full md:w-72 text-center">
              <h3 className="text-xl font-semibold mb-4">Business</h3>
              <p className="text-7xl md:text-[6.25rem] font-regular mb-2">29</p>
              <p className="mb-4 text-regular text-sm">USD Per Month</p>
              <hr className="my-4 opacity-50" />
              <ul className="space-y-2 mb-6  text-white text-regular text-base">
                <li>✓ 5 PPC Campaigns</li>
                <li>✓ Digital Marketing</li>
                <li>✓ Marketing Agency</li>
                <li>✓ SEO Friendly</li>
                <li>✓ UI/UX designs</li>
              </ul>
              <button className="bg-white text-red-500 py-2 px-4 rounded text-regular text-sm">
                PURCHASE NOW
              </button>
            </div>

            {/* Advanced Plan */}
            <div className="border group border-red-500 rounded-lg p-6 w-full md:w-72 text-center transition-colors duration-300 hover:bg-gradient-to-b hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-semibold mb-4">Advanced</h3>
              <p className="text-7xl md:text-[6.25rem] font-regular mb-2">29</p>
              <p className="mb-4 text-regular text-sm">USD Per Month</p>
              <hr className="my-4" />
              <ul className="space-y-2 mb-6 hover:text-white text-gray-700 text-regular text-base">
                <li>✓ 5 PPC Campaigns</li>
                <li>✓ Digital Marketing</li>
                <li>✓ Marketing Agency</li>
                <li>✓ SEO Friendly</li>
                <li>✓ UI/UX designs</li>
              </ul>
              <button className="border text-regular text-sm border-red-500 text-red-500 py-2 px-4 rounded transition-colors duration-300 group-hover:bg-white group-hover:text-red-500">
                PURCHASE NOW
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PricingTable;

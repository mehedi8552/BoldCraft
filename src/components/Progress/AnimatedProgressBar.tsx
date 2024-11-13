import React from "react";
import Container from "../common/Container";

const AnimatedProgressBar: React.FC = () => {
  return (
    <Container>
      <div className="space-y-3 py-20 md:py-36">
        {/* <!-- Progress --> */}
        <div>
          <div className="inline-block mb-2 ms-[calc(25%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500">
            25%
          </div>
          <p className="text-base Mulish-medium mb-2">Designing</p>
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
              style={{ width: "25%" }}
            ></div>
          </div>
        </div>
        {/* <!-- End Progress --> */}

        {/* <!-- Progress --> */}
        <div>
          
          <div className="inline-block mb-2 ms-[calc(50%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500">
            50%
          </div>
          <p className="text-base Mulish-medium mb-2">Managment</p>
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
        {/* <!-- End Progress --> */}

        {/* <!-- Progress --> */}
        <div>
          <div className="inline-block mb-2 ms-[calc(75%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500">
            75%
          </div>
          <p className="text-base Mulish-medium mb-2">Development</p>
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        {/* <!-- End Progress --> */}

        {/* <!-- Progress --> */}
        <div>
          <div className="inline-block mb-2 ms-[calc(100%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500">
            100%
          </div>
          <p className="text-base Mulish-medium mb-2">Testing</p>
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
        {/* <!-- End Progress --> */}
      </div>
    </Container>
  );
};

export default AnimatedProgressBar;

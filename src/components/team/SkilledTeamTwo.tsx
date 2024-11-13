import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import EmployeeOne from "../../assets/image/employee-avater-one.jpg";
import EmployeeTwo from "../../assets/image/employee-avater-two.jpg";
import EmployeeThree from "../../assets/image/employee-avater-three.jpg";
import EmployeeFour from "../../assets/image/employee-avater-four.jpg";
import Container from "../common/Container";

const SkilledTeamTwo = () => {
  let SkilledTeamData = [
    {
      id: 1,
      name: "Jone Due",
      position: "Sr. UI/IX Designer",
      imageUrl: EmployeeOne,
    },
    {
      id: 2,
      name: "Fatima Asrafi",
      position: "Front-end Engineer",
      imageUrl: EmployeeTwo,
    },
    {
      id: 3,
      name: "Doe John",
      position: "Sr. Graphic Designer",
      imageUrl: EmployeeThree,
    },
    {
      id: 4,
      name: "Doe John",
      position: "Sr. Graphic Designer",
      imageUrl: EmployeeFour,
    },
  ];
  return (
    <section className="lg:py-28 py-14 bg-slate-50">
      <Container>
        <div className="text-center space-y-8 ">
          <h1 className="Mulish-bold text-4xl lg:text-section-title text-black">
            Skilled Team
          </h1>
          <p className="Mulish-regular text-fontPrimary text-gray-600 lg:px-64 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-7 lg:pt-14">
          {SkilledTeamData.map((item, i) => {
            return (
              <div key={i} className="flex flex-col space-y-2">
                <img
                  className="w-full lg:h-full object-cover"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <h1 className="text-sm  font-bold ">{item.name}</h1>
                <p className="text-sm Mulish-light">{item.position}</p>
                <div className="flex space-x-4 text-sm text-black">
                  <FaFacebookF />
                  <FaLinkedinIn />
                  <FaTwitter />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SkilledTeamTwo;

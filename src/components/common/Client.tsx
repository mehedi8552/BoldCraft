import { useState } from "react";
import Container from "./Container";
import './Client.css'


const Client = () => {
  const [avatars, setAvatars] = useState([
    {
      title:
        "Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      subTitle: "AKLIMA – COO, AMERIMAR ENTERPRISES, INC.",
      isActive: true,
      url: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:
        "Malima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      subTitle: "Malima – COO, AMERIMAR ENTERPRISES, INC.",
      isActive: false,
      url: "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:
        "Fatima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      subTitle: "AKLIMA – COO, AMERIMAR ENTERPRISES, INC.",
      isActive: false,
      url: "https://images.unsplash.com/photo-1696964337990-1a1540c3deb5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:
        "Hasan The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      subTitle: "AKLIMA – COO, AMERIMAR ENTERPRISES, INC.",
      isActive: false,
      url: "https://images.unsplash.com/photo-1656275925082-a1222ab189c7?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:
        "Kamrul The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      subTitle: "Kamrul – COO, AMERIMAR ENTERPRISES, INC.",
      isActive: false,
      url: "https://images.unsplash.com/photo-1587812861198-6dfd6eec28f6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:
        "Malima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      subTitle: "Malima – COO, AMERIMAR ENTERPRISES, INC.",
      isActive: false,
      url: "https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:
        "Jasim The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      subTitle: "Jasim – COO, AMERIMAR ENTERPRISES, INC.",
      isActive: false,
      url: "https://images.unsplash.com/photo-1655828956134-11b918feeb9e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:
        "Ibrahim The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      subTitle: "Ibrahim – KO, AMERIMAR ENTERPRISES, INC.",
      isActive: false,
      url: "https://images.unsplash.com/photo-1587812861198-6dfd6eec28f6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  const handleClick = (index: number) => {
    setAvatars(
      avatars.map((avatar, i) => {
        if (i === index) {
          return { ...avatar, isActive: true };
        }
        return { ...avatar, isActive: false };
      })
    );
  };

  return (
    <div className="bg-gray-50 py-16 lg:py-24 dark:bg-black">
      <Container>
        <div className="flex flex-col items-center text-center p-8 space-y-10">
          {/* Testimonial Text */}
          <p className="  lg:text-4xl Mulish-medium font-primary text-gray-800 lg:px-20 dark:text-white">
            {avatars.find((avatar) => avatar.isActive)?.title}
          </p>
          <p className="mt-4 text-gray-500 max-w-2xl lg:pt-16 dark:text-gray-400">
            {avatars.find((avatar) => avatar.isActive)?.subTitle}
          </p>
          {/* User Avatars */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-6 lg:px-80 lg:pt-7">
            {/* Add a list of avatars */}
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className="relative w-20 h-20 rounded-md overflow-hidden shadow-md cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <img
                  src={avatar.url}
                  alt={`avatar-${index}`}
                  className="w-full h-full object-cover"
                />

                {avatar.isActive && (
                  <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full ring-2 ring-white"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Client;

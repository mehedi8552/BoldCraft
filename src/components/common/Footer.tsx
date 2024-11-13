import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="grid lg:grid-cols-2">
        {/* Left Section -top-20*/}
        <div className="relative  bg-footer-pattern bg-repeat !gradient-bg p-16 lg:p-32">
          <div className="relative z-10">
            <p className="text-white/90 Mulish-regular uppercase tracking-[4px] text-small mb-4">
              READY TO DO THIS
            </p>
            <h2 className="text-5xl lg:text-[75px] Mulish-black text-white mb-8 leading-tight">
              Let's get
              <br />
              to work
            </h2>
            <Link
              to="/contact"
              className="inline-block border-2 rounded-sm text-small uppercase tracking-[4px] py-[15px] px-[40px] Mulish-medium border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              style={{
                padding: "15px 40px",
                borderWidth: "2px",
                fontSize: "inherit",
                fontWeight: "inherit",
                transform: "translateY(0)",
                transition: "transform 0.3s ease, background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.backgroundColor = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              CONTACT US
            </Link>
          </div>
          <div className="absolute right-0 bottom-0 opacity-50">
            <div className="relative w-64 h-64">
              <div className="absolute right-0 bottom-0 w-48 h-48 rounded-full bg-pink-400/30" />
              <div className="absolute right-12 bottom-12 w-48 h-48 rounded-full bg-pink-400/30" />
              <div className="absolute right-24 bottom-24 w-48 h-48 rounded-full bg-pink-400/30" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-footer bg-cover bg-center  bg-no-repeat bg-black/70 bg-blend-overlay p-8 lg:p-16 flex justify-between items-center">
          <div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="footer-text text-[20px] Mulish-medium mb-6">
                  Quick Link
                </h3>
                <nav className="space-y-4">
                  <Link
                    to="/work"
                    className="block Mulish-regular text-gray-400 hover:text-primary transition-colors"
                  >
                    Work
                  </Link>
                  <Link
                    to="/about"
                    className="block Mulish-regular  text-gray-400 hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    to="/lets-talk"
                    className="block Mulish-regular text-gray-400 hover:text-primary transition-colors"
                  >
                    Let's Talk
                  </Link>
                </nav>
              </div>
              <div>
                <h3 className="footer-text text-[20px] Mulish-medium mb-6">
                  Say Hello
                </h3>
                <div className="space-y-4 mb-8">
                  <Link
                    to="mailto:admin@example.com"
                    className="block Mulish-regular text-gray-400 hover:text-primary transition-colors"
                  >
                    admin@example.com
                  </Link>
                  <Link
                    to="mailto:hr@example.com"
                    className="block Mulish-regular text-gray-400 hover:text-primary transition-colors"
                  >
                    hr@example.com
                  </Link>
                </div>
                <div className="flex space-x-4">
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-4 bg-gray-900  flex justify-center">
        <p className="Mulish-regular text-gray-400 text-sm">
          Copyright © {currentYear} FancyWP. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

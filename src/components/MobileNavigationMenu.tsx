import { useState } from "react";
import { Link } from "react-router-dom";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/icon/logo.png";
import { GrClose } from "react-icons/gr";
const MobileNavigationMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <FiMenu onClick={() => setOpen(true)} size={24} />
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader className="flex justify-between items-center px-4">
            <VisuallyHidden>
              <DrawerTitle>Navigation Menu</DrawerTitle>
            </VisuallyHidden>
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="logo" />
            </Link>
            <DrawerClose className="pr-4">
              <GrClose size={24} />{" "}
            </DrawerClose>
          </DrawerHeader>

          <div className="p-4">
            <nav className="flex flex-col space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger>Home</DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col gap-2 p-4 Mulish-regular ">
                  <Link to="/" onClick={() => setOpen(false)}>
                    Main Demo
                  </Link>
                  <Link to="#" onClick={() => setOpen(false)}>
                    Creative Agency
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger>Service</DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col gap-2 p-4 Mulish-regular">
                  <Link to="/service" onClick={() => setOpen(false)}>
                    Service
                  </Link>
                  <Link to="/service-details" onClick={() => setOpen(false)}>
                    Service Details
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Link to="/about" onClick={() => setOpen(false)}>
                    About{" "}
                  </Link>
                </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger>Page</DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col gap-2 p-4 Mulish-regular">
                  <Link to="/blog" onClick={() => setOpen(false)}>
                    Blog List
                  </Link>
                  <Link to="/blog-details" onClick={() => setOpen(false)}>
                    Blog Details
                  </Link>
                  <Link to="/service" onClick={() => setOpen(false)}>
                    Service
                  </Link>
                  <Link to="/service-details" onClick={() => setOpen(false)}>
                    Service Details
                  </Link>
                  <Link to="/portfolio" onClick={() => setOpen(false)}>
                    Portfolio
                  </Link>
                  <Link to="/portfolio-details" onClick={() => setOpen(false)}>
                    Portfolio Details
                  </Link>
                  <Link to="*" onClick={() => setOpen(false)}>
                    404
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger>Blocks</DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col gap-2 p-4 Mulish-regular">
                  <Link to="/portfolio" onClick={() => setOpen(false)}>
                    Portfolio
                  </Link>
                  <Link to="/team" onClick={() => setOpen(false)}>
                    Team
                  </Link>
                  <Link to="/service" onClick={() => setOpen(false)}>
                    Service
                  </Link>
                  <Link to="/video-popup" onClick={() => setOpen(false)}>
                    Video Popup
                  </Link>
                  <Link to="/progress-bar" onClick={() => setOpen(false)}>
                    Progress bar
                  </Link>
                  <Link to="/gallery" onClick={() => setOpen(false)}>
                    Gallery
                  </Link>
                  <Link to="/counters" onClick={() => setOpen(false)}>
                    Counters
                  </Link>
                  <Link to="/blog" onClick={() => setOpen(false)}>
                    Blog List
                  </Link>
                  <Link to="/clients-logo" onClick={() => setOpen(false)}>
                    Clint Logo
                  </Link>
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Contact Form
                  </Link>
                  <Link to="/map" onClick={() => setOpen(false)}>
                    Google Map
                  </Link>
                  <Link to="/columns" onClick={() => setOpen(false)}>
                    Columns
                  </Link>
                  <Link to="/pricing-table" onClick={() => setOpen(false)}>
                    Pricing Table
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Contact
                  </Link>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNavigationMenu;

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
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
              {" "}
              <GrClose size={24} />{" "}
            </DrawerClose>
          </DrawerHeader>

          <div className="p-4">
            <nav className="flex flex-col space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger>Home</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/about"
                className="text-foreground hover:text-primaryColors transition-colors"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                to="/service"
                className="text-foreground hover:text-primaryColors transition-colors"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primaryColors transition-colors"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNavigationMenu;

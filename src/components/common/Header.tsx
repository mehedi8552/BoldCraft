import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../assets/icon/logo.png";
import { MainNavigationMenu } from "../NavigationMenu";
import MobileNavigationMenu from "../MobileNavigationMenu";
import { ModeToggle } from "../mode-toggle";


const Header = () => {
  return (
    <header className="absolute py-4 top-0 left-0 right-0 z-50 w-full bg-transparent">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            <MainNavigationMenu /> 
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <MobileNavigationMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

import * as React from "react";
import { Link } from "react-router-dom";

import { cn } from "../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";


export function MainNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white">
            Home
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <ListItem to="/" title="Creative Agency">
                Innovative solutions for creative projects.
              </ListItem>
              <ListItem to="/" title="Creative One Page">
                Single-page design for creativity.
              </ListItem>
              <ListItem to="/" title="Creative Portfolio">
                Showcase your creative work effectively.
              </ListItem>
              <ListItem to="/" title="Personal Portfolio">
                Display personal achievements and skills.
              </ListItem>
              <ListItem to="/" title="Portfolio One Page">
                Compact portfolio on one page.
              </ListItem>
              <ListItem to="/" title="Portfolio One Page 02">
                Another version of single-page portfolio.
              </ListItem>
              <ListItem to="/" title="Digital Agency">
                Digital solutions for modern businesses.
              </ListItem>
              <ListItem to="/" title="Startup">
                Launch your startup with ease.
              </ListItem>
              <ListItem to="/" title="Paralax">
                Dynamic scrolling effects for engagement.
              </ListItem>
              <ListItem to="/"  title="Minimal Portfolio">
                Simple and clean portfolio design.
              </ListItem>
              <ListItem to="/" title="Business">
                Professional solutions for your business.
              </ListItem>
              <ListItem to="/" title="Home Particles">
                Interactive particle effects for homepage.
              </ListItem>
              <ListItem to="/" title="Studio Agency">
                Creative studio services and solutions.
              </ListItem>
              <ListItem to="/" title="Designer Portfolio">
                Portfolio tailored for designers' needs.
              </ListItem>
              <ListItem to="/" title="Interactive Agency">
                Engaging interactive agency experiences.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <ListItem to="/service" title="Service">
                Overview of services offered.
              </ListItem>
              <ListItem to="/service-details" title="Service Details">
                Detailed information about a specific service.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/about">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-white")}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white">
            Pages
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <ListItem to="/blog" title="Blog List">
                Overview of all blog posts.
              </ListItem>
              <ListItem to="/blog-details" title="Blog Details">
                Detailed view of a single blog post.
              </ListItem>
              <ListItem to="/service" title="Service">
                Overview of services offered.
              </ListItem>
              <ListItem to="/service-details" title="Service Details">
                Detailed information about a specific service.
              </ListItem>
              <ListItem to="/portfolio" title="Portfolio">
                Showcase of various projects.
              </ListItem>
              <ListItem to="/portfolio-details" title="Portfolio Details">
                Detailed view of a specific project.
              </ListItem>
              <ListItem to="/not-found" title="404">
                Page not found.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white">
            Blocks
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <ListItem to="/portfolio" title="Portfolio">
                Showcase of various projects.
              </ListItem>
              <Link to={"/team"}></Link>
              <ListItem to="/team"  title="Team">
                Meet our team members.
              </ListItem>
              <ListItem to="/service" title="Service">
                Overview of services offered.
              </ListItem>
              <ListItem to="/video-popup" title="Video Popup">
                Watch our featured videos.
              </ListItem>
              <ListItem to="/progress-bar" title="Progressbar">
                Visualize progress with bars.
              </ListItem>
              <ListItem to="/gallery" title="Gallery">
                Explore our image gallery.
              </ListItem>
              <ListItem to="/counters" title="Counters">
                Display numerical data dynamically.
              </ListItem>
              <ListItem to="/blog" title="Blog List">
                Overview of all blog posts.
              </ListItem>
              <ListItem to="/clients-logo" title="Client Logo">
                Logos of our esteemed clients.
              </ListItem>
              <ListItem to="/contact" title="Contact Form">
                Get in touch with us.
              </ListItem>
              <ListItem to="/map" title="Google Map">
                Locate us on the map.
              </ListItem>
              <ListItem to="/pricing-table" title="Pricing Table">
                Compare our pricing plans.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contact">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-white")}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none Mulish-medium text-linkSize">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

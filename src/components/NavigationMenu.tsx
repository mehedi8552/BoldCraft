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
              <ListItem href="/" title="Creative Agency">
                Innovative solutions for creative projects.
              </ListItem>
              <ListItem href="/" title="Creative One Page">
                Single-page design for creativity.
              </ListItem>
              <ListItem href="/" title="Creative Portfolio">
                Showcase your creative work effectively.
              </ListItem>
              <ListItem href="/" title="Personal Portfolio">
                Display personal achievements and skills.
              </ListItem>
              <ListItem href="/" title="Portfolio One Page">
                Compact portfolio on one page.
              </ListItem>
              <ListItem href="/" title="Portfolio One Page 02">
                Another version of single-page portfolio.
              </ListItem>
              <ListItem href="/" title="Digital Agency">
                Digital solutions for modern businesses.
              </ListItem>
              <ListItem href="/" title="Startup">
                Launch your startup with ease.
              </ListItem>
              <ListItem href="/" title="Paralax">
                Dynamic scrolling effects for engagement.
              </ListItem>
              <ListItem href="/" title="Minimal Portfolio">
                Simple and clean portfolio design.
              </ListItem>
              <ListItem href="/" title="Business">
                Professional solutions for your business.
              </ListItem>
              <ListItem href="/" title="Home Particles">
                Interactive particle effects for homepage.
              </ListItem>
              <ListItem href="/" title="Studio Agency">
                Creative studio services and solutions.
              </ListItem>
              <ListItem href="/" title="Designer Portfolio">
                Portfolio tailored for designers' needs.
              </ListItem>
              <ListItem href="/" title="Interactive Agency">
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
              <ListItem href="/service" title="Service">
                Overview of services offered.
              </ListItem>
              <ListItem href="/service-details" title="Service Details">
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
              <ListItem href="/blog" title="Blog List">
                Overview of all blog posts.
              </ListItem>
              <ListItem href="/blog-details" title="Blog Details">
                Detailed view of a single blog post.
              </ListItem>
              <ListItem href="/service" title="Service">
                Overview of services offered.
              </ListItem>
              <ListItem href="/service-details" title="Service Details">
                Detailed information about a specific service.
              </ListItem>
              <ListItem href="/portfolio" title="Portfolio">
                Showcase of various projects.
              </ListItem>
              <ListItem href="/portfolio-details" title="Portfolio Details">
                Detailed view of a specific project.
              </ListItem>
              <ListItem href="/not-found" title="404">
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
              <ListItem href="/portfolio" title="Portfolio">
                Showcase of various projects.
              </ListItem>
              <ListItem href="/team" title="Team">
                Meet our team members.
              </ListItem>
              <ListItem href="/" title="Service">
                Overview of services offered.
              </ListItem>
              <ListItem href="/video-popup" title="Video Popup">
                Watch our featured videos.
              </ListItem>
              <ListItem href="/progress-bar" title="Progressbar">
                Visualize progress with bars.
              </ListItem>
              <ListItem href="/gallery" title="Gallery">
                Explore our image gallery.
              </ListItem>
              <ListItem href="/counters" title="Counters">
                Display numerical data dynamically.
              </ListItem>
              <ListItem href="/blog" title="Blog List">
                Overview of all blog posts.
              </ListItem>
              <ListItem href="/clients-logo" title="Client Logo">
                Logos of our esteemed clients.
              </ListItem>
              <ListItem href="/" title="Contact Form">
                Get in touch with us.
              </ListItem>
              <ListItem href="/map" title="Google Map">
                Locate us on the map.
              </ListItem>
              <ListItem href="/faq" title="FAQ">
                Frequently asked questions.
              </ListItem>
              <ListItem href="/pricing-table" title="Pricing Table">
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
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

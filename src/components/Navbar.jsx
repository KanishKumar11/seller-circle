"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, MenuIcon } from "lucide-react";
import { FaLocationDot, FaMailchimp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  FaFacebook,
  FaLocationArrow,
  FaPhone,
  FaPhoneAlt,
  FaPhoneVolume,
} from "react-icons/fa";
import Link from "next/link";
import { useWindowScroll } from "@uidotdev/usehooks";
import { services } from "@/lib/data";

const Navbar = () => {
  const [isSecNav, setIsSecNav] = useState(false);
  const [{ y }] = useWindowScroll();
  useEffect(() => {
    if (y > 200) {
      setIsSecNav(true);
    } else {
      setIsSecNav(false);
    }
  }, [y]);
  return (
    <>
      <div className="w-full top-0 bg-[#0762C8]/90 backdrop-blur-3xl rounded-b-[23px] max-h-max relative z-[500]">
        <div
          className="lg:flex hidden max-w-7xl pt-5  mx-auto px-20  items-center justify-between text-sm "
          id="nav"
        >
          <div className="text-white flex gap-5 items-center justify-center">
            {/* <div className="text-sm">About Us</div>
            <div className="text-lg">
              <FaFacebook />
            </div> */}
          </div>
          <div className="flex gap-5 text-sm items-center">
            {/* <Link href="tel:+9108041688315">
              <div className="flex text-white items-center gap-2">
                <FaPhoneAlt className="text-lg" />
                +9108041688315
              </div>
            </Link> */}
            {/* <div className="flex text-white items-center gap-2">
              <FaLocationDot className="text-lg" />
              Kalyan Nagar, Bangalore
            </div> */}
            <Link href="mailto:hello@sellercircle.in">
              {" "}
              <div className="flex text-white items-center gap-2 font-extrabold ">
                <IoMail className="text-3xl" />
                Hello@Sellercircle.in
              </div>
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex items-center px-5 md:px-[80px] pt-[20px] pb-4  flex-row justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex gap-5 items-center">
            <DesktopNav />
            <Link href="/contact">
              {" "}
              <Button variant="cta">LET&#39;S TALK</Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
      {isSecNav && (
        <div className="w-full fixed slide-in-from-top-4 transition-all ease-in-out top-0 bg-white z-40 backdrop-blur-3xl  max-h-max text-black">
          <div className="max-w-7xl mx-auto flex items-center px-5 md:px-[80px] pt-[20px] pb-4  flex-row justify-between">
            <div>
              <Logo light={false} />
            </div>
            <div className="flex gap-5 items-center">
              <SecDesktopNav />
              <Link href="/contact">
                {" "}
                <Button variant="cta">LET&#39;S TALK</Button>
              </Link>{" "}
              <MobileNav className="invert" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const NavItems = [
  // {
  //   name: "Home",
  //   link: "/",
  // },
  {
    name: "About",
    link: "/",
    subItems: [
      {
        name: "Company",
        link: "/about",
        desc: "We're Your sales Growth Partner",
      },
      {
        name: "Careers",
        link: "/careers",
        desc: " Join Us ",
      },
    ],
  },

  {
    name: "Service",
    subItems: services,
  },
  {
    name: "Resources",
    subItems: [
      {
        name: "Our Blog",
        link: "/blogs",
        desc: "Latest on Advertising",
      },
      {
        name: "Case Study",
        link: "/case-studies",
        desc: "Celebrating strategy and success ",
      },
      {
        name: "Newsletter",
        link: "/newsletter",
        desc: "Join our Tribe",
      },
    ],
  },

  {
    name: "Pricing",
    link: "/pricing",
  },
];
const DesktopNav = () => {
  return (
    <div className="lg:block hidden">
      <NavigationMenu>
        <NavigationMenuList className="gap-5 text-white font-bold text-base uppercase">
          {NavItems.map((item) =>
            item.subItems ? (
              <Link href={item.link || "#"} key={item.name}>
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="text-white bg-transparent font-bold text-base uppercase">
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className=" font-bold text-sm uppercase ">
                    <NavigationMenuList className="grid w-max text-left  p-6 ">
                      {item.subItems.map((subItem) => (
                        <NavigationMenuItem key={subItem.name}>
                          <Link
                            href={subItem.link}
                            className="hover:bg-slate-100/70 block p-3"
                          >
                            {" "}
                            <div
                              className={cn("text-xl font-bold text-gray-700 ")}
                            >
                              {subItem.priority || subItem.name}
                            </div>
                            <p className="text-gray-600 text-sm capitalize">
                              {subItem.desc}
                            </p>
                          </Link>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </Link>
            ) : (
              <NavigationMenuItem
                key={item.name}
                className="hover:-translate-y-1 transition-transform ease-in-out hover:drop-shadow-xl px-4"
              >
                <NavigationMenuLink href={item.link}>
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
const SecDesktopNav = () => {
  return (
    <div className="lg:block hidden">
      <NavigationMenu>
        <NavigationMenuList className="gap-5 text-black font-bold text-base uppercase">
          {NavItems.map((item) =>
            item.subItems ? (
              <NavigationMenuItem key={item.name} className="relative">
                <NavigationMenuTrigger className="text-black bg-transparent font-bold text-base uppercase">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent className=" font-bold text-sm uppercase ">
                  <NavigationMenuList className="grid w-max text-left  p-6 ">
                    {item.subItems.map((subItem) => (
                      <NavigationMenuItem key={subItem.name}>
                        <Link
                          href={subItem.link}
                          className="hover:bg-slate-100/70 block p-3"
                        >
                          {" "}
                          <div
                            className={cn("text-xl font-bold text-gray-700 ")}
                          >
                            {subItem.priority || subItem.name}
                          </div>
                          <p className="text-gray-600 text-sm capitalize">
                            {subItem.desc}
                          </p>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem
                key={item.name}
                className="hover:-translate-y-1 transition-transform ease-in-out hover:drop-shadow-xl px-4"
              >
                <NavigationMenuLink href={item.link}>
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
const ListItem = ({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          // ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md sm:w-[40vw] p-3 py-2 text-sm w-[85vw] leading-none no-underline outline-none transition-colors hover:bg-accent max-lg:hover:text-zinc-800 focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="font-bold peer text-sm uppercase">{title}</div>
          <p className="group text-xs leading-snug text-wrap peer h-auto w-full max-lg:peer-hover:text-zinc-800  text-slate-300 max-lg:hover:text-zinc-800 ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";

const MobileNav = ({ className }) => {
  const [isActive, setIsActive] = useState(null);

  return (
    <div className="block lg:hidden relative z-[501]  ">
      <Sheet className="z-[501] relative max-sm:w-screen backdrop-blur-2xl bg-background">
        <SheetTrigger asChild className={className}>
          <div className="text-white cursor-pointer">
            <MenuIcon />
          </div>
        </SheetTrigger>
        <SheetContent className="z-[502] max-sm:w-screen">
          <NavigationMenu>
            <NavigationMenuList className="gap-5 text-white font-bold flex-col text-base uppercase text-left items-start ">
              {NavItems.map((item, index) =>
                item.subItems ? (
                  <NavigationMenuItem key={item.name} className="relative ">
                    <div
                      onClick={() => setIsActive(index)}
                      className="text-white font-bold text-base cursor-pointer uppercase flex gap-2 "
                    >
                      {item.name}
                      {isActive == index ? <ChevronUp /> : <ChevronDown />}{" "}
                    </div>
                    {/* <NavigationMenuContent className=" font-bold text-base uppercase "> */}
                    {isActive === index && (
                      <NavigationMenuList className="grid w-max text-left items-start  p-2 relative ">
                        {item.subItems.map((subItem) => (
                          <NavigationMenuItem key={subItem.name}>
                            <ListItem
                              className="text-balance"
                              href={subItem.link}
                              title={subItem.priority || subItem.name}
                            >
                              {subItem.desc}
                            </ListItem>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    )}
                    {/* </NavigationMenuContent> */}
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem
                    key={item.name}
                    className="hover:-translate-y-1 transition-transform ease-in-out hover:drop-shadow-xl"
                  >
                    <NavigationMenuLink href={item.link}>
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
              <Link href="/contact">
                {" "}
                <Button
                  variant=""
                  className="bg-background shadow-lg px-10 hover:bg-cyan-600 "
                >
                  LET&#39;S TALK
                </Button>
              </Link>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Navbar;

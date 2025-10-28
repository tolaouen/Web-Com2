"use client";
import { usePathname } from "next/navigation";
import {
  Navbar as TopNavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import React from "react";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <TopNavbar maxWidth="xl" position="sticky">
      <NavbarContent
        className="basis-1/5 sm:basis-full gap-10 "
        justify="start"
      >
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start" href="/">
            <Logo />
            <p className="font-bold text-[#23d98d]">WebCom2</p>
          </NextLink>
        </NavbarBrand>
        <div>
          <NavbarBrand className="justify-end">
            <ul className="hidden lg:flex gap-6 justify-center ml-2">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NavbarItem
                    key={item.href}
                    className="text-center font-bold"
                  >
                    <NextLink
                      className={clsx(
                        linkStyles({
                          color: isActive ? "success" : "foreground",
                        }),
                        "data-[active=true]:text-success data-[active=true]:font-medium"
                      )}
                      href={item.href}
                      data-active={isActive}
                    >
                      {item.label}
                    </NextLink>
                  </NavbarItem>
                );
              })}
            </ul>
          </NavbarBrand>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-4">
          <ThemeSwitch />
          <Button
            title="Sign In"
            className="hover:bg-[#637aff]"
            as={Link}
            href={"#"}
          >
            Log In
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}.label - ${index}`}>
              <Link
                className="w-full font-bold capitalize rounded-sm hover:bg-[#23d98d] pl-3"
                color={pathname === item.href ? "success" : "foreground"}
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </TopNavbar>
  );
};

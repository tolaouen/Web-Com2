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
import { Avatar } from "@heroui/avatar";
import {
  Modal,
  ModalContent,
  ModalBody,
} from "@heroui/modal";
import { Checkbox } from "@heroui/checkbox";
import {Input} from "@heroui/input";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import React from "react";
import { useDisclosure } from "@heroui/modal";

export const Navbar = () => {
  const pathname = usePathname();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
            onPress={onOpen}
          >
            Log In
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" className="mb-[50px]">
              <ModalContent>
                  <ModalBody>
                    <div className="flex flex-col gap-5 justify-center items-center">
                      <div>
                      <h1 className="text-[30px] text-primary font-bold">Log In Your Account</h1>
                      </div>
                      <div className="flex flex-col gap-5 w-80">
                         <Input
                            variant="bordered"
                            label="Email"
                            type="email"
                        />
                         <Input
                            variant="bordered"
                            label="Password"
                            type="password"
                        />
                      </div>

                      <div>
                        <Button className="bg-blue-400 w-80 rounded-lg">Log In</Button>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Checkbox size="sm" radius="full"><p>Remember</p></Checkbox>
                        <Link><p>Forget Password?</p></Link>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-4 border-1 rounded-lg justify-center items-center w-[250px] h-[40px] hover:bg-primary">
                              <Avatar
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAAA+VBMVEX////pQjU0qFNChfT6uwU0f/O4zvs6gfSJr/j6twDoOisjePPoNSXpPjDrWU/oLRr+9vZ7pff/vAAUoUAkpEn0ran619b82pT7wgD+68j947H/+e7//PafvPm/0vuBw5Df7+P63tz3xcPxl5HnJQ7qUEXxj4n4z83zoJzqSz/vgXrucWrsY1r1tbHrSBPoOjbvcSr0kx74rRH80XntZC3xhSPmGRr86+r4sk/936EJcfPS3/yowvnbwVKjsTjx9f5urEjkuBu9tC+ErkJyvoRRpj2az6hWs23j6/0emX2z2btAiuI8k8AyqkE5nZU1pGxCiOxVmtHJ5M+PSt3WAAACGElEQVRIieWSa3fSQBCGk20CJRcW2AWKxgJtqCmieNdatV5SUtFq5f//GJeE7CXJJOT4TZ+PO+c58+7MaNr/SWd60mecTDs1pMFp28dODPZnZw/369TXseXqHNfCblDdte84krTDwUFFwnMnJyXm+bSsmZ/vlcb1+6A2x5C1xYeyPgIyJlhtYDjzjOYyZA3oFighLYxni8UMY6dCG/jy9KzTQfI8DXSnTNN0kcl1lNE9dlxYC8TnnEVmAJ02qHlPllyb58vgmQ2Np0tYgzGMo2ex6IKRihi1mPhcZyYuO8McL4yYl0vrrI6mJZpx9Or1mzqa10rFt8p7o5ArXh+lXutC8d6ZBdiXvH6PeyPFsw8KMBu8fsG9+3t473l9yD1vD+/BX3v1cgqv3lzE/8A9NCUK5sn33vugeN1DQTcVTbG/9M56H+lEAzg2d54t7iW5657xCdEx5PF+B9Lj9oO9z4hBgIZX6YyaXfmZaV9QQkU781h+Hra+7jQaFv6Or8RW3r1rhErES641D9XKigox8jJaQxyAfZOpIQm6kiuT6BvfujqVuEpkkY43u+d1RBBF35v55aVJidKSEBRFiJAk/+0PM3NjgjFFMLc/WVYzlzImLBPprzvzrlBjHUmZSH8DmqatS0QSZtcjTxUBWSlZw1bckhaYlISTcm1rIqKolJJxtRWnXUVscTFsjWFFwoy7WTM2+zX69/gDaLcy7SET9nsAAAAASUVORK5CYII="
                                className="w-6 h-6"
                              />
                              <p>Google</p>
                          </div>
                          <div className="flex flex-row gap-5 border-1 rounded-lg justify-center items-center w-[250px] h-[40px] hover:bg-primary">
                              <Avatar
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAUVBMVEX///9mZmZeXl5iYmJXV1daWlqlpaXBwcH8/Py0tLRubm6rq6vw8PCIiIiBgYHc3Nz29vbQ0NCfn590dHTj4+OQkJDq6upSUlKWlpbHx8e6urpx1ZffAAABmElEQVRIib2W65KDIAyFIQQvULRg1db3f9AFu91tazTQmd38ZOabE5KTgBB/GX3dfECdg9bzuZyrUUkJ5YoVyhimmLM6cepayvlVT2pfyDVq5coztbByWCoo7noQSrnLekNwpZy4pUz1WMyJBUHLupwTfbD5ZTnVYXTXZfo5aHrrBjM42x9hF4egYgAae0kHfgQNqZvqMGuL3x1PxURTBaV/D2Kdup0hcVq+hFLy7UCeKG4EyYUyxHy1muViDtsSTchz4AhB934hQo8y3zTzguR0WV4QSQsYPtGO4k58aYA0jud7gRMF1nzzgeJEy4PyU5BedRmg+hREcqZyikOukZ5vhyLXXYYBdhrJW3XHcxlTJXVLgEuGAyQSds1ZAJGstiQ/VynAbJqS49ZEbl71c1au1Bq4ZtSVtHpWefSN6MiYI0lwObYjBTMKS5suxsAki+RjlZI9Hi6kE03hj6657f3zNZ9JBc9PK+xd8B4WHxAOwYYOH485w6VfUdSBuavvhWh8iN8HgJmYiw0aKv/ygPaLbcm18b/xBf8tD08u8Xy+AAAAAElFTkSuQmCC"
                                className="w-6 h-6"
                              />
                              <p>Apple</p>
                          </div>
                          <div className="flex flex-row gap-4 border-1 rounded-lg justify-center items-center w-[250px] h-[40px] hover:bg-primary">
                              <Avatar
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAY1BMVEX///8AAAD6+vr39/fb29tERETg4ODAwMA1NTXk5OTHx8eNjY3q6upJSUnX19eysrJSUlLx8fHQ0NBubm5zc3OUlJQeHh46OjqCgoKioqK4uLgXFxdfX19nZ2cRERFaWlonJycuL3mMAAACK0lEQVRIiZ1X2aKrIAwk7qhV69Kq3fz/rzyoLEFAvHeeQDISyDggIQ6EtGrbioaucSvyIgaJuMivsdoODHStlzYvJm3FMp/PltlpK7KTWXs3bUXvoCWvcx7AK7HxUh9tRWry6is8gPo/eQYzv8oD0ORQXucBlIgoypdH09MefZsSsXuZ4g380WPtRDbJbXX48t5gJMornDwhHuu0orRK6zGGZ3TQh0j2LR5M4lXaxyQ7k4h77/1IZmQUyVWyPYUPGDPaIWeEz5aJ2gOXijnQroXaewDOiShwzQ25xOU1Qqxl+jnn4d1guSKVUh+RqtgWLbHx8Qhp0CJ71PZCzdKTn2xXfmIlg39E2aHVUHQkMniRkr+wN3h3vqiqkZ+oZA1oxn9a45c8ZPvc5DfMMvhBbrJd+ImFDL4hyWd+ojpaOuk3V+qhqsF8Bzn/6COOKjbFwtUc04I7CqUE1YOt+BRqH1k1tPmFfdnxQ4HrqirUh8y5QZF2xm9i2Z7EA39hb5Vsotv7sj2c+dwlX8NzyEvkyGGZD8erARfZdoR/ArwK9FEPYODFh/ZSMuEEYiTGaZrnlzzQdythdtzqqewwDmtlTryyiTyZNSXQI/GuxmYxJWtO9eHudj/wtHR2FdjNI9B5B0W/RbI+oiEuvkE5vQdl5CZaXPuNhgMX0Spm5QsQOogOd0l9ROdVOejOiF3g4jFEzbHEgtj4/Drp+UVJgX13/YWDhSn28M8Q2i7Vf7CYFbqBLkDhAAAAAElFTkSuQmCC"
                                className="w-6 h-6"
                              />
                              <p>Github</p>
                          </div>
                        </div>

                    </div>
                       
                  </ModalBody>
              </ModalContent>
          </Modal>
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

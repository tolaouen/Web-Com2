"use client";
import { Image } from "@heroui/image";
import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { Button, ButtonGroup } from "@heroui/button";
import { ChatIcon, Logo } from "@/components/icons";
import { Avatar } from "@heroui/avatar";
import Marquee from "react-fast-marquee";

export default function ContactPage() {
  return (
    <div>
      <section>
        <div>
          <div className="grid grid-cols-5 gap-1 place-items-center my-[70px]">
            {/* Faceboook image  */}
            <motion.div
              initial={{ y: -40, opacity: 1 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{
                duration: 3,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Link as={Link} href={siteConfig.links.facebook} target="blink">
                <Image src="/facebook.png" width={"70px"} title="Facebook" />
              </Link>
            </motion.div>
            {/* Website image  */}
            <motion.div
              initial={{ y: -40, opacity: 1 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{
                duration: 3.1,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Link as={Link} href={siteConfig.links.discord} target="blink">
                <Image
                  src="/website.png"
                  width={"70px"}
                  className="relative top-[80px]"
                  title="Website"
                />
              </Link>
            </motion.div>
            {/* Instagram image */}
            <motion.div
              initial={{ y: -40, opacity: 1 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{
                duration: 3.2,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Link as={Link} href={siteConfig.links.instagram} target="blink">
                <Image src="/instagram.png" width={"70px"} title="Instagram" />
              </Link>
            </motion.div>
            {/* Github image */}
            <motion.div
              initial={{ y: -40, opacity: 1 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{
                duration: 3.3,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Link as={Link} href={siteConfig.links.github} target="blink">
                <Image
                  src="/github.png"
                  width={"70px"}
                  className="relative top-[80px]"
                  title="Github"
                />
              </Link>
            </motion.div>
            {/* Youtube Image */}
            <motion.div
              initial={{ y: -40, opacity: 1 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{
                duration: 3.4,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Link as={Link} href={siteConfig.links.youtube} target="blink">
                <Image src="/youtube.png" width={"70px"} title="Youtube" />
              </Link>
            </motion.div>
          </div>
          {/* Text animation page */}
          <div className="grid grid-cols-3 gap-1 place-items-center text-[20px] font-bold">
            <motion.h1
              initial={{ y: -40, opacity: 1 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{
                duration: 3.2,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-primary font-bold lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15px]"
            >
              You Can
            </motion.h1>
            <motion.h1
              initial={{ y: -40, opacity: 1 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{
                duration: 3.0,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-secondary font-bold lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15px]"
            >
              Us From
            </motion.h1>
            <motion.h1
              initial={{ y: -40, opacity: 1 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{
                duration: 3.1,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-success font-bold lg:text-[30px] md:text-[25px] sm:text-[20px] text-[15px]"
            >
              Any App
            </motion.h1>
          </div>
          <div className="grid grid-cols-5 gap-1 place-items-center my-[70px]">
            {/* Linkedin image */}
            <motion.div
              initial={{ y: -40, opacity: 1 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{
                duration: 2.3,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Link as={Link} href={siteConfig.links.linkedin} target="blink">
                <Image src="/linkedin.png" width={"70px"} title="LinkedIn" />
              </Link>
            </motion.div>
            {/* Whatsapp Image */}
            <motion.div
              initial={{ y: 50, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2.2,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Link as={Link} href={siteConfig.links.whatsapp} target="blink">
                <Image
                  src="/whatsapp.png"
                  width={"70px"}
                  className="relative bottom-[80px]"
                  title="WhatsApp"
                />
              </Link>
            </motion.div>
            {/* Outlook image */}
            <motion.div
              initial={{ y: -40, opacity: 1 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{
                duration: 2.1,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Link as={Link} href={siteConfig.links.outlook} target="blink">
                <Image src="/outlook.png" width={"70px"} title="Outlook" />
              </Link>
            </motion.div>
            {/* Gmail image */}
            <motion.div
              initial={{ y: 50, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2.1,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Link as={Link} href={siteConfig.links.gmail} target="blink">
                <Image
                  src="/gmail.png"
                  width={"70px"}
                  className="relative bottom-[80px]"
                  title="Gmail"
                />
              </Link>
            </motion.div>
            {/* Telegram image */}
            <motion.div
              initial={{ y: -40, opacity: 1 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{
                duration: 2.3,
                ease: "backOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Link as={Link} href={siteConfig.links.telegram} target="blink">
                <Image src="/telegram.png" width={"70px"} title="Telegram" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Next section design responsive page dynamic */}
      <section className="my-[250px]">
        <div className="text-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="tracking-tight inline font-semibold from-[#0A8077] to-[#965AF0] text-transparent bg-linear-to-b bg-clip-text capitalize text-[35px] lg:text-[50] md:text-[50px] sm:text-[45px]">
              It's just
            </h1>
            <h1 className="tracking-tight inline font-semibold from-[#965AF0] to-[#0A8077] text-[30px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-transparent bg-linear-to-b bg-clip-text capitalize">
              secret and be carefully
            </h1>
            <p className="text-[18px] leading-[30px] lg:w-[800px] md:w-[800px]">
              Contact us now you'll get any benefits for your business
              development tech. See you at your business development tech.
            </p>
            <Button
              className="size-9 w-32 bg-linear-to-tr from-[#701BBC] to-[#F597DD] mt-10"
              endContent={<ChatIcon />}
              variant="bordered"
            >
              Chats Now
            </Button>
          </div>
        </div>
      </section>
      {/* Section flex page detail about contact */}
      <section className="my-[100px]">
        <div className="flex flex-col gap-10 justify-center items-center lg:flex lg:flex-row lg:justify-between lg:items-center md:flex md:flex-row md:justify-between md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-[60px] inline font-bold from-[#701BBC] to-[#F597DD] bg-linear-to-bl text-transparent bg-clip-text">
                Contact Us
              </h1>
              <div className="flex flex-row gap-2 items-center">
                <Avatar size="sm" src="/profile-customer.png" />
                <small className="text-default-400">
                  WebCom2 Customer service
                </small>
              </div>
            </div>

            <p className="leading-9 mr-[50px]">
              We have a customer service for reponse any problem for you.
              everything if posible you just be a partner with us. let's start
              your business plan with us now.
            </p>
            <p className="border-1 border-[#701BBC] rounded-lg lg:text-[20px] p-1 mr-[50px] hover:bg-[#1FCBD1] font-semibold">
              Contact us now if you need us to help
            </p>
          </div>
          <div>
            <Image src="customer.jpg" title="Image" width={"1000px"} />
          </div>
        </div>
      </section>
      {/* Last section in this page contact */}
      <section className="mt-[300px]">
        <div>
          <div>
            <h1 className="text-[50px] inline font-bold from-[#94B0E5] to-[#F597DD] bg-clip-text text-transparent bg-linear-to-br tracking-tight">
              Special Memberships
            </h1>
            <p className="flex flex-row my-[20px] gap-1">
              Enjoy with the partner <span>{<Logo />}</span>
              <Link href="/">
                <span className="text-success hover:underline"> WebCom2 </span>
              </Link>
              in this moment.
            </p>
          </div>
        </div>
      </section>
      {/* section list detail about special member */}
      <section className="mt-[100px] mb-[200px]">
        <Marquee pauseOnHover>
        <div className="flex flex-row justify-center items-center gap-10 w-full">
          {/* Cambodia airway */}
          <div className="flex flex-row gap-2">
            <Avatar
              size="lg"
              className="object-cover"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAMAAAAynjhNAAAAYFBMVEVHcEzNJDnTIjLTIS/TIzLTIzPWIi85QJYeQJjUIjIfQJgcP5kdQJogQJggQJjZHykfP5gfQJggQJjNJDfTIzIgQJgdP5gmP5YdQJkfQJgfP5fUIi8fP5hXOoJ2NXU3PY3T0qweAAAAHXRSTlMAwnMu/9piCIipzyQX8foSVP+68EniMqZnmECIeRfzxHQAAAGFSURBVHgBfZIHooMgEEQnFaSFIfa0+9/yA8vvSZ7d5+yqgN9stnjDbn94pzf7/fG13e4zu3fh77hCQ+vW+VB01+4bi4rzwaFw2hc2qESmFia1tD5X3aMwkGPtMZFTLVhspkPGZj2jwEzRait6J7VJg8zCzALguG+cpDYZpbU0P4msP84ZZtbP54Zsu6bPl6zZasbAjI8SlnjrSOOwkq1O96n7T+0VjGiD7vyVPo4DC0EjifZzNcJGU7gC18DK7cueKbT/ZqXC/VPzkwGZOSKK7raXQ9YPCsECLpCh/psJyjr0nzpo+afXhdqRCQtJo3aiF4VConL5nMREejN4dSl6RdSxpjVWzNRWhkDZU9YLUm0HS06rpoehs6YIGHIcOVjPUUaW3o6MKjCTMJPrSoNJJkScV7hwxZXmSs8ZgROuKwauEMarBZZsBjMRV3JxNjGoz/lso8U4jBi85YKJlVWC9jq0GaOZkLgiGvrJSuEUgrnOnsHIj0y84heqbNchJ1wN6NmJ+AC3YyJlYaCDrgAAAABJRU5ErkJggg=="
            />
            <div>
              <h1>Cambodia Airways</h1>
              <small className="text-default-500">Airline Company</small>
            </div>
          </div>
          {/* Chipmong bank */}
          <div className="flex flex-row gap-2">
            <Avatar
              size="lg"
              className="object-scale-down"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEVHcEwAhUUAhUUBhUUAhUUAhUUAhUUBhEUAhUUBhUUBhEUBhUUBhUUBhUUBhEX///8AfzsAezIAgkHI39K61sau0Lzr9O9PnnF9tJNzr4zd7OQ4lGGdxa1jp4CMvKApj1gXik/SvJZmAAAADnRSTlMAGU7fQDYj7WeM9snNwcQze4wAAAFXSURBVCiRfZOLkoIwDEVxV0VQ26SlLwrW//9KkxRQnNnNDLT0QB43oWlWO3XXVqn22p2ab7sQWK2/7NDhV04BEcHQpj2/2ZGeDQI4a4dHRqDHn08GatDuOWiyccY3PdAWZz7WsYy8OKbVM8XDqKv5QG+lkClwK3lSvMDegji1pVgdOCvOmWpA9pjHlD37dLrCnmqnZCbtFH/mS6yQ3Sp1bDqCtjwk4sOAGciMMNU1d4Izu9ODAS6XolSmbhQSklSXn0btrW3oQ/aZgo6wHUN9b4GWrg0CRiP7xa2dNmiQU4giw12ZskCUhLIoOFAGNy4FvcDkE0Kp2meXDJXCIsQKWVrO3M90RxZB5PMMpTE2T1MYJYF+FZ6hC1ULdmyxCs8tg+KkX2vnRiq03ZoNtdn26WRhAc+fYyLHesqj/xyTdcBMogGzEfcDtoymARlN9TWa/w/1H7/DCz4EKTQO0nAtAAAAAElFTkSuQmCC"
            />
            <div>
              <h1>ChipMong Bank</h1>
              <small className="text-default-500">Local Bank</small>
            </div>
          </div>
          {/* ABA Bank */}
          <div className="flex flex-row gap-2">
            <Avatar
              size="lg"
              className="object-cover"
              src="data:image/png;base64,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"
            />
            <div>
              <h1>ABA Bank</h1>
              <small className="text-default-500">International Bank</small>
            </div>
          </div>
          {/* Grabe Foods Cambodia */}
          <div className="flex flex-row gap-2">
            <Avatar
              size="lg"
              className="object-fill"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAaVBMVEUBsE3///8Ar0kAqzsArD8ArkYArUPN6dRVv3UAqTav3bvk8+jf8eT3+/gzt2Du9+9txoeN0J/G5s5iwn5zyY0ls1aAzJVEumnT69nZ7t56ypFJvG4dslG/48m34MKHzpuh17CZ1akApypPXAQkAAAB2klEQVRIie2TyZLdIAxFLQQYzGw847H//yMbv04leS6/yi4r3w2FxOEKBEXx6NGjR/8QZ5x9TDKKEjm55Ra/dh9IxsPgjKr6uzwdmnq7B3kE3fXWr9DfeH4GmYCpXZ0bNjafc8IRKTmrfxWfwXLDV+gihM3DLkRXQnv621W5UsimdKqyPINTF3OoFngx3NwMLSWEobCk4B6q1Fdem9DHFQKlg6jyvinA8k7SsVt3mkdEKZFZEEG5pOt5UWOwMPF2UWzXqqJq5++Vti5lp1GdsmsVjI/BtVDFJtcHMrgCSh8HR+FyRH6ejSSRpaJLynM5dEslCaPQmlTP5pCMfbk4vPUTYTa5DXzQWouxcTb7o0o65kU4+rKTZX2WSJdQHX/XSsdpWWVBohdOmJRBQTBv4X+BU3DTIvO6elvfQDYZBvv55HbTw5c5Qb4eh8qhfvBlU08RJinz1Tv/1kvMN6hBa1DEHT8gscBL0KYus+McXDJGwxHh0kmulSUxFq0qUb7Agh6mn2OL2bHjWCtrI2lAXB4PwWBcXTtzYIHGmjNPG2MGNw5NfohFzpsRVOLFVRxt0/Q0J5ifffs6Ok0+0WijPfM0j3j76whjP3FSkN8h8mdGbqlHjx49+g/6BpsNHkwTHSi0AAAAAElFTkSuQmCC"
            />
            <div>
              <h1>Grabe KH</h1>
              <small className="text-default-500">Delivery </small>
            </div>
          </div>
          {/* WOW NOW */}
          <div className="flex flex-row gap-2">
            <Avatar
              size="lg"
              className="object-fll"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAjVBMVEVHcEz//////v7//v7/9/f////////+4OD////91tb/9PT/9fX+4eH//f3+5OT7v7/7sbH9zMz6qKj6sbH////+6Oj7w8P6srL8z8/////wAADyAAD3cXH+6+v7tLT/+fn6oqL8zc35k5PyGBj4iYn3fHz0QEDyEBD8wMDzMDD6qan1S0v1U1PzIyP1X1/Iff4HAAAAGXRSTlMAM3hi7CIQ/k791LHSu6bb47vl1Zbl4Oesf9I+8wAAAW1JREFUKJGFktl2rCAQRYnaDm0nWbk3E0cQRHG2///zUqiYdOch5wVWbShOFcWY1ynML29v5zx4YPd6yPVcgFRfy3N4g+KnhkgrjGkd1+fTNzu9Dxi05JxXHYzpMCXpwT4AowjxpCt6zqVAl+00fkZd8VUC5bqW6JLN19OCbGNJMW8bou159Smgj9C477iFDgi+YPIRg8pvZV1E5Mai95HGw76ig2PKwmVRHur9XIJOScw5+4TwjFdo1lU15KKlvP8POxQUhyFXlmT/9tJ+qfkL/kx7I5f2BfYuWm71tIhYUA+3TBaYrGgkpkfXPd8WVVpLhVaiBmYNTX/+jL3bcnKTIJSr18oFMmYsvO5+LWySXZ2/DKOBeXXfcim6xF2sW7qU1LPiPQSGKF4HocRAVK59VO2gqArAj0I6ohu/IT2Jog/8EKUlzZTZYW0WDNnBaBouLlO5dQ1oopT9VJBp/9GjfI3vZz7NI8eix/BAX5iHQWE1bQyHAAAAAElFTkSuQmCC"
            />
            <div>
              <h1>WOW Now</h1>
              <small className="text-default-500">Delivery</small>
            </div>
          </div>
          {/* Vatanak Hotel*/}
          <div className="flex flex-row gap-2">
            <Avatar
              size="lg"
              className="object-fill"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAnFBMVEUUPG3///8POmwAL2YAJWEAN24AMWcANmkAM2gANG+YobTVrjUzT3n6+/zBxdAAK2QnR3SLlatoeJXPqjirssHn6e3c3+UAAFPN0ttdb49LYIRQZIZFW4B2b1qtk0ehi0x5hp+zl0XJpjtBT2eBjaSzusfw8vWUglGSez4rRGoAAE4AE1pPWGS9nDkbOWNwf5pZXGIAG127m0Lgti/1fjAFAAABZklEQVRIie2SW3PbIBCFl5tACCHAoCBfaidB5NbWafv//1ux4jy0cpLnTPQNox12dDhzFgAWFhYWvhqcYzwVjl9brK7ZtMFvqopgfVQbDGIYtur8H9t92+8YA0yrC4LJBgNXSLeyEodWI8cxJ6c2u26am1tmYp77mLJ4qQDJ2g01p6I4dp6Q06GrAs8o/W9JfLC6V61d50hN68aQjy5v0cH7KAVAfdesVvc9moUUqb+yvQluaKPjGVqwWmVq40iHQIvlQxE2B9/NAipUwtkgo3ThMWzyYPVVa+KT85MQ2PdV0/z4OZsqVq2O6JhlzEe0RiqHFAYkUAj6RQj1825/vZ/PtPJDkmZUbiRJ219WUqkd8SolJaeBsOfmd11fuA3CRYVJGT+Ip36gVFDaVV1HO3LOVe/+4Pfuv9BFJ6VN0vut9nK04qzcXzL8NzAYpbZKGVOWMa999oFuekT4BMDLd2FhYeGz8hekBRcNl6l0wQAAAABJRU5ErkJggg=="
            />
            <div>
              <h1>ACLEDA Bank</h1>
              <small className="text-default-500">Local Bank</small>
            </div>
          </div>
        </div>
        </Marquee>
      </section>
    </div>
  );
}

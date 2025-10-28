"use client";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Checkbox } from "@heroui/checkbox";
import { BuyIcon } from "@/components/icons";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <div>
      <motion.section
        ref={ref}
        style={{ y }}
        className="text-center mb-[100px]"
      >
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="flex flex-row gap-2 justify-center">
            <h1>
              <Logo />
            </h1>
            <p className="tracking-tight inline font-semibold from-[#2ECD31] to-[#199B91] text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl bg-clip-text text-transparent bg-linear-to-b">
              WebCom2
            </p>
            <Chip className="hover:bg-[#006FEE]">
              <p>v2.0</p>
            </Chip>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <h3 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl bg-clip-text text-transparent bg-linear-to-b capitalize">
              Get a new experiences
            </h3>
            <h3 className="font-bold text-[clamp(15px,10vw,15px)] sm:text-[clamp(18px,10vw,18px)] lg:text-[23px] capitalize">
              And build a future artificial inteligence of modern industries
            </h3>
          </div>
          <div className="lg:flex lg:flex-row gap-1 lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center items-center">
            <div className="w-[200px] hover:blur-[1px]">
              <Image src="/ai-img.jpeg" title="Ai Image" />
            </div>
            <div className="w-[200px] hover:blur-[1px]">
              <video loop autoPlay muted>
                <source src="/ai-video.mp4" type="video/mp4" />
                <source src="/ar-video.webm" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="mt-2">
            <Button className="bg-[#2E84CA]">Get Started</Button>
          </div>
        </div>
      </motion.section>
      <motion.section
        ref={ref}
        style={{ y }}
        className="text-center my-[150px]"
      >
        <div className="flex flex-col justify-center items-center gap-8 lg:flex lg:flex-row lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center">
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="flex flex-row gap-2 font-bold text-[40px] justify-center">
              <h1 className="text-primary">Starting</h1>
              <h1 className="text-danger font-medium text-[20px] lg:text-[50px] md:text-[30px] sm:text-[20px]">
                Understand
              </h1>
              <h1 className="text-success">First</h1>
            </div>
            <div>
              <p className="font-medium text-[18px] text-center lg:w-[500px] md:w-[400px]">
                Web com2 is best service artificial inteligence first startup
                <span className="text-primary hover:underline">
                  in cambodia.
                </span>
                we'll provide everything that relate technology industry build
                your modern business.
              </p>
            </div>
            <div>
              <Button className="bg-default size-7 w-full hover:underline m-1">
                First Step
              </Button>
              <Button className="bg-primary size-7 w-5/6 hover:underline m-1">
                Second Step
              </Button>
              <Button className="bg-secondary size-7 w-4/5 hover:underline m-1">
                Third Step
              </Button>
              <Button className="bg-success size-7 w-3/4 hover:underline m-1">
                Fourth Step
              </Button>
              <Button className="bg-danger size-7 w-2/3 hover:underline m-1">
                Final Step
              </Button>
            </div>
          </div>
          <div className="lg:w-[800px] md:w-[600px] sm:w-[600px] w-[400px]">
            <video loop autoPlay muted>
              <source src="/ai-video.mp4" type="video/mp4" />
              <source src="/ar-video.webm" type="video/mp4" />
            </video>
          </div>
        </div>
      </motion.section>
      {/* section detail */}
      <motion.section ref={ref} style={{ y }} className="mt-[50px]">
        <div className="flex flex-col justify-center gap-5 lg:flex lg:flex-row lg:justify-between lg:items-center md:flex md:flex-col md:justify-between md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center ">
          <div className="flex flex-row gap-5 justify-center items-center lg:w-[600px]">
            <div className="w-[600px]">
              <Image src="/ai-future-3.jpeg" title="Future Ai" />
            </div>
            <div>
              <p className="leading-[30px] lg:text-[20px] md:text-[18px]">
                Inspirite of artificial inteligences is helped industry increase
                the product in time remain the buget. Ai provide a businessman
                easy controlling and management in industry.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 justify-center items-center lg:w-[600px]">
            <div className="w-[600px]">
              <Image src="/ai-future-2.jpeg" title="Future Ai" />
            </div>
            <div>
              <p className="leading-[30px] lg:text-[20px] md:text-[18px]">
                Inspirite of artificial inteligences is helped industry increase
                the product in time remain the buget. Ai provide a businessman
                easy controlling and management in industry.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Section button display */}
      <motion.section ref={ref} style={{ y }} className="my-[50px]">
        <div className="text-center ">
          <Button className="size-9 w-2/3 text-[18px] bg-gradient-to-bl from-[#43BFA1] to-[#347AE1]">
            Try Ai Now
          </Button>
        </div>
      </motion.section>
      {/* Section after trying ai button */}
      <motion.section ref={ref} style={{ y }} className="mb-[100px]">
        <div className="flex flex-col justify-center gap-5 lg:flex lg:flex-row lg:justify-between lg:items-center md:flex md:flex-col md:justify-between md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center ">
          <div className="flex flex-row gap-5 justify-center items-center lg:w-[600px]">
            <div className="w-[600px]">
              <Image src="/ai-future.jpeg" title="Future Ai" />
            </div>
            <div>
              <p className="leading-[30px] lg:text-[20px] md:text-[18px]">
                Inspirite of artificial inteligences is helped industry increase
                the product in time remain the buget. Ai provide a businessman
                easy controlling and management in industry.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 justify-center items-center lg:w-[600px]">
            <div className="w-[600px]">
              <span>
                <Image src="/ai-future-1.jpeg" title="Future Ai" />
              </span>
            </div>
            <div>
              <p className="leading-[30px] lg:text-[20px] md:text-[18px]">
                Inspirite of artificial inteligences is helped industry increase
                the product in time remain the buget. Ai provide a businessman
                easy controlling and management in industry.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section ref={ref} style={{ y }} className="my-[200px]">
        <div className="grid grid-cols-2 justify-self-center gap-3 lg:grid lg:grid-cols-3 lg:justify-self-center md:grid md:grid-cols-3 md:justify-self-center sm:grid sm:grid-cols-2 sm:justify-self-center">
          <div>
            <Card className="hover:bg-default-200">
              <CardHeader>
                <h1 className="text-primary text-[20px] font-bold text-center">
                  Normal Plan
                </h1>
              </CardHeader>
              <CardBody>
                <div>
                  <Image src="/plan-free.png" className="w-[200px]" />
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex flex-col justify-center">
                  <Checkbox isDisabled defaultSelected radius="none">
                    free for 30days.
                  </Checkbox>
                  <Checkbox isDisabled defaultSelected radius="none">
                    limit processing development.
                  </Checkbox>
                  <Checkbox isDisabled defaultSelected radius="none">
                    stable for running process.
                  </Checkbox>
                  <Checkbox isDisabled defaultSelected radius="none">
                    Price: $0.99/month
                  </Checkbox>
                  <Button
                    className="text-white bg-primary size-8 w-1/2 mt-4 text-center"
                    endContent={<BuyIcon />}
                  >
                    Buy Now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="hover:bg-default-200">
              <CardHeader>
                <div>
                  <h1 className="text-secondary text-[20px] font-bold text-center">
                    High Plan
                  </h1>
                </div>
              </CardHeader>
              <CardBody>
                <div>
                  <Image src="/plan-intermediate.png" className="w-[200px]" />
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex flex-col justify-center">
                  <Checkbox isDisabled defaultSelected radius="none">
                    high performance.
                  </Checkbox>
                  <Checkbox isDisabled defaultSelected radius="none">
                    full processing development.
                  </Checkbox>
                  <Checkbox isDisabled defaultSelected radius="none">
                    stable for running process.
                  </Checkbox>
                  <Checkbox isDisabled defaultSelected radius="none">
                    support from developer.
                  </Checkbox>
                  <Checkbox isDisabled defaultSelected radius="none">
                    Price: $4.99/month - $49.99/year
                  </Checkbox>
                  <Button
                    className=" text-center text-white size-8 w-1/2 bg-primary mt-4"
                    endContent={<BuyIcon />}
                  >
                    Buy Now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="hover:bg-default-200">
              <CardHeader>
                <h1 className="text-success text-[20px] font-bold text-center">
                  Premuim Plan
                </h1>
              </CardHeader>
              <CardBody>
                <div>
                  <Image src="/plan-premuim.png" className="w-[200px]" />
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex flex-col justify-center">
                  <Checkbox isDisabled defaultSelected radius="none">
                    premuim membership.
                  </Checkbox>
                  <Checkbox isDisabled defaultSelected radius="none">
                    unlimited processing development.
                  </Checkbox>
                  <Checkbox isDisabled defaultSelected radius="none">
                    support from developer.
                  </Checkbox>
                  <Checkbox isDisabled defaultSelected radius="none">
                    standard professional mode.
                  </Checkbox>
                  <Checkbox isDisabled defaultSelected radius="none">
                    Price: $19.99/month - $99.99/year
                  </Checkbox>
                  <Button
                    className=" text-center text-white size-8 w-1/2 bg-primary mt-4"
                    endContent={<BuyIcon />}
                  >
                    Buy Now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

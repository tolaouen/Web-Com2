import { Button } from "@heroui/button";
import { LinkIcon } from "@/components/icons";
import { Avatar } from "@heroui/avatar";
import Marquee from "react-fast-marquee";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

export default function DevloperPage() {
  return (
    <div>
      <section className="mt-[50px]">
        <div className="flex flex-col justify-center items-center gap-4 lg:flex lg:flex-row lg:justify-center lg:items-center md:flex md:flex-row md:justify-centr md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center">
          <div>
            <Button
              className="text-[12px] w-40 h-8 rounded-full bg-linear-to-tr from-[#5CD2F1] to-[#D8AFE4] text-[#3691DA] "
              startContent={<LinkIcon className="relative top-1 left-3" />}
              variant="bordered"
            >
              Connect &#38; Grow
            </Button>
            <h1 className="lg:text-[60px] md:text-[50px] sm:text-[60px] text-[40px] lg:text-left md:text-left sm:text-center text-center font-bold ">
              Make your experience with a modern Ai for business .
            </h1>
          </div>
          <div>
            <p className="text-[15px] text-center inline from-[#F882F2] to-[#A5A5EE] text-transparent bg-clip-text bg-linear-to-br">
              Consolidate your projects into united centralised control center.
              No Credit card.
            </p>
            <div className="mt-8 flex flex-row gap-5 justify-center">
              <Button className="rounded-lg">Learn More</Button>
              <Button color={"primary"} className="rounded-lg">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[30px]">
        <div>
          <div className="text-center lg:text-left md:text-left sm:text-center">
            <p className="text-[20px]">
              Webcom2 is a first industry in cambodia that open opportunity to
              explore with real developer of us.
            </p>
            <h1 className="lg:text-[70px] md:text-[60px] sm:text-[50px] text-[40px] font-semibold inline text-transparent bg-linear-to-tl bg-clip-text from-[#5CD2F1] to-[#D8AFE4]">
              Meeting a professional developer
            </h1>
          </div>
        </div>
      </section>
      {/* Sectionn developer show list */}
      <section className="my-[200px]">
        <div>
          <div className="text-center my-[100px]">
            <h1 className="text-[50px] mt-[200px] font-bold inline text-transparent bg-linear-to-tl bg-clip-text from-[#A361CC] to-[#4BB4F0] ">
              Top Developers
            </h1>
          </div>
          {/* Marquee page left to right  */}

          <Marquee pauseOnHover className="[--duration:20s]">
            <div className="flex flex-row gap-10 justify-center items-center overflow-hidden w-full">
              <section className="flex flex-row gap-2">
                <div>
                  <Avatar size="lg" />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Ouen Tola</p>
                  <small>&#64;CEO Developer</small>
                </div>
              </section>
              <section className="flex flex-row gap-2 justify-center">
                <div>
                  <Avatar size="lg" />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Ouen Tola</p>
                  <small>&#64;CEO Developer</small>
                </div>
              </section>
              <section className="flex flex-row gap-2 justify-center">
                <div>
                  <Avatar size="lg" />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Ouen Tola</p>
                  <small>&#64;CEO Developer</small>
                </div>
              </section>
              <section className="flex flex-row gap-2 justify-center">
                <div>
                  <Avatar size="lg" />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Ouen Tola</p>
                  <small>&#64;CEO Developer</small>
                </div>
              </section>
              <section className="flex flex-row gap-2 justify-center">
                <div>
                  <Avatar size="lg" />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Ouen Tola</p>
                  <small>&#64;CEO Developer</small>
                </div>
              </section>
            </div>
          </Marquee>
        </div>
      </section>
      {/* Section that developer list everything their made */}
      <section className="my-[100px]">
        <div className="text-center capitalize mb-[60px]">
          <p className="text-[30px] font-semibold inline text-transparent bg-linear-to-tl bg-clip-text from-[#73A2EA] to-[#DE34E7]">
            We are the teammate
          </p>
          <h1 className="text-[60px] font-semibold">
            Improving your skills together
          </h1>
          <p className="text-[35px] font-semibold inline text-transparent bg-linear-to-tl bg-clip-text from-[#C2CAFC] to-[#8C4791]">
            Quick start to be your professional developer
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <div>
            <Card className="bg-linear-to-tl from-[#A361CC] to-[#4BB4F0] shadow-lg shadow-[#6F86EE]">
              <CardBody className="flex flex-row gap-3">
                <div>
                  <Avatar size="lg" />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-white">Jonh Steezy</p>
                  <small className="text-default-600">&#64; Professor</small>
                </div>
              </CardBody>
              <CardFooter>
                <p className="text-[15px]">
                  Hi I'm Jonh Steezy. I'm a professional developer at WebCom2.
                  I'm exited and thank this company that allow release this my
                  oppenion.
                </p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="bg-linear-to-tl from-[#A361CC] to-[#4BB4F0] shadow-lg shadow-[#6F86EE]">
              <CardBody className="flex flex-row gap-3">
                <div>
                  <Avatar size="lg" />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-white">Jonh Steezy</p>
                  <small className="text-default-600">&#64; Professor</small>
                </div>
              </CardBody>
              <CardFooter>
                <p className="text-[15px]">
                  Hi I'm Jonh Steezy. I'm a professional developer at WebCom2.
                  I'm exited and thank this company that allow release this my
                  oppenion.
                </p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="bg-linear-to-tl from-[#A361CC] to-[#4BB4F0] shadow-lg shadow-[#6F86EE]">
              <CardBody className="flex flex-row gap-3">
                <div>
                  <Avatar size="lg" />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-white">Jonh Steezy</p>
                  <small className="text-default-600">&#64; Professor</small>
                </div>
              </CardBody>
              <CardFooter>
                <p className="text-[15px]">
                  Hi I'm Jonh Steezy. I'm a professional developer at WebCom2.
                  I'm exited and thank this company that allow release this my
                  oppenion.
                </p>
              </CardFooter>
            </Card>
          </div>
          
         
        </div>
      </section>
    </div>
  );
}

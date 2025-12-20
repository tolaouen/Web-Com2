"use client";
import {Card, CardBody, CardHeader, CardFooter} from "@heroui/card";
import {Image} from "@heroui/image";
import { Avatar } from "@heroui/avatar";
import React from "react";
import { HeartFilledIcon, ViewsIcon, CommentIcon } from "@/components/icons";
import {Button} from "@heroui/button";

export default function BlogPage() {

  const [liked, setLiked] = React.useState(false);
  return (
    <div>
      <section className="mt-[100px] mb-[50px]">
        <div className="text-center flex flex-col gap-2">
          <div>
            <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] mt-[200px] font-bold inline text-transparent bg-linear-to-tl bg-clip-text from-[#A361CC] to-[#4BB4F0] ">Expore New Information In This Blogs Page 🧐.</h1>
          </div>
        <div>
            <h2 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] mt-[200px] font-bold inline text-transparent bg-linear-to-tl bg-clip-text from-[#EC63C9] to-[#4BB4F0] ">Every Post Check More List Below</h2>
        </div>
        <div>
           <h2 className="text-[50px]">👇</h2>
        </div>
        </div>
      </section>
      {/* Section main blog post */}
      <section>
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-2 md:gap-4 sm:grid sm:grid-cols-2 sm:gap-4 ">
          <div>
            <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] p-[10px]">
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Avatar src="#" title="Profile" />
                  <p className="text-secondary">Ouen Tola</p>
                </div>
                <CardHeader><h1 className="text-center text-[20px] text-default-700 font-semibold capitalize">Python For Interprise</h1></CardHeader>
                <CardBody>
                    <Image src="/code.jpeg" title="Image" className="w-[200px] relative left-10 " />
                </CardBody>  
                <CardFooter>  
                    <div className="flex flex-col gap-4 ">
                      <div className="w-[300px]">
                        <p>Build Application for interprise with python modern features. Learn about python for advance skills.</p>
                     </div>
                     <div className="flex flex-col gap-0 jusitfy-start">
                        <div className="flex flex-row gap-2 items-center">
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                              onPress={() => setLiked((v) => !v)}
                            >
                              <HeartFilledIcon
                                    className={liked ? "[&>path]:stroke-transparent" : ""}
                                    fill={liked ? "currentColor" : "none"}
                              />
                            </Button>
                            <small className="text-default-200 relative bottom-2">100.0K</small>
                        </div>
                        <div className="flex flex-row gap-2 ">
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                            >
                                <ViewsIcon/>
                            </Button>
                            <small className="text-default-200 relative top-2">1.4M</small>
                          </div>
                      </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] p-[10px]">
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Avatar src="#" title="Profile" />
                  <p className="text-secondary">Ouen Tola</p>
                </div>
                <CardHeader><h1 className="text-center text-[20px] text-default-700 font-semibold capitalize">Python For Interprise</h1></CardHeader>
                <CardBody>
                    <Image src="/code.jpeg" title="Image" className="w-[200px] relative left-10 " />
                </CardBody>  
                <CardFooter>  
                    <div className="flex flex-col gap-4 ">
                      <div className="w-[300px]">
                        <p>Build Application for interprise with python modern features. Learn about python for advance skills.</p>
                     </div>
                     <div className="flex flex-col gap-0 jusitfy-start">
                        <div className="flex flex-row gap-2 items-center">
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                              onPress={() => setLiked((v) => !v)}
                            >
                              <HeartFilledIcon
                                    className={liked ? "[&>path]:stroke-transparent" : ""}
                                    fill={liked ? "currentColor" : "none"}
                              />
                            </Button>
                            <small className="text-default-200 relative bottom-2">100.0K</small>
                        </div>
                        <div className="flex flex-row gap-2 ">
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                            >
                                <ViewsIcon/>
                            </Button>
                            <small className="text-default-200 relative top-2">1.4M</small>
                          </div>
                      </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] p-[10px]">
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Avatar src="#" title="Profile" />
                  <p className="text-secondary">Ouen Tola</p>
                </div>
                <CardHeader><h1 className="text-center text-[20px] text-default-700 font-semibold capitalize">Python For Interprise</h1></CardHeader>
                <CardBody>
                    <Image src="/code.jpeg" title="Image" className="w-[200px] relative left-10 " />
                </CardBody>  
                <CardFooter>  
                    <div className="flex flex-col gap-4 ">
                      <div className="w-[300px]">
                        <p>Build Application for interprise with python modern features. Learn about python for advance skills.</p>
                     </div>
                     <div className="flex flex-col gap-0 jusitfy-start">
                        <div className="flex flex-row gap-2 items-center">
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                              onPress={() => setLiked((v) => !v)}
                            >
                              <HeartFilledIcon
                                    className={liked ? "[&>path]:stroke-transparent" : ""}
                                    fill={liked ? "currentColor" : "none"}
                              />
                            </Button>
                            <small className="text-default-200 relative bottom-2">100.0K</small>
                        </div>
                        <div className="flex flex-row gap-2 ">
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                            >
                                <ViewsIcon/>
                            </Button>
                            <small className="text-default-200 relative top-2">1.4M</small>
                          </div>
                      </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] p-[10px]">
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Avatar src="#" title="Profile" />
                  <p className="text-secondary">Ouen Tola</p>
                </div>
                <CardHeader><h1 className="text-center text-[20px] text-default-700 font-semibold capitalize">Python For Interprise</h1></CardHeader>
                <CardBody>
                    <Image src="/code.jpeg" title="Image" className="w-[200px] relative left-10 " />
                </CardBody>  
                <CardFooter>  
                    <div className="flex flex-col gap-4 ">
                      <div className="w-[300px]">
                        <p>Build Application for interprise with python modern features. Learn about python for advance skills.</p>
                     </div>
                     <div className="flex flex-col gap-0 jusitfy-start">
                        <div className="flex flex-row gap-2 items-center">
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                              onPress={() => setLiked((v) => !v)}
                            >
                              <HeartFilledIcon
                                    className={liked ? "[&>path]:stroke-transparent" : ""}
                                    fill={liked ? "currentColor" : "none"}
                              />
                            </Button>
                            <small className="text-default-200 relative bottom-2">100.0K</small>
                        </div>
                        <div className="flex flex-row gap-2 ">
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                            >
                                <ViewsIcon/>
                            </Button>
                            <small className="text-default-200 relative top-2">1.4M</small>
                          </div>
                      </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] p-[10px]">
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Avatar src="#" title="Profile" />
                  <p className="text-secondary">Ouen Tola</p>
                </div>
                <CardHeader><h1 className="text-center text-[20px] text-default-700 font-semibold capitalize">Python For Interprise</h1></CardHeader>
                <CardBody>
                    <Image src="/code.jpeg" title="Image" className="w-[200px] relative left-10 " />
                </CardBody>  
                <CardFooter>  
                    <div className="flex flex-col gap-4 ">
                      <div className="w-[300px]">
                        <p>Build Application for interprise with python modern features. Learn about python for advance skills.</p>
                     </div>
                     <div className="flex flex-col gap-0 jusitfy-start">
                        <div className="flex flex-row gap-2 items-center">
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                              onPress={() => setLiked((v) => !v)}
                            >
                              <HeartFilledIcon
                                    className={liked ? "[&>path]:stroke-transparent" : ""}
                                    fill={liked ? "currentColor" : "none"}
                              />
                            </Button>
                            <small className="text-default-200 relative bottom-2">100.0K</small>
                        </div>
                        <div className="flex flex-row gap-2 ">
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                            >
                                <ViewsIcon/>
                            </Button>
                            <small className="text-default-200 relative top-2">1.4M</small>
                          </div>
                      </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] p-[10px]">
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Avatar src="#" title="Profile" />
                  <p className="text-secondary">Ouen Tola</p>
                </div>
                <CardHeader><h1 className="text-center text-[20px] text-default-700 font-semibold capitalize">Python For Interprise</h1></CardHeader>
                <CardBody>
                    <Image src="/code.jpeg" title="Image" className="w-[200px] relative left-10 " />
                </CardBody>  
                <CardFooter>  
                    <div className="flex flex-col gap-4 ">
                      <div className="w-[300px]">
                        <p>Build Application for interprise with python modern features. Learn about python for advance skills.</p>
                     </div>
                     <div className="flex flex-col gap-0 jusitfy-start">
                        <div className="flex flex-row gap-2 items-center">
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                              onPress={() => setLiked((v) => !v)}
                            >
                              <HeartFilledIcon
                                    className={liked ? "[&>path]:stroke-transparent" : ""}
                                    fill={liked ? "currentColor" : "none"}
                              />
                            </Button>
                            <small className="text-default-200 relative bottom-2">100.0K</small>
                        </div>
                        <div className="flex flex-row gap-2 ">
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                            >
                                <ViewsIcon/>
                            </Button>
                            <small className="text-default-200 relative top-2">1.4M</small>
                          </div>
                      </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      {/* New Section Blog list */}
      <section className="my-[100px]">
        <div className="grid grid-rows-1 gap-5">
          <div>
            <Card>
              <CardHeader>
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Avatar src="#" title="Avatar"/>
                  <p className="text-default-500">Developer</p>
                </div>
              </CardHeader>
              <CardBody>
                <p>
                  check your avaliable status code on command line tools. using github account for managing projects on repository online. Of course the user can manage project personal or colaborations a membership focus the same goals.
                </p>
              </CardBody>
              <CardFooter className="flex flex-row gap-4 justify-end items-center">   
                  <div className="flex flex-row gap-2 items-center">
                    <HeartFilledIcon />
                    <small className="text-default-200">100.0K</small>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <ViewsIcon />
                    <small className="text-default-200">90.4K</small>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <CommentIcon />
                    <small className="text-default-200">Comment</small>
                  </div>  
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Avatar src="#" title="Avatar"/>
                  <p className="text-default-500">Developer</p>
                </div>
              </CardHeader>
              <CardBody>
                <p>
                  check your avaliable status code on command line tools. using github account for managing projects on repository online. Of course the user can manage project personal or colaborations a membership focus the same goals.
                </p>
              </CardBody>
              <CardFooter className="flex flex-row gap-4 justify-end items-center">   
                  <div className="flex flex-row gap-2 items-center">
                    <HeartFilledIcon />
                    <small className="text-default-200">100.0K</small>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <ViewsIcon />
                    <small className="text-default-200">90.4K</small>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <CommentIcon />
                    <small className="text-default-200">Comment</small>
                  </div>  
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Avatar src="#" title="Avatar"/>
                  <p className="text-default-500">Developer</p>
                </div>
              </CardHeader>
              <CardBody>
                <p>
                  check your avaliable status code on command line tools. using github account for managing projects on repository online. Of course the user can manage project personal or colaborations a membership focus the same goals.
                </p>
              </CardBody>
              <CardFooter className="flex flex-row gap-4 justify-end items-center">   
                  <div className="flex flex-row gap-2 items-center">
                    <HeartFilledIcon />
                    <small className="text-default-200">100.0K</small>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <ViewsIcon />
                    <small className="text-default-200">90.4K</small>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <CommentIcon />
                    <small className="text-default-200">Comment</small>
                  </div>  
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Avatar src="#" title="Avatar"/>
                  <p className="text-default-500">Developer</p>
                </div>
              </CardHeader>
              <CardBody>
                <p>
                  check your avaliable status code on command line tools. using github account for managing projects on repository online. Of course the user can manage project personal or colaborations a membership focus the same goals.
                </p>
              </CardBody>
              <CardFooter className="flex flex-row gap-4 justify-end items-center">   
                  <div className="flex flex-row gap-2 items-center">
                    <HeartFilledIcon />
                    <small className="text-default-200">100.0K</small>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <ViewsIcon />
                    <small className="text-default-200">90.4K</small>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <CommentIcon />
                    <small className="text-default-200">Comment</small>
                  </div>  
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Avatar src="#" title="Avatar"/>
                  <p className="text-default-500">Developer</p>
                </div>
              </CardHeader>
              <CardBody>
                <p>
                  check your avaliable status code on command line tools. using github account for managing projects on repository online. Of course the user can manage project personal or colaborations a membership focus the same goals.
                </p>
              </CardBody>
              <CardFooter className="flex flex-row gap-4 justify-end items-center">   
                  <div className="flex flex-row gap-2 items-center">
                    <HeartFilledIcon />
                    <small className="text-default-200">100.0K</small>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <ViewsIcon />
                    <small className="text-default-200">90.4K</small>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <CommentIcon />
                    <small className="text-default-200">Comment</small>
                  </div>  
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Avatar src="#" title="Avatar"/>
                  <p className="text-default-500">Developer</p>
                </div>
              </CardHeader>
              <CardBody>
                <p>
                  check your avaliable status code on command line tools. using github account for managing projects on repository online. Of course the user can manage project personal or colaborations a membership focus the same goals.
                </p>
              </CardBody>
              <CardFooter className="flex flex-row gap-4 justify-end items-center">   
                  <div className="flex flex-row gap-2 items-center">
                    <HeartFilledIcon />
                    <small className="text-default-200">100.0K</small>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <ViewsIcon />
                    <small className="text-default-200">90.4K</small>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <CommentIcon />
                    <small className="text-default-200">Comment</small>
                  </div>  
              </CardFooter>
            </Card>
          </div>

        </div>
      </section>
    </div>
  );
}

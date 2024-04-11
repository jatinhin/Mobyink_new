"use client";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import Section from "@/components/ui/section";
import { IconBadge, IconStarFilled, IconUser } from "@tabler/icons-react";
const Hero = () => {
  return (
    <Section className=" py-[clamp(3rem,2vw,12rem)] flex items-center justify-center relative">
      <SparklesCore
        background="white"
        particleColor="#5952e0"
        maxSize={1}
        particleDensity={50}
        className="absolute inset-0 w-full h-full z-[-1]"
      />
      <div className="wrapper flex flex-col gap-6 items-center">
        <Badge
          size={"md"}
          shimmer
          variant={"default-opacity"}
          className="rounded-full font-normal pl-2"
        >
          <IconBadge className="w-4 h-4" /> Trusted by Thousands
        </Badge>
        <div className="flex flex-col gap-4">
          <Heading
            size={"xl"}
            className="text-center font-black max-w-5xl leading-tight"
          >
            Navigate Taxes, Simplify Lives with{" "}
            <span className="text-gradient">MrTaxpert</span>
          </Heading>
          <Text size={"md"} className="max-w-xl text-center mx-auto">
            Your partner for financial clarity. MrTaxpert transforms tax
            complexities into effortless solutions. Contact our sales team and
            redefine your financial journey.
          </Text>
        </div>
        <div className="flex md:flex-row flex-col  w-full gap-2 items-center mt-6 md:max-w-xs">
          <Link
            href={"/contact-us"}
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "rounded-full w-full"
            )}
          >
            Contact us
          </Link>
          <Link
            href={"https://cal.com/mrtaxpert/15min"}
            target="_blank"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full w-full"
            )}
          >
            Book an Online Meeting
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Hero;

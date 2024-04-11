import React from "react";
import { Heading } from "../ui/heading";
import Link from "next/link";
import {
  MessageSquareIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import { Text } from "../ui/text";
import { WEBSITE_META } from "@/data/constant";

const FOOTER_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Contact us",
    href: "/contact-us",
  },
];
const SOCIAL_LINKS = [
  {
    label: "Home",
    href: "/",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mrtaxp3rt",
    icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/7737299199/?text=Hello,%20I'd%20like%20some%20information",  
    icon: MessageSquareIcon,  
  },
  {
    label: "Linkedin",
    href: "/contact-us",
    icon: LinkedinIcon,
  },
  {
    label: "Youtube",
    href: "/contact-us",
    icon: YoutubeIcon,
  },
];
const Footer = () => {
  return (
    <footer className="py-12 bg-secondary flex flex-col gap-10">
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <Heading size={"md"}>{WEBSITE_META.siteName}</Heading>
        <Text size={"xs"} className="max-w-sm mx-auto text-center line-clamp-3">
          {WEBSITE_META.description}
        </Text>
        <ul className="flex gap-4 items-center">
          {SOCIAL_LINKS.map((link) => {
            return (
              <li className="text-foreground/50" key={link.label}>
                <Link href={link.href} passHref>
                    <link.icon className="w-5 h-5" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="wrapper flex gap-4 flex-wrap justify-center">
        <ul className="flex  gap-4 text-xs">
          {FOOTER_LINKS.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Text className="items-center justify-center flex " size={"xs"}>
        ©2024 MrTaxpert. All Rights Reserved.
      </Text>
    </footer>
  );
};

export default Footer;

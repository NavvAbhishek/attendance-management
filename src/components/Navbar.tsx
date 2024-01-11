"use client";
import Image from "next/image";
import logo from "../../public/Logo-RmBg.png";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-dark-blue">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="">
            <span className="sr-only">Your Company</span>
            <Image
              src={logo}
              alt="Picture of the author"
              width={70}
              height={70}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark-yellow"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/dashboard"
            className="text-sm font-semibold leading-6 text-dark-yellow"
          >
            Dashboard
          </Link>
          <Link
            href="/profile"
            className="text-sm font-semibold leading-6 text-dark-yellow"
          >
            Profile
          </Link>
          <Link
            href="/profile/mark-attendance"
            className="text-sm font-semibold leading-6 text-dark-yellow"
          >
            Mark Attendance
          </Link>
          <Link
            href="/about-us"
            className="text-sm font-semibold leading-6 text-dark-yellow"
          >
            About us
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center">
          <a href="/login" className="yellow-button">
            Getting Started <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-normal-blue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Image
              src={logo}
              alt="Logo"
              width={80}
              height={80}
              className="cursor-pointer"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-dark-yellow"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/dashboard"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark-yellow hover:bg-dark-blue"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark-yellow hover:bg-dark-blue"
                >
                  Profile
                </Link>
                <Link
                  href="/profile/mark-attendance"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark-yellow hover:bg-dark-blue"
                >
                  Mark Attendance
                </Link>
                <Link
                  href="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark-yellow hover:bg-dark-blue"
                >
                  About us
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-dark-yellow hover:bg-dark-blue"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

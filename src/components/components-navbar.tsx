"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, Plus } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Daily Data Recording", href: "/record-daily-data" },
];

const registerItems = [
  { name: "Register Cow", href: "/register" },
  { name: "Register Farmer", href: "/register-farmer" },
];

export function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
        href="/"
        className="text-2xl flex items-center font-bold text-green-800 p-4"
          >
        <Image
          src="/logo.jpeg"
          alt="EcoDairy.AI"
          width={75}
          height={75}
          className="rounded-full p-4"
        />
        <p className="text-sm text-green-500">Ecodairy.AI</p>
          </Link>
          <div className="hidden md:flex items-center space-x-4 flex-1 justify-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === item.href
            ? "text-primary"
            : "text-muted-foreground"
            )}
          >
            {item.name}
          </Link>
        ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
          Register <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            {registerItems.map((item) => (
          <DropdownMenuItem key={item.name} asChild>
            <Link
              href={item.href}
              className={cn(
            "w-full",
            pathname === item.href
              ? "bg-accent text-accent-foreground"
              : ""
              )}
            >
              <Plus className="mr-2 h-4 w-4" />
              {item.name}
            </Link>
          </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
          </div>
          <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            {navItems.concat(registerItems).map((item) => (
          <DropdownMenuItem key={item.name} asChild>
            <Link
              href={item.href}
              className={cn(
            "w-full",
            pathname === item.href
              ? "bg-accent text-accent-foreground"
              : ""
              )}
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}

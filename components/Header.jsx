import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { checkUser } from "@/lib/checkUser";
import ThemeToggle from "./ThemeToggle";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg dark:border-gray-700 z-50">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Hiretrack logo"
            width={100}
            height={70}
            priority
            className="rounded-full py-1 w-auto object-contain"
          />
        </Link>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Navigation & User Actions */}
        <div className="flex items-center space-x-3 md:space-x-6">
          <SignedIn>
            {/* Industry Insights Button */}
            <Link href={"/dashboard"}>
              <Button
                variant="outline"
                className="dark:border-gray-600 dark:text-white hover:dark:bg-gray-800"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>

            {/* Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                <DropdownMenuItem>
                  <Link className="flex items-center gap-2" href={"/resume"}>
                    <FileText className="h-4 w-4" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link
                    className="flex items-center gap-2"
                    href={"/ai-cover-letter"}
                  >
                    <PenBox className="h-4 w-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link className="flex items-center gap-2" href={"/interview"}>
                    <GraduationCap className="h-4 w-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          {/* Sign In Button */}
          <SignedOut>
            <SignInButton>
              <Button
                variant="outline"
                className="dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          {/* User Profile Button */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard:
                    "shadow-xl dark:bg-gray-900 dark:border-gray-700",
                  userPreviewMainIdentifier: "font-semibold dark:text-white",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;

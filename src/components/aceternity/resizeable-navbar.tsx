"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ModeToggle } from "../ui/theme-toggle";
import { Github } from "lucide-react";

export function AceNavbar() {
  const navItems = [
    {
      name: "Components",
      link: "/components",
    },
    {
      name: "Theme",
      link: "/theme",
    },
    {
      name: "Documentation",
      link: `${process.env.NEXT_PUBLIC_DOC_URL}`,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-9999">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />

          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <NavbarButton variant="secondary">
              {" "}
              <ModeToggle />
            </NavbarButton>
            <NavbarButton
              variant="secondary"
              as="a"
              href="https://github.com/bunseueng/shadcnmiju"
              target="blank"
            >
              <Github />
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <NavbarButton variant="secondary">
                  {" "}
                  <ModeToggle />
                </NavbarButton>
                <NavbarButton
                  variant="secondary"
                  as="a"
                  href="https://github.com/bunseueng/shadcnmiju"
                  target="blank"
                >
                  <Github />
                </NavbarButton>
              </div>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

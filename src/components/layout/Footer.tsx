import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold text-black dark:text-white">
                shadcnmiju
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Beautiful, reusable React components built with Tailwind CSS and
              shadcn/ui.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/components"
                  className="hover:text-foreground transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href={`${process.env.NEXT_PUBLIC_DOC_URL}`}
                  className="hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href={`${process.env.NEXT_PUBLIC_DOC_URL}/getting-started/installation`}
                  className="hover:text-foreground transition-colors"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href={`${process.env.NEXT_PUBLIC_DOC_URL}/getting-started/cli`}
                  className="hover:text-foreground transition-colors"
                >
                  CLI Usage
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/bunseueng/shadcnmiju"
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground flex flex-col lg:flex-row items-center lg:items-start space-y-4 justify-between flex-wrap">
          <div className="flex flex-col lg:items-start gap-2 space-y-4">
            <p>
              This is an independent project and is not affiliated with or
              endorsed by shadcn/ui or tweakcn.
            </p>
            <p>&copy; {currentYear} shadcnmiju. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://github.com/bunseueng.png"
                alt="bunseueng"
              />
            </Avatar>
            <span>
              developed by{" "}
              <Link
                href="https://github.com/bunseueng/shadcnmiju"
                className="border-b border-dashed border-orange-400"
              >
                @bunseueng
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

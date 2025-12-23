"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const codes = [
  `"use client"
import * as React from "react"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
`,

  `"use client"
import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"`,

  `import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
`,
];

export default function TerminalSnippet() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [codeIndex, setCodeIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentCode = codes[codeIndex];
      setDisplayedCode(currentCode.slice(0, charIndex));
      charIndex++;

      const ele = document.getElementById("container");
      if (ele) {
        ele.scrollTop = ele?.scrollHeight;
      }
      if (charIndex > currentCode.length) {
        // Pause before switching to next code snippet
        timeoutId = setTimeout(() => {
          charIndex = 0;
          setCodeIndex((prev) => (prev + 1) % codes.length);
        }, 500); // 1.5 seconds pause
      } else {
        timeoutId = setTimeout(type, 20);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, [codeIndex]);
  return (
    <div className="relative hidden lg:flex flex-col gap-4 justify-center h-full my-auto">
      <div className="relative w-full h-full transition-all duration-350  shadow-2xl min-h-[240px]">
        {/* Terminal top bar */}
        <div className="jsx-75ecec9be69de278 flex items-center gap-2 px-4 py-1.5 bg-[#e0e0e0] rounded-t-2xl border-b border-slate-300 select-none relative">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex flex-1 justify-end left-0 right-0">
            <span className="text-sm text-slate-700 text-center font-semibold">
              Terminal — bunseueng@portfolio
            </span>
          </div>
        </div>
        <div className="rounded-b-2xl overflow-hidden bg-[#181c23] border-t-0 border border-slate-700 p-0 sm:p-2 min-h-0 h-auto w-full ">
          <div className="bg-[#0f172a] rounded-xl p-4 font-mono text-xs text-slate-300 shadow-2xl min-h-0 w-full flex flex-col border border-slate-700 transition-all duration-300 home-terminal h-150 overflow-y-auto scrollbar-hide">
            {/* Syntax highlighted code */}
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "1rem",
                background: "transparent",
                fontSize: "0.9rem",
                backgroundColor: "#181c23",
                height: "100",
                overflow: "auto",
              }}
              id="container"
              showLineNumbers={true}
            >
              {displayedCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}

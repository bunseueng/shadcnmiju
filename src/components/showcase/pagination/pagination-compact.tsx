"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const PaginationCompact = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="flex items-center gap-1 min-w-[100px] justify-center">
        <span className="text-sm font-medium text-foreground">{currentPage}</span>
        <span className="text-sm text-muted-foreground">/</span>
        <span className="text-sm text-muted-foreground">{totalPages}</span>
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PaginationCompact;

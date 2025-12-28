import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useState } from "react";

const PaginationButtonGroup = () => {
  const [currentPage, setCurrentPage] = useState(5);
  const totalPages = 20;

  const goToFirst = () => setCurrentPage(1);
  const goToPrevious = () => setCurrentPage(Math.max(1, currentPage - 1));
  const goToNext = () => setCurrentPage(Math.min(totalPages, currentPage + 1));
  const goToLast = () => setCurrentPage(totalPages);

  return (
    <ButtonGroup>
      <Button
        variant="outline"
        size="icon"
        onClick={goToFirst}
        disabled={currentPage === 1}
      >
        <ChevronsLeft />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={goToPrevious}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </Button>
      <ButtonGroupText>
        {currentPage} / {totalPages}
      </ButtonGroupText>
      <Button
        variant="outline"
        size="icon"
        onClick={goToNext}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={goToLast}
        disabled={currentPage === totalPages}
      >
        <ChevronsRight />
      </Button>
    </ButtonGroup>
  );
};

export default PaginationButtonGroup;

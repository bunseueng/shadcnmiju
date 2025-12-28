"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { ArrowUpDown, Filter, Search, X } from "lucide-react";
import { useState } from "react";

const FilterButtonGroup = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const toggleSort = () => {
    setSortOrder((prev) =>
      prev === null ? "asc" : prev === "asc" ? "desc" : null
    );
  };

  const toggleFilter = () => setIsFiltered(!isFiltered);
  const toggleSearch = () => setIsSearching(!isSearching);
  const clearAll = () => {
    setSortOrder(null);
    setIsFiltered(false);
    setIsSearching(false);
  };

  const hasActiveFilters = sortOrder || isFiltered || isSearching;

  return (
    <div className="flex items-center gap-2">
      <ButtonGroup>
        <Button
          variant={sortOrder ? "default" : "outline"}
          size="sm"
          onClick={toggleSort}
        >
          <ArrowUpDown className="h-4 w-4" />
          Sort {sortOrder && `(${sortOrder})`}
        </Button>
        <Button
          variant={isFiltered ? "default" : "outline"}
          size="sm"
          onClick={toggleFilter}
        >
          <Filter className="h-4 w-4" />
          Filter
        </Button>
        <Button
          variant={isSearching ? "default" : "outline"}
          size="sm"
          onClick={toggleSearch}
        >
          <Search className="h-4 w-4" />
          Search
        </Button>
      </ButtonGroup>
      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={clearAll}>
          <X className="h-4 w-4" />
          Clear
        </Button>
      )}
    </div>
  );
};

export default FilterButtonGroup;

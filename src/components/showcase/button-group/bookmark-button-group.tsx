"use client";

import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkCheck, FolderPlus, Share } from "lucide-react";
import { useState } from "react";

const BookmarkButtonGroup = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isOrganizing, setIsOrganizing] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const organizeBookmarks = () => {
    setIsOrganizing(true);
    setTimeout(() => {
      setIsOrganizing(false);
    }, 1500);
  };

  const shareBookmark = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <Button
        variant={isBookmarked ? "default" : "outline"}
        size="sm"
        className="rounded-r-none border-r-0"
        onClick={toggleBookmark}
      >
        {isBookmarked ? (
          <BookmarkCheck className="h-4 w-4 mr-2" />
        ) : (
          <Bookmark className="h-4 w-4 mr-2" />
        )}
        {isBookmarked ? "Saved" : "Save"}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="rounded-none border-r-0"
        onClick={organizeBookmarks}
        disabled={isOrganizing}
      >
        <FolderPlus className="h-4 w-4 mr-2" />
        {isOrganizing ? "Organizing..." : "Organize"}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="rounded-l-none"
        onClick={shareBookmark}
      >
        <Share className="h-4 w-4 mr-2" />
        Share
      </Button>
    </div>
  );
};

export default BookmarkButtonGroup;

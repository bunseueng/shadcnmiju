"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const artworks = [
  { title: "Abstract", artist: "John Doe", image: "🎨" },
  { title: "Landscape", artist: "Jane Smith", image: "🏞️" },
  { title: "Portrait", artist: "Bob Johnson", image: "👤" },
  { title: "Still Life", artist: "Alice Brown", image: "🍎" },
  { title: "Modern", artist: "Charlie Wilson", image: "🔷" },
  { title: "Classic", artist: "Diana Lee", image: "🖼️" },
  { title: "Surreal", artist: "Eve Martin", image: "🌀" },
  { title: "Minimal", artist: "Frank White", image: "⬜" },
];

const ScrollAreaHorizontal = () => {
  return (
    <ScrollArea className="w-full max-w-md whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {artworks.map((artwork) => (
          <div
            key={artwork.title}
            className="shrink-0 w-[150px] rounded-md border p-4"
          >
            <div className="text-4xl mb-2 text-center">{artwork.image}</div>
            <div className="text-sm font-medium text-foreground">{artwork.title}</div>
            <div className="text-xs text-muted-foreground">{artwork.artist}</div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ScrollAreaHorizontal;

import { AspectRatio } from "@/components/ui/aspect-ratio";

const YoutubeShortRatio = () => {
  return (
    <div className="w-full max-w-xs">
      <AspectRatio ratio={9 / 16} className="bg-muted overflow-hidden">
        <img
          src="/assets/placeholder.jpeg"
          alt="YouTube Shorts 9:16"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default YoutubeShortRatio;

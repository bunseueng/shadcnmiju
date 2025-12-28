import { AspectRatio } from "@/components/ui/aspect-ratio";

const CinemaRatio = () => {
  return (
    <div className="w-full max-w-3xl">
      <AspectRatio ratio={2.35} className="bg-muted overflow-hidden">
        <img
          src="/assets/placeholder.jpeg"
          alt="Cinema 2.35:1"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default CinemaRatio;

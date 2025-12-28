import { AspectRatio } from "@/components/ui/aspect-ratio";

const TvRatio = () => {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={4 / 3} className="bg-muted overflow-hidden">
        <img
          src="/assets/placeholder.jpeg"
          alt="TV 4:3"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default TvRatio;

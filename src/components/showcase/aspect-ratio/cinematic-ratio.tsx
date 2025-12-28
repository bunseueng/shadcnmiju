import { AspectRatio } from "@/components/ui/aspect-ratio";

const CinematicRatio = () => {
  return (
    <div className="w-full max-w-3xl">
      <AspectRatio ratio={21 / 9} className="bg-muted overflow-hidden">
        <img
          src="/assets/placeholder.jpeg"
          alt="Cinematic 21:9"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default CinematicRatio;

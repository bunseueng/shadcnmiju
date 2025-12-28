import { AspectRatio } from "@/components/ui/aspect-ratio";

const ClassicFilmRatio = () => {
  return (
    <div className="w-full max-w-xl">
      <AspectRatio ratio={3 / 2} className="bg-muted overflow-hidden">
        <img
          src="/assets/placeholder.jpeg"
          alt="Classic Film 3:2"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default ClassicFilmRatio;

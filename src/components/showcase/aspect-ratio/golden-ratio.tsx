import { AspectRatio } from "@/components/ui/aspect-ratio";

const GoldenRatio = () => {
  return (
    <div className="w-full max-w-lg">
      <AspectRatio ratio={1.618} className="bg-muted overflow-hidden">
        <img
          src="/assets/placeholder.jpeg"
          alt="Golden Ratio 1.618:1"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default GoldenRatio;

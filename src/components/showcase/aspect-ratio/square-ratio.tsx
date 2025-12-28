import { AspectRatio } from "@/components/ui/aspect-ratio";

const SquareRatio = () => {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={1} className="bg-muted overflow-hidden">
        <img
          src="/assets/placeholder.jpeg"
          alt="Square 1:1"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default SquareRatio;
